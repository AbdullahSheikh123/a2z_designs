const getGreetingTime = (now = null) => {
    if (!now) {
        now = new Date()
    }

    if (now.getHours() > 5 && now.getHours() <= 12) {
        return 'Morning';
    } else if (now.getHours() > 12 && now.getHours() <= 16) {
        return 'Afternoon';
    } else if (now.getHours() > 16 && now.getHours() <= 20) {
        return 'Evening';
    } else if (now.getHours() > 20 && now.getHours() <= 24 || now.getHours() >= 0 && now.getHours() <= 5) {
        return 'Night';
    } else {
        return 'Morning';
    }
}

if (frappe.boot.navbar_settings) {
    frappe.boot.navbar_settings.greeting = getGreetingTime();
}

const hiddenUserMenuItems = new Set([
    'about',
    'frappe support',
]);

const deskLogoUrl = '/assets/a2z_designs/images/tech4all-logo.svg';

const normalizeMenuText = (text = '') => text.replace(/\s+/g, ' ').trim().toLowerCase();

if (frappe.boot.navbar_settings) {
    [
        frappe.boot.navbar_settings.settings_dropdown,
        frappe.boot.navbar_settings.help_dropdown,
    ].forEach((dropdownItems) => {
        (dropdownItems || []).forEach((item) => {
            if (hiddenUserMenuItems.has(normalizeMenuText(item.item_label))) {
                item.hidden = true;
            }
        });
    });
}

const hideUnsupportedUserMenuItems = () => {
    const menuItems = document.querySelectorAll(
        [
            '.dropdown-menu-item',
            '.dropdown-menu a',
            '.dropdown-menu button',
            '.dropdown-menu [role="menuitem"]',
            '.popover a',
            '.popover button',
            '.popover [role="menuitem"]',
            '[data-radix-popper-content-wrapper] a',
            '[data-radix-popper-content-wrapper] button',
            '[data-radix-popper-content-wrapper] [role="menuitem"]',
        ].join(',')
    );

    menuItems.forEach((item) => {
        const menuTitle = item.querySelector('.menu-item-title');
        const itemText = normalizeMenuText(menuTitle ? menuTitle.textContent : item.textContent);

        if (hiddenUserMenuItems.has(itemText)) {
            const removableItem = item.closest('.dropdown-menu-item, li, .dropdown-item, [role="menuitem"], a, button');
            if (removableItem) {
                removableItem.style.display = 'none';
                removableItem.hidden = true;
            }
        }
    });
};

const mountDeskLogo = (element) => {
    if (!element || element.dataset.tech4allLogoMounted) {
        return;
    }

    if (element.tagName === 'IMG') {
        element.src = deskLogoUrl;
        element.alt = 'Tech4All';
        element.dataset.tech4allLogoMounted = 'true';
        element.style.objectFit = 'contain';
        return;
    }

    element.dataset.tech4allLogoMounted = 'true';
    element.innerHTML = '';
    element.style.display = 'flex';
    element.style.alignItems = 'center';
    element.style.justifyContent = 'center';

    const logo = document.createElement('img');
    logo.src = deskLogoUrl;
    logo.alt = 'Tech4All';
    logo.style.width = '92px';
    logo.style.maxWidth = '92px';
    logo.style.height = '34px';
    logo.style.objectFit = 'contain';

    element.appendChild(logo);
};

const showDeskLogo = () => {
    [
        '#brand-logo',
        '.navbar-home #brand-logo',
        '.desktop-navbar .navbar-home img',
        '.navbar-home img',
        '.navbar-brand img',
        '.app-logo',
    ].forEach((selector) => {
        document.querySelectorAll(selector).forEach(mountDeskLogo);
    });

    const topLeftLogo = Array.from(document.querySelectorAll('header a, header button, nav a, nav button, a, button'))
        .find((element) => {
            if (element.dataset.tech4allLogoMounted) {
                return false;
            }

            const rect = element.getBoundingClientRect();
            const isTopLeft = rect.left >= 0 && rect.left < 90 && rect.top >= 0 && rect.top < 110;
            const isSmallControl = rect.width >= 24 && rect.width <= 72 && rect.height >= 24 && rect.height <= 72;

            return isTopLeft && isSmallControl && element.querySelector('svg');
        });

    mountDeskLogo(topLeftLogo);
};

const setupUserMenuCleanup = () => {
    hideUnsupportedUserMenuItems();
    showDeskLogo();

    document.addEventListener('click', () => {
        setTimeout(hideUnsupportedUserMenuItems, 0);
        setTimeout(hideUnsupportedUserMenuItems, 100);
        setTimeout(showDeskLogo, 0);
        setTimeout(showDeskLogo, 100);
    });

    const observer = new MutationObserver(() => {
        hideUnsupportedUserMenuItems();
        showDeskLogo();
    });
    observer.observe(document.body, {
        childList: true,
        subtree: true,
    });
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupUserMenuCleanup);
} else {
    setupUserMenuCleanup();
}
