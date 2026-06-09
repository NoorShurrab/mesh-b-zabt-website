export function initNav() {
  const nav = document.querySelector('#main-nav')
  const menuBtn = document.querySelector('#menu-btn')
  const mobileMenu = document.querySelector('#mobile-menu')

  // Sticky
  if (nav) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 10) {
        nav.classList.add('fixed', 'shadow-md')
        nav.classList.remove('relative')
        document.body.style.paddingTop = nav.offsetHeight + 'px'
      } else {
        nav.classList.remove('fixed', 'shadow-md')
        nav.classList.add('relative')
        document.body.style.paddingTop = '0'
      }
    }, { passive: true })
  }

  // Hamburger toggle
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      const isHidden = mobileMenu.classList.contains('hidden')
      
      if (isHidden) {
        mobileMenu.classList.remove('hidden')
        mobileMenu.classList.add('flex')
        menuBtn.setAttribute('aria-expanded', 'true')
      } else {
        mobileMenu.classList.add('hidden')
        mobileMenu.classList.remove('flex')
        menuBtn.setAttribute('aria-expanded', 'false')
      }
    })

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden')
        mobileMenu.classList.remove('flex')
        menuBtn.setAttribute('aria-expanded', 'false')
      })
    })
  }

  // Active link
  const currentPath = window.location.pathname
  document.querySelectorAll('[data-nav-link]').forEach(link => {
    const href = link.getAttribute('href') || ''
    const isHome = (currentPath === '/' || currentPath.endsWith('index.html'))
      && (href === '/' || href.includes('index'))
    const isMatch = !isHome && href !== '/'
      && currentPath.includes(href.replace('../', '/').replace('./', '/'))
    if (isHome || isMatch) {
      link.classList.add('nav-link-active')
    }
  })
}