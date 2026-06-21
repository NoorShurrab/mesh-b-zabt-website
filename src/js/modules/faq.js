import { faqData } from '../data/faq.js'

export function initFaq() {
  const header  = document.getElementById('faq-header')
  const list    = document.getElementById('faq-list')
  if (!header || !list) return

  const path = document.body.dataset.path
  const data = faqData[path]
  if (!data) return

  // Header
  header.innerHTML = `
    ${data.eyebrow ? `<p class="text-sm font-bold text-[#286570] mb-2">${data.eyebrow}</p>` : ''}
    <h2 class="font-bold text-3xl md:text-4xl text-[#191C1D] mb-3">${data.title}</h2>
    ${data.subtitle ? `<p class="text-base text-[#44474D]">${data.subtitle}</p>` : ''}
  `

  // Items
  list.innerHTML = data.items.map((item, i) => `
    <div class="faq-item bg-white rounded-xl border border-[#e4e2e5] overflow-hidden">
      <button class="faq-question w-full flex items-center justify-between gap-4 px-6 py-5 text-right"
              aria-expanded="false">
        
        <span class="font-bold text-sm md:text-base text-[#1A2B48] flex-1 text-right">
          ${item.q}
        </span>
        <svg class="faq-question__icon w-5 h-5 text-[#286570] shrink-0 transition-transform duration-300"
             fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
        </svg>
      </button>
      <div class="faq-answer">
        <p class="px-6 pb-5 text-sm text-[#44474D] leading-relaxed text-right">
          ${item.a}
        </p>
      </div>
    </div>
  `).join('')
}