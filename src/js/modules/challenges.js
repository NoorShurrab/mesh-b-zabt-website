import { challengesData } from '../data/challenges.js'

export function initChallenges() {
  const grid = document.getElementById('challenges-grid')
  if (!grid) return

  // اقرأ نوع المسار من الـ data attribute في الـ body
  const path = document.body.dataset.path
  const data = challengesData[path]
  if (!data) return

  grid.innerHTML = data.map(item => `
    <div class="bg-white rounded-xl border border-[#e4e2e5] p-8 text-right hover:shadow-md transition-all duration-300 border-t-4 border-t-[#286570]">
      <div class="flex justify-start mb-5">
        <div class="w-14 h-14 rounded-xl bg-[#E8F4F5] flex items-center justify-center">
          ${item.icon}
        </div>
      </div>
      <h3 class="font-bold text-lg text-[#1A2B48] mb-3">${item.title}</h3>
      <p class="text-sm text-[#44474D] leading-relaxed">${item.desc}</p>
    </div>
  `).join('')
}