import { packagesData } from '../data/packages.js';

export function initPackages() {
  const container = document.getElementById('packages-grid');
  if (!container) return;

  const path = document.body.dataset.path || 'business';
  const data = packagesData[path] || [];

  container.innerHTML = data.map(pkg => `
    <div class="relative border rounded-3xl p-8 flex flex-col ${pkg.isFeatured ? 'border-[#2A6671] shadow-2xl scale-105 bg-white z-10' : 'border-slate-200 bg-white'}">
      
      ${pkg.isFeatured ? `
        <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#2A6671] text-white px-4 py-1 rounded-full text-xs font-bold whitespace-nowrap">
          الأكثر طلباً
        </div>
      ` : ''}
      
      <h3 class="text-l font-bold text-slate-900 mb-2 text-right ">${pkg.title}</h3>
      <p class="text-sm text-slate-500 mb-6 h-10 text-right">${pkg.subtitle}</p>
      
      <h3 class="text-l text-[#2A6671] font-bold mb-7 text-right">${pkg.featureTitle || 'المميزات:'}</h4>
      <ul class="space-y-4 mb-8 flex-1 text-right">
        ${pkg.features.map(f => `
          <li class="flex items-start flex-center align-center gap-2 text-sm text-slate-600">
            <svg xmlns="http://w3.org" viewBox="0 0 24 24" width="20" height="20">
  <circle cx="12" cy="12" r="10" fill="#2a6671" />
  <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" fill="#ffffff" />
</svg>
 ${f}
          </li>
        `).join('')}
      </ul>
      
      <button class="w-full py-3 rounded-lg font-bold text-black transition-all 
  ${pkg.isFeatured ? 'bg-gradient-to-r from-[#1a2b48] to-[#3aa8a6] text-white hover:scale-105' : 'border border-slate-900 text-slate-900'}">
  اطلب عرض مخصص
</button>
    </div>
  `).join('');
}