// Sidebar toggle
function toggleSidebar() {
  var sidebar = document.getElementById("sidebar");
  var mask = document.getElementById("sidebar-mask");
  sidebar.classList.toggle("open");
  mask.classList.toggle("open");
}

// Theme toggle
function toggleTheme() {
  const body = document.body;
  const icon = document.getElementById("theme-icon");
  if (body.getAttribute("data-theme") === "dark") {
    body.setAttribute("data-theme", "light");
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
    localStorage.setItem("theme", "light");
  } else {
    body.setAttribute("data-theme", "dark");
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
    localStorage.setItem("theme", "dark");
  }
}

// Initialize theme on page load
(function () {
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
    document.body.setAttribute("data-theme", "dark");
    const icon = document.getElementById("theme-icon");
    if (icon) {
      icon.classList.remove("fa-moon");
      icon.classList.add("fa-sun");
    }
  }
})();
