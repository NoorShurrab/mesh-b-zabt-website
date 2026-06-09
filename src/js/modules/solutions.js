import { solutionsData } from '../data/solutions.js'

export function initSolutions() {
  const grid = document.getElementById('solutions-grid')
  if (!grid) return

  const path = document.body.dataset.path
  const data = solutionsData[path]
  if (!data) return

  grid.innerHTML = data.map(item => `
    <div class="bg-white rounded-xl border border-[#e4e2e5] p-6 text-right hover:shadow-md hover:-translate-y-1 transition-all duration-300">
      <div class="w-12 h-12 rounded-xl bg-[#E8F4F5] flex items-center justify-center mb-4">
        ${item.icon}
      </div>
      <h3 class="font-bold text-base text-[#1A2B48] mb-2">${item.title}</h3>
      <p class="text-sm text-[#44474D] leading-relaxed">${item.desc}</p>
    </div>
  `).join('')
}