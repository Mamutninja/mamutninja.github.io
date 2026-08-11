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
          <img 
            src="images/icon.png" 
            alt="The Daily Infusion Logo" 
            class="w-8 h-8 object-contain transition-transform group-hover:scale-105" 
          />
          <div class="flex flex-col">
            <span class="font-serif-heading font-bold text-lg leading-none text-cozy-text">The Daily Infusion</span>
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
    footerEl.innerHTML = `<p>© The Daily Infusion — Non-Alcoholic & Non-Sparkling Pantry Drink Recipes.</p>`;
  }

  State.updateShoppingBadge();
});

// EXPORT ALL RECIPES (DEFAULT + USER CUSTOM) TO A UPDATED recipes.js FILE
function exportRecipesJS() {
  const allRecipes = typeof getCombinedRecipes === 'function' ? getCombinedRecipes() : ALL_RECIPES;
  
  const fileContent = `const ALL_RECIPES = ${JSON.stringify(allRecipes, null, 2)};\n\n// HELPER TO FETCH BOTH BUILT-IN & USER-ADDED RECIPES\nfunction getCombinedRecipes() {\n  const customRecipes = JSON.parse(localStorage.getItem('cozy_custom_recipes') || '[]');\n  return [...ALL_RECIPES, ...customRecipes];\n}`;

  const blob = new Blob([fileContent], { type: 'text/javascript' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'recipes.js';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}