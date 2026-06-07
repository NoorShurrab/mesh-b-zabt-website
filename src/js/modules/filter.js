export function initFilter() {
  const tabs  = document.querySelectorAll('[data-filter-tab]')
  const items = document.querySelectorAll('[data-category]')
  if (!tabs.length || !items.length) return

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // active state
      tabs.forEach(t => t.classList.remove('is-active'))
      tab.classList.add('is-active')

      const filter = tab.dataset.filterTab
      items.forEach(item => {
        const match = filter === 'all' || item.dataset.category === filter
        item.classList.toggle('hidden', !match)
      })
    })
  })
}