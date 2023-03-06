const toggleThemeBtn = document.querySelector('.toggle-theme');
toggleThemeBtn.addEventListener('click', () => {
    if (preferedTheme === Themes.dark) {
        document.head.removeChild(linkEl);
        preferedTheme = Themes.light;
    } else {
        document.head.appendChild(linkEl);
        preferedTheme = Themes.dark;
    }
});