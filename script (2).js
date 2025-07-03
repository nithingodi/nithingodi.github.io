
// 🔁 Dynamic Text in Hero Section
const first = document.getElementById("first");
const second = document.getElementById("second");

const firstWords = ["Retail", "Strategy", "Engineering", "Operations"];
const secondWords = ["Decisions", "Insights", "Execution", "Impact"];

let i = 0;

function updateText() {
  first.textContent = firstWords[i % firstWords.length];
  second.textContent = secondWords[i % secondWords.length];
  i++;
}

updateText(); // initial call
setInterval(updateText, 2500); // update every 2.5s

// 🌓 Preserve Dark Mode Across Sessions
const toggle = document.getElementById("dark-toggle");
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const storedTheme = localStorage.getItem("theme");

if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
  document.body.classList.add("dark");
  toggle.checked = true;
}

toggle.addEventListener("change", () => {
  if (toggle.checked) {
    document.body.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.body.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
});

// ✨ Scroll-triggered Fade-in Animations
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("appear");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
