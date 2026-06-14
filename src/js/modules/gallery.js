import { projectImages } from '../data/ProjectGalleryData.js';

export function initGallery() {
  const grid = document.getElementById('gallery-grid');
  const btn = document.getElementById('load-more-btn');
  if (!grid || !btn) return;

  
  const initialShow = 3; 

  grid.innerHTML = projectImages.map((img, index) => `
    <div class="gallery-item ${index >= initialShow ? 'hidden' : ''} overflow-hidden rounded-2xl md:rounded-3xl h-60 md:h-64 group cursor-pointer transition-all duration-300">
      <img src="${img.url}" alt="Project image" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
    </div>
  `).join('');

  if (projectImages.length <= initialShow) btn.style.display = 'none';

  btn.addEventListener('click', () => {
    grid.querySelectorAll('.gallery-item.hidden').forEach(el => {
      el.classList.remove('hidden');
    });
    btn.style.display = 'none';
  });
}