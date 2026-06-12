export function createStepCard(number, title, desc) {
  return `
    <div class="flex flex-col items-center text-center flex-1 min-w-[200px]">
      <div class="w-14 h-14 rounded-full bg-[#0d9e89] text-white flex items-center justify-center font-bold text-xl mb-6 shadow-lg shadow-teal-500/20">
        ${number}
      </div>
      <h3 class="font-bold text-lg text-[#1A2B48] mb-3">${title}</h3>
      <p class="text-sm text-gray-600 leading-relaxed max-w-[200px]">${desc}</p>
    </div>
  `;
}