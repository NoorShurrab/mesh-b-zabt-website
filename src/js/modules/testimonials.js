import { testimonialsData } from '../data/testimonials.js';
export function initTestimonials() {
  const grid = document.getElementById('testimonials-grid');
  if (!grid) return;

  const data = testimonialsData['home'] || []; // يمكن ربطه بالـ body.dataset.path

  grid.innerHTML = data.map(t => `
    <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-right text-right">
      <div class="text-[#35A2A7] mb-4 text-xl">★★★★★</div>
      <p class="text-slate-600 mb-8 flex-1 leading-relaxed">"${t.text}"</p>
      <div class="flex items-center gap-3">
        <img src="${t.image}" alt="${t.name}" class="w-12 h-12 rounded-full object-cover bg-slate-200">
        <div class="text-right">
          <h4 class="font-bold text-sm text-slate-900">${t.name}</h4>
          <span class="text-xs text-slate-500">${t.role}</span>
        </div>
      </div>
    </div>
  `).join('');
}