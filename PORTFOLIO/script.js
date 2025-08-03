function showTab(id) {
  const tabs = document.querySelectorAll('.tab-content');
  tabs.forEach(tab => tab.classList.remove('visible'));
  document.getElementById(id).classList.add('visible');
}
document.addEventListener("DOMContentLoaded", function () {
  const animatables = document.querySelectorAll(".animate");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.3 });

  animatables.forEach(el => observer.observe(el));
});document.addEventListener("DOMContentLoaded", () => {
  const bars = document.querySelectorAll(".bar");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const targetWidth = parseInt(bar.getAttribute("data-width"));
        let count = 0;

        // Animate width
        bar.style.width = targetWidth + "%";

        // Animate counter
        const counter = bar.querySelector("span");
        const interval = setInterval(() => {
          if (count < targetWidth) {
            count++;
            counter.textContent = count + "%";
          } else {
            clearInterval(interval);
          }
        }, 20);
      }
    });
  }, { threshold: 0.6 });

  bars.forEach(bar => observer.observe(bar));
});

