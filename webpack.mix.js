let mix = require("laravel-mix");

mix.sass(`src/theme.scss`, "dist/").options({
  autoprefixer: {
    options: {
      browsers: [">0.2%", "not dead", "not op_mini all"],
    },
  },
});
