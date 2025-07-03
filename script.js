
// Theme toggle logic
const toggleBtn = document.getElementById("mode-toggle");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

function setTheme(mode) {
  document.body.className = mode;
  toggleBtn.textContent = mode === "dark" ? "☀️" : "🌙";
  localStorage.setItem("theme", mode);
}

// Initial load
const storedTheme = localStorage.getItem("theme");
if (storedTheme) {
  setTheme(storedTheme);
} else {
  setTheme(prefersDark ? "dark" : "light");
}

// On toggle
toggleBtn.addEventListener("click", () => {
  const newTheme = document.body.className === "dark" ? "light" : "dark";
  setTheme(newTheme);
});
