function scrollToElement(elementID) {
    const targetElement = document.getElementById(elementID)
    const navbarHeight = document.getElementById('navbar').offsetHeight
    const y = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight

    window.scrollTo({top: y, behavior: 'smooth'})
}