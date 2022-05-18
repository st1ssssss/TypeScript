import { renderBlock } from './lib.js';
export function renderUserBlock(name, avatarUrl, favoriteItemsAmount) {
    const favoritesCaption = favoriteItemsAmount > 0 ? favoriteItemsAmount : 'ничего нет';
    const hasFavoriteItems = favoriteItemsAmount > 0 ? true : false;
    renderBlock('user-block', `
    <div class="header-container">
      <img class="avatar" src="${avatarUrl}" alt="Wade Warren" />
      <div class="info">
          <p class="name">${name}</p>
          <p class="fav">
            <i class="heart-icon${hasFavoriteItems ? ' active' : ''}"></i>${favoritesCaption}
          </p>
      </div>
    </div>
    `);
}
//
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxVQUFVLENBQUE7QUFFdEMsTUFBTSxVQUFVLGVBQWUsQ0FBQyxJQUFZLEVBQUUsU0FBaUIsRUFBRSxtQkFBMkI7SUFDMUYsTUFBTSxnQkFBZ0IsR0FBRyxtQkFBbUIsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUE7SUFDckYsTUFBTSxnQkFBZ0IsR0FBRyxtQkFBbUIsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFBO0lBSS9ELFdBQVcsQ0FDVCxZQUFZLEVBQ1o7O2lDQUU2QixTQUFTOzs0QkFFZCxJQUFJOztrQ0FFRSxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLFNBQVMsZ0JBQWdCOzs7O0tBSXZGLENBQ0YsQ0FBQTtBQUNILENBQUM7QUFFRCxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyQmxvY2sgfSBmcm9tICcuL2xpYi5qcydcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclVzZXJCbG9jayhuYW1lOiBzdHJpbmcsIGF2YXRhclVybDogc3RyaW5nLCBmYXZvcml0ZUl0ZW1zQW1vdW50OiBudW1iZXIpIHtcbiAgY29uc3QgZmF2b3JpdGVzQ2FwdGlvbiA9IGZhdm9yaXRlSXRlbXNBbW91bnQgPiAwID8gZmF2b3JpdGVJdGVtc0Ftb3VudCA6ICfQvdC40YfQtdCz0L4g0L3QtdGCJ1xuICBjb25zdCBoYXNGYXZvcml0ZUl0ZW1zID0gZmF2b3JpdGVJdGVtc0Ftb3VudCA+IDAgPyB0cnVlIDogZmFsc2VcblxuXG5cbiAgcmVuZGVyQmxvY2soXG4gICAgJ3VzZXItYmxvY2snLFxuICAgIGBcbiAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLWNvbnRhaW5lclwiPlxuICAgICAgPGltZyBjbGFzcz1cImF2YXRhclwiIHNyYz1cIiR7YXZhdGFyVXJsfVwiIGFsdD1cIldhZGUgV2FycmVuXCIgLz5cbiAgICAgIDxkaXYgY2xhc3M9XCJpbmZvXCI+XG4gICAgICAgICAgPHAgY2xhc3M9XCJuYW1lXCI+JHtuYW1lfTwvcD5cbiAgICAgICAgICA8cCBjbGFzcz1cImZhdlwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJoZWFydC1pY29uJHtoYXNGYXZvcml0ZUl0ZW1zID8gJyBhY3RpdmUnIDogJyd9XCI+PC9pPiR7ZmF2b3JpdGVzQ2FwdGlvbn1cbiAgICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICBgXG4gIClcbn1cblxuLy9cbiJdfQ==