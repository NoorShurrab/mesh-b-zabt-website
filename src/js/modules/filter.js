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

// export function initFilter() {
  
//   document.querySelectorAll('[data-filter-group]').forEach(group => {
//     const tabs  = group.querySelectorAll('[data-filter-tab]')
//     const items = document.querySelectorAll(
//       `[data-filter-items="${group.dataset.filterGroup}"] [data-category]`
//     )
//     if (!tabs.length || !items.length) return

//     tabs.forEach(tab => {
//       tab.addEventListener('click', () => {
//         tabs.forEach(t => {
//           t.classList.remove('bg-[#1A2B48]', 'text-white')
//           t.classList.add('bg-white', 'text-[#1A2B48]')
//         })
//         tab.classList.add('bg-[#1A2B48]', 'text-white')
//         tab.classList.remove('bg-white', 'text-[#1A2B48]')

//         const filter = tab.dataset.filterTab
//         items.forEach(item => {
//           const match = filter === 'all' || item.dataset.category === filter
//           item.classList.toggle('hidden', !match)
//         })
//       })
//     })
//   })

  
//   const searchInput = document.getElementById('blog-search')
//   const blogCards   = document.querySelectorAll('#blog-grid article')
//   if (searchInput && blogCards.length) {
//     searchInput.addEventListener('input', () => {
//       const query = searchInput.value.toLowerCase().trim()
//       blogCards.forEach(card => {
//         const title = card.querySelector('h3')?.textContent.toLowerCase() || ''
//         const desc  = card.querySelector('p.text-sm')?.textContent.toLowerCase() || ''
//         card.classList.toggle('hidden', query !== '' && !title.includes(query) && !desc.includes(query))
//       })
//     })
//   }
// }