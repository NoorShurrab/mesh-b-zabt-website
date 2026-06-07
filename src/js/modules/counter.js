export function initCounter() {
  const counters = document.querySelectorAll('[data-count-to]')

  function animate(el) {
    const target   = parseFloat(el.dataset.countTo)
    const suffix   = el.dataset.suffix || ''
    const duration = 1600
    const start    = performance.now()

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const ease     = 1 - Math.pow(1 - progress, 3)
      const value    = target * ease
      el.textContent = (Number.isInteger(target)
        ? Math.floor(value)
        : value.toFixed(1)) + suffix
      if (progress < 1) requestAnimationFrame(tick)
      else el.textContent = target + suffix
    }
    requestAnimationFrame(tick)
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        animate(e.target)
        io.unobserve(e.target)
      }
    })
  }, { threshold: 0.5 })

  counters.forEach(el => io.observe(el))
}