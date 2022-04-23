function darkMode(options) {
  const html = document.querySelector("html");

  if (options.enabled) {
    html.style.filter = "invert(1)";
  }
}

module.exports.darkMode = darkMode;
