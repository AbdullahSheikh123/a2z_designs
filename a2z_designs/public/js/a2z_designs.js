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