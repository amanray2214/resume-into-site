
export function setupAnimations() {
  const animatedElements = document.querySelectorAll('.animate-on-scroll');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  animatedElements.forEach(element => {
    observer.observe(element);
  });

  return () => {
    animatedElements.forEach(element => {
      observer.unobserve(element);
    });
  };
}
