import { stepsData } from '../data/steps.js';

export function initSteps() {
  const grid = document.getElementById('steps-grid');
  if (!grid) return;

  const path = document.body.dataset.path || 'default';
  const data = stepsData[path] || stepsData.default;

  grid.innerHTML = data.map(step => `
    <div class="flex flex-col items-center text-center">
      <div class="w-12 h-12 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold mb-4">
        ${step.number}
      </div>
      <h3 class="font-bold text-lg mb-2">${step.title}</h3>
      <p class="text-sm text-slate-500">${step.desc}</p>
    </div>
  `).join('');
}