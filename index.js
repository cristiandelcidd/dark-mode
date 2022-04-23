function darkMode(options) {
  const html = document.querySelector("html");

  if (options.enabled) {
    html.style.filter = "invert(1)";
  } else {
    html.style.filter = "none";
  }
}

module.exports.darkMode = darkMode;
