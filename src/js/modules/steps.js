import { stepsData } from '../data/steps.js'

export function initSteps() {
  const header = document.getElementById('steps-header')
  const grid   = document.getElementById('steps-grid')
  if (!header || !grid) return

  const path = document.body.dataset.path
  const data = stepsData[path]
  if (!data) return

  // Header
  header.innerHTML = `
    ${data.eyebrow ? `<p class="text-sm font-bold text-[#286570] mb-2">${data.eyebrow}</p>` : ''}
    <h2 class="font-bold text-3xl md:text-4xl text-[#191C1D] mb-3">${data.title}</h2>
    ${data.subtitle ? `<p class="text-base text-[#44474D]">${data.subtitle}</p>` : ''}
  `

  // Steps
  grid.innerHTML = data.steps.map(step => `
    <div class="text-center">
      <div class="w-12 h-12 rounded-full bg-gradient-to-br from-[#286570] to-[#3aa8a6] flex items-center justify-center mx-auto mb-5">
        ${step.icon ? `<img src="${step.icon}" class="w-6 h-6" />` : `<span class="font-bold text-white text-lg">${step.number}</span>`}
      </div>
      <h4 class="font-bold text-base text-[#1A2B48] mb-2">${step.title}</h4>
      <p class="text-sm text-[#44474D] leading-relaxed">${step.desc}</p>
    </div>
  `).join('')
}