export function initFilter() {
  const tabs  = document.querySelectorAll('[data-filter-tab]')
  const items = document.querySelectorAll('[data-category]')
  if (!tabs.length || !items.length) return

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // active state
      tabs.forEach(t => {
        t.classList.remove('bg-[#1A2B48]', 'text-white')
        t.classList.add('bg-white', 'text-[#1A2B48]')
      })
      tab.classList.add('bg-[#1A2B48]', 'text-white')
      tab.classList.remove('bg-white', 'text-[#1A2B48]')

      // filter
      const filter = tab.dataset.filterTab
      items.forEach(item => {
        const match = filter === 'all' || item.dataset.category === filter
        item.classList.toggle('hidden', !match)
      })
    })
  })
}