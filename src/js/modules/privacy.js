export function initPrivacy() {
  const sections = document.querySelectorAll("[data-section]");
  const links = document.querySelectorAll("[data-toc-link]");

  if (!sections.length || !links.length) return;

  const setActive = (id) => {
  console.log("ACTIVE:", id);

  links.forEach((link) => {
    link.classList.toggle(
      "active",
      link.dataset.tocLink === id
    );
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
      threshold: 0.5,
    }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });

  links.forEach((link) => {
    link.addEventListener("click", () => {
      setActive(link.dataset.tocLink);
    });
  });
}