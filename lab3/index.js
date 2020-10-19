function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'})
}

(function () {
    const header = document.getElementById('header-row')
    const toTopButton = document.getElementById('to-top-btn')
    const hamburgerBtn = document.getElementById('hamburger-btn')
    const mobileNavigationDropdown = document.getElementById('mobile-navigation-dropdown')

    function updateScrollState() {
        if (scrollY > 100 || isMobileNavigationOpen()) {
            header.classList.add('primary')
            header.classList.remove('bigger-spacing')

            toTopButton.classList.remove('hidden')
            toTopButton.classList.add('visible')
        } else {
            header.classList.remove('primary')
            header.classList.add('bigger-spacing')

            toTopButton.classList.add('hidden')
            toTopButton.classList.remove('visible')
        }
    }

    updateScrollState()
    onscroll = updateScrollState

    function isMobileNavigationOpen() {
        return mobileNavigationDropdown.classList.contains('visible')
    }

    function closeMobileNavigation() {
        hamburgerBtn.textContent = 'menu'
        mobileNavigationDropdown.classList.remove('visible')
        mobileNavigationDropdown.classList.add('hidden')
    }

    function openMobileNavigation() {
        hamburgerBtn.textContent = 'close'
        mobileNavigationDropdown.classList.add('visible')
        mobileNavigationDropdown.classList.remove('hidden')
    }

    hamburgerBtn.onclick = () => {
        if (isMobileNavigationOpen()) {
            closeMobileNavigation()
        } else {
            openMobileNavigation()
        }
        updateScrollState()
    }
})()
