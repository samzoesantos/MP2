$(document).ready(function () {
  function DarkMode() {
    const body = $("body");
    const modeIcon = $("#modeIcon");

    body.toggleClass("dark-mode");

    modeIcon.html(body.hasClass("dark-mode") ? "🌙" : "☀️");

    const isDarkMode = body.hasClass("dark-mode");
    localStorage.setItem("darkMode", isDarkMode);
  }

  const savedDarkMode = localStorage.getItem("darkMode") == "true";
  $("body").toggleClass("dark-mode", savedDarkMode);
  $("#modeIcon").html(savedDarkMode ? "🌙" : "☀️");
  $("#darkModeToggle").on("click", DarkMode);
});
