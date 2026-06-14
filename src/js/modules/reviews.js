import { reviewsData } from '../data/reviews.js'

export function initReviews() {
  const header = document.getElementById('reviews-header')
  const grid   = document.getElementById('reviews-grid')
  if (!header || !grid) return

  const path = document.body.dataset.path
  const data = reviewsData[path]
  if (!data) return

  // عدد الأعمدة
  if (data.cols === 4) {
    grid.classList.remove('lg:grid-cols-3')
    grid.classList.add('lg:grid-cols-4')
  }

  // Header
  header.innerHTML = `
    <h2 class="font-bold text-3xl md:text-4xl text-[#191C1D] mb-3">${data.title}</h2>
    ${data.subtitle ? `<p class="text-base text-[#44474D]">${data.subtitle}</p>` : ''}
  `

  // Stars template
  const stars = `
    <div class="flex gap-1 justify-start mr-6 mb-4">
      ${Array(5).fill(`
        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.825 19L5.45 11.975L0 7.25L7.2 6.625L10 0L12.8 6.625L20 7.25L14.55 11.975L16.175 19L10 15.275L3.825 19Z" fill="#35A2A7"/>
</svg>

      `).join('')}
    </div>
  `

  // Cards
  grid.innerHTML = data.reviews.map(review => `
    <div class="bg-white rounded-2xl border border-[#e4e2e5] p-10 text-right flex flex-col hover:shadow-md transition-all duration-300">

      ${stars}

      <p class="text-md text-[#44474D] leading-relaxed mb-6 flex-1">
        "${review.quote}"
      </p>

      <div class="flex items-center justify-start gap-3">
      <div class="w-10 h-10 rounded-full bg-gradient-to-br from-[#286570] to-[#3aa8a6] flex items-center justify-center shrink-0">
          <span class="font-bold text-white text-sm">${review.avatar}</span>
        </div>
        <div>
          <p class="font-bold text-sm text-[#1A2B48]">${review.name}</p>
          <p class="text-xs text-[#44474D]">${review.role}</p>
        </div>
      </div>

    </div>
  `).join('')
}