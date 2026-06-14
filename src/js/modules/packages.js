import { packagesData } from '../data/packages.js'

export function initPackages() {
  const header = document.getElementById('packages-header')
  const grid   = document.getElementById('packages-grid')
  if (!header || !grid) return

  const path = document.body.dataset.path
  const data = packagesData[path]
  if (!data) return

  // Header
  header.innerHTML = `
    ${data.eyebrow ? `<p class="text-sm font-bold text-[#286570] mb-2">${data.eyebrow}</p>` : ''}
    <h2 class="font-bold text-3xl md:text-4xl text-[#191C1D] mb-3">${data.title}</h2>
    ${data.subtitle ? `<p class="text-base text-[#44474D] max-w-2xl mx-auto leading-relaxed">${data.subtitle}</p>` : ''}
  `

  // Cards
  grid.innerHTML = data.packages.map(pkg => `
    <div class="relative flex flex-col rounded-2xl p-8 text-right transition-all duration-300
      ${pkg.featured
        ? 'bg-white border-2 border-[#2A6671] shadow-2xl scale-110'
        : 'bg-white border border-[#e4e2e5] hover:shadow-md'
      }">

      ${pkg.badge ? `
        <div class="absolute -top-4 left-1/2 -translate-x-1/2">
          <span class="bg-[#2A6671] text-xs text-white font-bold px-6 py-1.5 rounded-full whitespace-nowrap">
            ${pkg.badge}
          </span>
        </div>
      ` : ''}

      <!-- Card Header -->
      <div class="mb-7">
        <h3 class="font-bold text-xl mb-4 text-[#1A2B48]">
          ${pkg.name}
        </h3>
        <p class="text-sm text-[#44474D]">
          ${pkg.subtitle}
        </p>
      </div>

      <!-- Price Label -->
      <div class="mb-6 pb-6 ${pkg.featured ? 'border-green-500/20' : 'border-[#e4e2e5]'}">
        <span class="font-bold text-lg text-[#286570]">
          ${pkg.priceLabel}
        </span>
      </div>

      <!-- Features -->
      <ul class="flex flex-col gap-5 mb-12 flex-1">
        ${pkg.features.map(f => `
          <li class="flex items-center gap-3">
            <svg width="20" height="20" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.03 15.33L16.4325 7.9275L14.9625 6.4575L9.03 12.39L6.0375 9.3975L4.5675 10.8675L9.03 15.33ZM10.5 21C9.0475 21 7.6825 20.7244 6.405 20.1731C5.1275 19.6219 4.01625 18.8737 3.07125 17.9287C2.12625 16.9838 1.37812 15.8725 0.826875 14.595C0.275625 13.3175 0 11.9525 0 10.5C0 9.0475 0.275625 7.6825 0.826875 6.405C1.37812 5.1275 2.12625 4.01625 3.07125 3.07125C4.01625 2.12625 5.1275 1.37812 6.405 0.826875C7.6825 0.275625 9.0475 0 10.5 0C11.9525 0 13.3175 0.275625 14.595 0.826875C15.8725 1.37812 16.9838 2.12625 17.9287 3.07125C18.8737 4.01625 19.6219 5.1275 20.1731 6.405C20.7244 7.6825 21 9.0475 21 10.5C21 11.9525 20.7244 13.3175 20.1731 14.595C19.6219 15.8725 18.8737 16.9838 17.9287 17.9287C16.9838 18.8737 15.8725 19.6219 14.595 20.1731C13.3175 20.7244 11.9525 21 10.5 21Z" fill="#2A6671"/>
</svg>

            <span class="text-sm text-[#44474D]">${f}</span>
          </li>
        `).join('')}
      </ul>

      <!-- CTA -->
      <button class="py-4 rounded-xl font-bold text-sm transition-all duration-200
        ${pkg.featured
          ? 'bg-[#286570] border-2 border-green text-white hover:bg-[#286570]/90'
          : 'border-2 border-[#286570] text-[#286570] hover:bg-[#286570] hover:text-white'
        }">
        ${pkg.cta}
      </button>

    </div>
  `).join('')
}