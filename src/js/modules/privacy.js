export function initPrivacy() {
  const sections = document.querySelectorAll("[data-section]");
  const links = document.querySelectorAll("[data-toc-link]");

  if (!sections.length || !links.length) return;

  const setActive = (id) => {
    links.forEach((link) => {
      link.classList.remove("active");

      if (link.dataset.tocLink === id) {
        link.classList.add("active");
      }
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      let visibleSection = null;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          visibleSection = entry.target.id;
        }
      });

      if (visibleSection) {
        setActive(visibleSection);
      }
    },
    {
      rootMargin: "-25% 0px -55% 0px",
      threshold: 0,
    }
  );

  sections.forEach((section) => observer.observe(section));

  links.forEach((link) => {
    link.addEventListener("click", () => {
      setActive(link.dataset.tocLink);
    });
  });
}