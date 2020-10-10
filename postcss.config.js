const cssnano = require('cssnano');
const purgecss = require('@fullhuman/postcss-purgecss')({
    // Paht and File Extentions
    content: [
        './public/**/*.html',
        //'./public/**/*.vue',
        //'./public/**/*.jsx',
        // etc.
    ],

    // This is the function used to extract class names from your templates
    defaultExtractor: (content) => {
        // Capture as liberally as possible, including things like `h-(screen-1.5)`
        const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [];

        // Capture classes within other delimiters like .block(class="w-1/2") in Pug
        const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || [];

        return broadMatches.concat(innerMatches);
    },
});

module.exports = {
    plugins: [
        // ...
        require('tailwindcss'),
        cssnano({
            preset: 'default',
        }),
        require('autoprefixer'),
        purgecss,
        // ...
    ],
};
