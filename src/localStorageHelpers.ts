import { User } from './userClass.js'
import { FavouriteAmount } from './favouriteAmountClass.js'

const user = new User('Wade Warren', '/img/avatar.png')
const favouriteAmount = new FavouriteAmount(2)

export const localStorageSetter = (): void => {
  const userJson = JSON.stringify(user)
  const favouriteAmountJson = JSON.stringify(favouriteAmount)
  localStorage.setItem('user', userJson)
  localStorage.setItem('favouriteAmount', favouriteAmountJson)
}

export const getUserData = (value: unknown): User => {

  if (typeof value === 'string') {
    const { username, avatarUrl } = JSON.parse(localStorage.getItem(value))
    return new User(username, avatarUrl)

  }

}

export const getFavouriteAmount = (value: unknown): FavouriteAmount => {

  if (typeof value === 'string') {
    const { amount } = JSON.parse(localStorage.getItem(value))
    return new FavouriteAmount(amount)

  }

}
