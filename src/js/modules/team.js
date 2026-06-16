import { teamMembers } from '../data/TeamData.js';

export function initTeam() {
  const grid = document.getElementById('team-grid');
  if (!grid) return;

  grid.innerHTML = teamMembers.map(member => `
    <div class="flex flex-col items-center">
      <div class="w-full mb-4">
        <img src="${member.image}" alt="${member.name}" class="w-full h-80 object-cover rounded-3xl shadow-md" />
      </div>
      
      <div class="text-center">
        <h3 class="text-xl font-bold text-[#1A2B48] mb-1">${member.name}</h3>
        <p class="text-sm text-[#286570]">${member.title}</p>
      </div>
    </div>
  `).join('');
}