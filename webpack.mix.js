let mix = require('laravel-mix');

mix.setPublicPath('./')
    // Chrome
    .sass('assets/sass/popup.scss', 'dist/chrome/css')
    .js('assets/js/inject.js', 'dist/chrome/js')
    .js('assets/js/background.js', 'dist/chrome/js')
    .js('assets/js/popup.js', 'dist/chrome/js').vue()
    .copy('assets/images/', 'dist/chrome/images')
    .copy('popup.html', 'dist/chrome/popup.html')
    .copy('chrome-manifest.json', 'dist/chrome/manifest.json')

// Firefox
.copy('dist/chrome/css/popup.css', 'dist/firefox/css')
    .js('assets/js/inject.js', 'dist/firefox/js')
    .js('assets/js/background.js', 'dist/firefox/js')
    .js('assets/js/popup.js', 'dist/firefox/js').vue()

.copy('assets/images/', 'dist/firefox/images')
    .copy('popup.html', 'dist/firefox/popup.html')
    .copy('firefox-manifest.json', 'dist/firefox/manifest.json')
    .options({
        processCssUrls: false
    });