import { renderBlock } from './lib.js';
export function renderUserBlock(userData, favoriteItemsAmount) {
    const favoritesCaption = favoriteItemsAmount.amount > 0 ? favoriteItemsAmount.amount : 'ничего нет';
    const hasFavoriteItems = favoriteItemsAmount.amount > 0 ? true : false;
    renderBlock('user-block', `
    <div class="header-container">
      <img class="avatar" src="${userData.avatarUrl}" alt="Wade Warren" />
      <div class="info">
          <p class="name">${userData.username}</p>
          <p class="fav">
            <i class="heart-icon${hasFavoriteItems ? ' active' : ''}"></i>${favoritesCaption}
          </p>
      </div>
    </div>
    `);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxVQUFVLENBQUE7QUFHdEMsTUFBTSxVQUFVLGVBQWUsQ0FBQyxRQUFjLEVBQUUsbUJBQXFDO0lBQ25GLE1BQU0sZ0JBQWdCLEdBQUcsbUJBQW1CLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUE7SUFDbkcsTUFBTSxnQkFBZ0IsR0FBRyxtQkFBbUIsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQTtJQUl0RSxXQUFXLENBQ1QsWUFBWSxFQUNaOztpQ0FFNkIsUUFBUSxDQUFDLFNBQVM7OzRCQUV2QixRQUFRLENBQUMsUUFBUTs7a0NBRVgsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxTQUFTLGdCQUFnQjs7OztLQUl2RixDQUNGLENBQUE7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmF2b3VyaXRlQW1vdW50IH0gZnJvbSAnLi9mYXZvdXJpdGVBbW91bnRDbGFzcy5qcydcbmltcG9ydCB7IHJlbmRlckJsb2NrIH0gZnJvbSAnLi9saWIuanMnXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi91c2VyQ2xhc3MuanMnXG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJVc2VyQmxvY2sodXNlckRhdGE6IFVzZXIsIGZhdm9yaXRlSXRlbXNBbW91bnQ/OiBGYXZvdXJpdGVBbW91bnQpIHtcbiAgY29uc3QgZmF2b3JpdGVzQ2FwdGlvbiA9IGZhdm9yaXRlSXRlbXNBbW91bnQuYW1vdW50ID4gMCA/IGZhdm9yaXRlSXRlbXNBbW91bnQuYW1vdW50IDogJ9C90LjRh9C10LPQviDQvdC10YInXG4gIGNvbnN0IGhhc0Zhdm9yaXRlSXRlbXMgPSBmYXZvcml0ZUl0ZW1zQW1vdW50LmFtb3VudCA+IDAgPyB0cnVlIDogZmFsc2VcblxuXG5cbiAgcmVuZGVyQmxvY2soXG4gICAgJ3VzZXItYmxvY2snLFxuICAgIGBcbiAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLWNvbnRhaW5lclwiPlxuICAgICAgPGltZyBjbGFzcz1cImF2YXRhclwiIHNyYz1cIiR7dXNlckRhdGEuYXZhdGFyVXJsfVwiIGFsdD1cIldhZGUgV2FycmVuXCIgLz5cbiAgICAgIDxkaXYgY2xhc3M9XCJpbmZvXCI+XG4gICAgICAgICAgPHAgY2xhc3M9XCJuYW1lXCI+JHt1c2VyRGF0YS51c2VybmFtZX08L3A+XG4gICAgICAgICAgPHAgY2xhc3M9XCJmYXZcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiaGVhcnQtaWNvbiR7aGFzRmF2b3JpdGVJdGVtcyA/ICcgYWN0aXZlJyA6ICcnfVwiPjwvaT4ke2Zhdm9yaXRlc0NhcHRpb259XG4gICAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgYFxuICApXG59XG4iXX0=