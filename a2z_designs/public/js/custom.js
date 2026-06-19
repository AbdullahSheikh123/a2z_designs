$(document).ready(function ()
{
    $("#sidebarCollapse").on("click", function ()
    {
        $("#content").toggleClass("wrapper-active");
        $(this).toggleClass("");
    });


    $("#sidebarCollapse").on("click", function ()
    {
        $("#sidebar").toggleClass("menu-design");
        $(this).toggleClass("close-menu");
    });

    var $sidebar = $('#sidebar');
    var $sideMenu = $('ul.sidemenu-design', $sidebar);
    var $anchorLinks = $("li > a", $sideMenu);

    $anchorLinks.on("mouseenter", function ()
    {
        if (!$sidebar.hasClass('menu-design'))
        {
            $sidebar.addClass('menu-design');
        }
    });

    $sideMenu.on('mouseleave', function ()
    {
        $sidebar.removeClass('menu-design');
        $("#content").removeClass("wrapper-active");

    });

    

    //$(window).resize(function ()
    //{
    //    var bodyheight = $(this).height();
    //    $(".sidebar ul").height(bodyheight);
    //}).resize();

});
