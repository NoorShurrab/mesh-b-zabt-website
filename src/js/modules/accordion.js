export function initAccordion(selector = '.faq-item') {
  const items = document.querySelectorAll(selector)
  if (!items.length) return

  items.forEach(item => {
    const btn    = item.querySelector('.faq-question')
    const answer = item.querySelector('.faq-answer')
    if (!btn || !answer) return

    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open')

      // أغلق الكل
      items.forEach(i => {
        i.classList.remove('is-open')
        i.querySelector('.faq-answer').style.maxHeight = null
        i.querySelector('.faq-question')
          ?.setAttribute('aria-expanded', 'false')
      })

      // افتح اللي اتضغط عليه
      if (!isOpen) {
        item.classList.add('is-open')
        answer.style.maxHeight = answer.scrollHeight + 'px'
        btn.setAttribute('aria-expanded', 'true')
      }
    })
  })
}