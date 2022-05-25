let mix = require('laravel-mix');

mix.setPublicPath('./')
    .sass('assets/sass/popup.scss', 'dist/css')
    .js('assets/js/inject.js', 'dist/js')
    .js('assets/js/background.js', 'dist/js')
    .js('assets/js/popup.js', 'dist/js').vue()
    .copy('assets/images/', 'dist/images')
    .options({
        processCssUrls: false
    });