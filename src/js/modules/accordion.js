export function initAccordion(selector = '.faq-item') {
  // نستخدم event delegation عشان يشتغل مع الـ dynamic items
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.faq-question')
    if (!btn) return

    const item   = btn.closest('.faq-item')
    const answer = item.querySelector('.faq-answer')
    const icon   = btn.querySelector('.faq-question__icon')
    const isOpen = item.classList.contains('is-open')

    // أغلق الكل
    document.querySelectorAll('.faq-item.is-open').forEach(open => {
      open.classList.remove('is-open')
      open.querySelector('.faq-answer').style.maxHeight = null
      open.querySelector('.faq-question__icon')?.classList.remove('rotate-180')
      open.querySelector('.faq-question')?.setAttribute('aria-expanded', 'false')
    })

    // افتح اللي اتضغط عليه
    if (!isOpen) {
      item.classList.add('is-open')
      answer.style.maxHeight = answer.scrollHeight + 'px'
      icon?.classList.add('rotate-180')
      btn.setAttribute('aria-expanded', 'true')
    }
  })
}