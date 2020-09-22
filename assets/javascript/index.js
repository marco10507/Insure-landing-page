function openMenu() {
    let mobileMenuButton = document.getElementsByClassName("mobile-menu-button")[0];

    if (mobileMenuButton.className.includes('open')) {
        mobileMenuButton.className = 'mobile-menu-button close';
    } else if (mobileMenuButton.className.includes('close')) {
        mobileMenuButton.className = 'mobile-menu-button open';
    }

    let navContainer = document.getElementsByClassName("nav-container")[0];

    if (navContainer.className.includes('disable')) {
        navContainer.className = 'nav-container enable';
    } else if (navContainer.className.includes('enable')) {
        navContainer.className = 'nav-container disable';
    }
}