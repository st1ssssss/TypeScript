import { FavouriteAmount } from './favouriteAmountClass.js'
import { renderBlock } from './lib.js'
import { User } from './userClass.js'

export function renderUserBlock(userData: User, favoriteItemsAmount?: FavouriteAmount) {
  const favoritesCaption = favoriteItemsAmount.amount > 0 ? favoriteItemsAmount.amount : 'ничего нет'
  const hasFavoriteItems = favoriteItemsAmount.amount > 0 ? true : false



  renderBlock(
    'user-block',
    `
    <div class="header-container">
      <img class="avatar" src="${userData.avatarUrl}" alt="Wade Warren" />
      <div class="info">
          <p class="name">${userData.username}</p>
          <p class="fav">
            <i class="heart-icon${hasFavoriteItems ? ' active' : ''}"></i>${favoritesCaption}
          </p>
      </div>
    </div>
    `
  )
}
