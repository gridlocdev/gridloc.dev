function toggleTheme() {
    let rootElement = document.getElementsByTagName('html')[0]
    const themeStatus = rootElement.getAttribute('data-theme')

    let darkThemeToggleButtons = document.querySelectorAll('.dark-theme-toggle')

    switch (themeStatus) {
        case 'light':
            rootElement.setAttribute('data-theme', 'dark')
            darkThemeToggleButtons.forEach(element => {
                element.setAttribute('src', 'assets/images/dark_mode_black_24dp.svg')
                element.src = './assets/images/light_mode_black_24dp.svg'
            })
            break
        case 'dark':
            rootElement.setAttribute('data-theme', 'light')
            darkThemeToggleButtons.forEach(element => {
                element.setAttribute('src', 'assets/images/light_mode_black_24dp.svg')
                element.src = './assets/images/light_mode_black_24dp.svg'
            })
            break
        default:
            rootElement.setAttribute('data-theme', 'light')
            darkThemeToggleButtons.forEach(element => {
                element.src = 'assets/images/light_mode_black_24dp.svg'
                element.setAttribute('src', 'assets/images/light_mode_black_24dp.svg')
            })
            break
    }
}