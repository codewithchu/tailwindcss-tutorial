const cssnano = require("cssnano");
const purgecss = require("@fullhuman/postcss-purgecss")({
  // Specify the paths to all of the template files in your project
  content: [
    "./public/**/*.html",
    "./public/**/*.js",
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
    require("tailwindcss"),
    cssnano({
      preset: "default",
    }),
    require("autoprefixer"),
    purgecss,
    // ...
  ],
};
