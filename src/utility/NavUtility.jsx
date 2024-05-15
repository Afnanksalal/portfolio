// nav bar utils
export const handleNavItemClick = (e, navItem, setActiveHeadNav, setIsMenuOpen) => {
    e.preventDefault();
    const sectionElement = document.getElementById(navItem);
    if (sectionElement) {
        sectionElement.scrollIntoView();
    }
    if (!setActiveHeadNav) return
    if (!setIsMenuOpen) return
    setIsMenuOpen(false);
    setActiveHeadNav(navItem);
    document.body.classList.remove('no-scroll');
};

export const closeMenu = (isMenuOpen, setIsMenuOpen) => {
    setIsMenuOpen(false);
     if (!isMenuOpen) {
        document.body.classList.remove('no-scroll');
    } else {
        document.body.classList.add('no-scroll');
    }
}

export const toggleMenu = (isMenuOpen, setIsMenuOpen) => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
        document.body.classList.add('no-scroll');
    } else {
        document.body.classList.remove('no-scroll');
    }
};

// 