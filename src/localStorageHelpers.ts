import { User } from './userClass.js'
import { FavouriteItem, FavouriteAmount } from './favouriteAmountClass.js'
import { FlatRentSdk, database } from './flat-rent-sdk.js'

const FlatRent = new FlatRentSdk()
const user = new User('Wade Warren', '/img/avatar.png')
const favouriteItems = new FavouriteItem()

export const localStorageSetter = (): void => {
  const userJson = JSON.stringify(user)
  const favouriteItemsJson = JSON.stringify(favouriteItems)

  FlatRent._writeDatabase(database)
  localStorage.setItem('user', userJson)
  localStorage.setItem('favouriteItems', favouriteItemsJson)
  localStorage.setItem('favouriteAmount', favouriteAmountSetter())
}

export const getUserData = (value: unknown): User => {

  if (typeof value === 'string') {
    const { username, avatarUrl } = JSON.parse(localStorage.getItem(value))
    return new User(username, avatarUrl)

  }

}

export const favouriteAmountSetter = (): string => {
  const favItems = Object.keys(JSON.parse(localStorage.getItem('favouriteItems'))).length
  return JSON.stringify(new FavouriteAmount(favItems))

}

export const getFavouriteAmount = (value: unknown): FavouriteAmount => {

  if (typeof value === 'string') {
    const { number } = JSON.parse(localStorage.getItem(value))
    return new FavouriteAmount(number)

  }

}
