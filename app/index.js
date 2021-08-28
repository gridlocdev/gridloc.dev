function toggleTheme() {
    var rootElement = document.getElementsByTagName('html')[0]
    const themeStatus = rootElement.getAttribute('data-theme')
    switch (themeStatus) {
        case 'light':
            rootElement.setAttribute('data-theme', 'dark')
            break
        case 'dark':
            rootElement.setAttribute('data-theme', 'light')
            break
        default:
            rootElement.setAttribute('data-theme', 'light')
            break
    }
}