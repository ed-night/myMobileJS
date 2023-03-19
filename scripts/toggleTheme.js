const toggleThemeBtn = document.querySelector('.checkbox-theme');
const klor = document.querySelector('.klor');
toggleThemeBtn.addEventListener('click', () => {
    // change,(e)
    if (preferedTheme === Themes.dark) {
        klor.classList.remove('input-tr');
        document.head.removeChild(linkEl);
        preferedTheme = Themes.light;
    } else {
        klor.classList.toggle('input-tr');
        document.head.appendChild(linkEl);
        preferedTheme = Themes.dark;
    }
});