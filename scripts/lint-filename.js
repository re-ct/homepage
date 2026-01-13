const glob = require('glob');

let hasError = false;

glob.sync('public/**/*.{png,jpg,jpeg,webp,svg,gif}').forEach(file => {
  if (/[A-Z]/.test(file)) {
    console.error(`❌ Uppercase in filename: ${file}`);
    hasError = true;
  }
});

if (hasError) process.exit(1);
