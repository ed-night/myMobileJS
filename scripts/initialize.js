// Define global constants
const Themes = {
    light: 'light',
    dark: 'dark'
}

// Define global vairables
let preferedTheme = Themes.light;



// Create link element with dark theme css
const linkEl = document.createElement('link');
linkEl.setAttribute('rel', 'stylesheet');
linkEl.setAttribute('href', `styles/dark.css`);

// Set dark theme
const prefersDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
if (prefersDarkTheme) {
    // preferedTheme = Themes.dark;
    // document.head.appendChild(linkEl);
}