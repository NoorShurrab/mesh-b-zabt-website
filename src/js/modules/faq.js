import { faqData } from '../data/faq.js';
export function initFAQ() {
  const container = document.getElementById('faq-container');
  if (!container) return;

  // حقن الـ HTML
  container.innerHTML = faqData.map((item, index) => `
    <div class="faq-item border rounded-xl bg-white overflow-hidden mb-4">
      <button class="faq-question w-full p-6 text-right flex justify-between items-center font-bold" aria-expanded="false">
        <span>${item.question}</span>
        <span class="chevron transition-transform duration-300">▼</span>
      </button>
      <div class="faq-answer max-h-0 overflow-hidden transition-all duration-300">
        <div class="p-6 pt-0 text-slate-600 text-sm leading-relaxed">${item.answer}</div>
      </div>
    </div>
  `).join('');

  // 3. كود التفاعل (داخل نفس الموديول)
  const items = container.querySelectorAll('.faq-item');
  items.forEach(item => {
    const btn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');

      // إغلاق الكل
      items.forEach(i => {
        i.classList.remove('is-open');
        i.querySelector('.faq-answer').style.maxHeight = null;
        i.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
        i.querySelector('.chevron').style.transform = 'rotate(0deg)';
      });

      // فتح المختار
      if (!isOpen) {
        item.classList.add('is-open');
        answer.style.maxHeight = answer.scrollHeight + 'px';
        btn.setAttribute('aria-expanded', 'true');
        btn.querySelector('.chevron').style.transform = 'rotate(180deg)';
      }
    });
  });
}