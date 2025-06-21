// script.js

// Optional: Animate sections on scroll using Intersection Observer
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  {
    threshold: 0.2,
  }
);

sections.forEach(section => {
  section.classList.add('fade-in');
  observer.observe(section);
});

// Optional: Dark mode toggle (add a button in HTML if needed)
const toggleDarkMode = () => {
  document.body.classList.toggle('dark');
};

const modal = document.getElementById('imgModal');
const modalImage = document.getElementById('modalImage');

