import { stepsData } from '../data/steps.js'

export function initSteps() {
  const header = document.getElementById('steps-header')
  const grid = document.getElementById('steps-grid')
  
  if (!header || !grid) return
  
  const path = document.body.dataset.path
  const data = stepsData[path]
  
  if (!data) return

  // Header
  header.innerHTML = `
    ${data.eyebrow ? `<p class="text-4xl font-bold text-[#286570] mb-2">${data.eyebrow}</p>` : ''}
    <h2 class="font-bold text-sm md:text-sm text-[#191C1D] mb-3">${data.title}</h2>
    ${data.subtitle ? `<p class="text-base text-[#44474D]">${data.subtitle}</p>` : ''}
  `

  // حساب عدد العناصر ديناميكياً لتحديد أعمدة الشاشات الكبيرة
  const stepsCount = data.steps.length
  
  // إزالة أي كلاسات أعمدة سابقة قد تكون عالقة
  grid.classList.remove('md:grid-cols-3', 'lg:grid-cols-4', 'lg:grid-cols-5')
  
  // تطبيق الأعمدة بناءً على العدد
  if (stepsCount === 5) {
    grid.classList.add('md:grid-cols-3', 'lg:grid-cols-5')
  } else {
    grid.classList.add('md:grid-cols-2', 'lg:grid-cols-4')
  }

  // Steps
  grid.innerHTML = data.steps.map(step => `
    <div class="text-center w-full max-w-[280px] mx-auto sm:max-w-none">
      <div class="w-12 h-12 rounded-full bg-gradient-to-br from-[#286570] to-[#3aa8a6] flex items-center justify-center mx-auto mb-5">
        ${step.icon ? `<img src="${step.icon}" class="w-6 h-6" />` : `<span class="font-bold text-white text-lg">${step.number}</span>`}
      </div>
      <h4 class="font-bold text-base text-[#1A2B48] mb-2">${step.title}</h4>
      <!-- تم تعديل الحشو ليصبح متجاوباً ومتناسقاً px-2 lg:px-4 بدلاً من px-14 الثابتة -->
      <p class="text-sm px-2 lg:px-4 text-[#44474D] leading-relaxed">${step.desc}</p>
    </div>
  `).join('')
}
