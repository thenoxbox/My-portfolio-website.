const menu_button = $(".hamburger");
const mobile_menu = $(".mobile-nav")
menu_button.click(function () {
    menu_button.toggleClass("is-active"); 
    mobile_menu.toggleClass("is-active");
});