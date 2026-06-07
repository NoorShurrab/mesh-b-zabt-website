export function initReveal() {
  const targets = document.querySelectorAll('[data-reveal]')
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible')
        io.unobserve(e.target)
      }
    })
  }, { threshold: 0.12 })
  targets.forEach(t => io.observe(t))
}