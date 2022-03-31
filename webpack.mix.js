const mix = require('laravel-mix');


mix.js('resources/js/app.js', 'public/js')
    // .js('resources/js/forms/create.js', 'public/js')
    // .js('resources/js/forms/show.js', 'public/js')
    .scripts([
        'resources/js/forms/create.js',
        'resources/js/forms/fetch.js',
        'resources/js/forms/show.js',
        'resources/js/forms/edit.js',
        'resources/js/forms/update.js',
        'resources/js/forms/delete.js'
    ], 'public/js/index.js', 'public/js')
    .sass('resources/sass/site.sass', 'public/css')
    .postCss('resources/css/app.css', 'public/css', [
        require('postcss-import'),
        require('tailwindcss'),
    ]);

mix.browserSync('http://localhost:8000/');
    
if (mix.inProduction()) {
    mix.version();
}