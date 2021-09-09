function scrollToElement(elementID) {
    const targetElement = document.getElementById(elementID)
    const navbarHeight = getNavbarHeight()
    const y = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight

    window.scrollTo({top: y, behavior: 'smooth'})
}

function getNavbarHeight() {
    const currentViewport = getViewport()

    switch (currentViewport) {
        case 'xs':
        case 'sm':
            return 48
        case 'md':
        case 'lg':
        case 'xl':
            return 58
        default:
            console.log("Not sure how you got here.")
            break;
    }
}

function getViewport () {
    const width = Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0
    )
    if (width <= 576) return 'xs'
    if (width <= 768) return 'sm'
    if (width <= 992) return 'md'
    if (width <= 1200) return 'lg'
    return 'xl'
  }