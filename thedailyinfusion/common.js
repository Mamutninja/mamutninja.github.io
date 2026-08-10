// LocalStorage State Manager
const State = {
  getPantry: () => JSON.parse(localStorage.getItem('cozy_pantry') || '[]'),
  getShoppingList: () => JSON.parse(localStorage.getItem('cozy_shopping_list') || '[]'),
  getFavorites: () => JSON.parse(localStorage.getItem('cozy_favorites') || '[]'),
  savePantry: (data) => localStorage.setItem('cozy_pantry', JSON.stringify(data)),
  saveShoppingList: (data) => {
    localStorage.setItem('cozy_shopping_list', JSON.stringify(data));
    State.updateShoppingBadge();
  },
  saveFavorites: (data) => localStorage.setItem('cozy_favorites', JSON.stringify(data)),
  updateShoppingBadge: () => {
    const list = State.getShoppingList();
    const badge = document.getElementById('nav-shopping-count');
    if (badge) {
      if (list.length > 0) {
        badge.innerText = list.length;
        badge.classList.remove('hidden');
      } else {
        badge.classList.add('hidden');
      }
    }
  }
};

// Render Navigation Header & Footer Dynamically across Pages
document.addEventListener('DOMContentLoaded', () => {
  const activePage = window.location.pathname.split('/').pop() || 'index.html';

  // Render Header
  const headerEl = document.getElementById('site-header');
  if (headerEl) {
    headerEl.className = "sticky top-0 z-30 bg-[#F1F5DC]/90 backdrop-blur-md border-b border-cozy-border";
    headerEl.innerHTML = `
      <div class="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="index.html" class="flex items-center gap-2.5 group">
          <svg class="w-8 h-8 transition-transform group-hover:scale-105" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="46" fill="#F1F5DC" stroke="#E6DED5" stroke-width="2"/>
            <path d="M34 48 C40 45, 60 51, 66 48 L63 74 C63 76, 60 78, 50 78 C40 78, 37 76, 37 74 Z" fill="#8F9B5F" opacity="0.25"/>
            <path d="M32 38 L37 74 C37 77, 41 80, 50 80 C59 80, 63 77, 63 74 L68 38" stroke="#2C221E" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
            <ellipse cx="50" cy="38" rx="18" ry="4" stroke="#2C221E" stroke-width="3.5"/>
            <path d="M50 40 Q40 25 54 22 Q58 32 50 40 Z" fill="#8A9A86" stroke="#2C221E" stroke-width="2.5" stroke-linejoin="round"/>
          </svg>
          <div class="flex flex-col">
            <span class="font-serif-heading font-bold text-lg leading-none text-cozy-text">StillSip</span>
            <span class="text-[10px] tracking-wider uppercase text-cozy-muted font-semibold">The Daily Infusion</span>
          </div>
        </a>

        <nav class="hidden md:flex items-center gap-1 bg-white/60 p-1.5 rounded-full border border-cozy-border shadow-sm">
          <a href="index.html" class="px-4 py-1.5 rounded-full text-sm font-medium transition ${activePage === 'index.html' ? 'bg-cozy-olivegreen text-white shadow-sm' : 'text-cozy-muted hover:text-cozy-text'}">Home</a>
          <a href="recipes.html" class="px-4 py-1.5 rounded-full text-sm font-medium transition ${activePage === 'recipes.html' ? 'bg-cozy-olivegreen text-white shadow-sm' : 'text-cozy-muted hover:text-cozy-text'}">All Recipes</a>
          <a href="pantry.html" class="px-4 py-1.5 rounded-full text-sm font-medium transition ${activePage === 'pantry.html' ? 'bg-cozy-olivegreen text-white shadow-sm' : 'text-cozy-muted hover:text-cozy-text'}">Pantry</a>
          <a href="shopping-list.html" class="px-4 py-1.5 rounded-full text-sm font-medium transition flex items-center gap-1.5 ${activePage === 'shopping-list.html' ? 'bg-cozy-olivegreen text-white shadow-sm' : 'text-cozy-muted hover:text-cozy-text'}">
            Shopping List
            <span id="nav-shopping-count" class="hidden px-1.5 py-0.5 text-xs bg-cozy-sage text-white rounded-full">0</span>
          </a>
          <a href="favorites.html" class="px-4 py-1.5 rounded-full text-sm font-medium transition flex items-center gap-1 ${activePage === 'favorites.html' ? 'bg-cozy-olivegreen text-white shadow-sm' : 'text-cozy-muted hover:text-cozy-text'}">
            Favorites ❤️
          </a>
        </nav>

        <div class="flex md:hidden items-center gap-2">
          <a href="pantry.html" class="p-2 text-cozy-text bg-white rounded-full border border-cozy-border">🧺</a>
          <a href="shopping-list.html" class="p-2 text-cozy-text bg-white rounded-full border border-cozy-border">🛒</a>
        </div>
      </div>
    `;
  }

  // Render Footer
  const footerEl = document.getElementById('site-footer');
  if (footerEl) {
    footerEl.className = "mt-auto border-t border-cozy-border bg-white/40 py-8 text-center text-sm text-cozy-muted";
    footerEl.innerHTML = `<p>© StillSip — Non-Alcoholic & Non-Sparkling Pantry Drink Recipes.</p>`;
  }

  State.updateShoppingBadge();
});