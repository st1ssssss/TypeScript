import { listenerSetterForIcon } from './helpFunctions.js'
import { favouriteAmountSetter, getFavouriteAmount, getUserData } from './localStorageHelpers.js'
import { renderUserBlock } from './user.js'
const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts'



export const renderPosts = async () => {
  const arr = await getData()
  arr.forEach(el => {
    const div = document.createElement('div')
    div.classList.add('post-div')
    const layout = `<h3 >${el.title}</h3> <i id="${el.id}"  class="heart-icon" ></i>`
    div.innerHTML = layout
    const resBlock = document.getElementById('search-results-block')
    resBlock.appendChild(div)
  })
  listenerSetterForIcon()
}

const getData = async () => {
  try {
    const response = await fetch(POSTS_URL, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json'
      }
    })
    const json = await response.json()
    return json

  } catch (error) {
    console.log(error)
  }
}

export const toggleFavouriteItem = async (e: MouseEvent,) => {
  const arr = await getData()
  const elem = e.target as HTMLElement
  const id = Number(elem.id)
  const itemToAdd = arr.find(el => el.id === id)

  const itemToAddJson = { id: itemToAdd.id, userId: itemToAdd.userId, title: itemToAdd.title }


  const LocalStorageCurrState = JSON.parse(localStorage.getItem('favouriteItems'))

  if (Object.keys(LocalStorageCurrState).includes(String(itemToAdd.id))) {
    document.getElementById(itemToAdd.id).classList.toggle('active')
    delete LocalStorageCurrState[itemToAdd.id]
    const objToAdd = JSON.stringify({
      ...LocalStorageCurrState,
    })
    localStorage.setItem('favouriteItems', objToAdd)
    localStorage.setItem('favouriteAmount', favouriteAmountSetter())
  } else {
    document.getElementById(itemToAdd.id).classList.toggle('active')

    const objToAdd = JSON.stringify({
      ...LocalStorageCurrState,
      [itemToAdd.id]: itemToAddJson
    })
    localStorage.setItem('favouriteItems', objToAdd)
    localStorage.setItem('favouriteAmount', favouriteAmountSetter())
  }
  console.log(LocalStorageCurrState)
  renderUserBlock(getUserData('user'), getFavouriteAmount('favouriteAmount'))

}

