import { toggleFavouriteItem } from './renderPosts.js'
import { dataCollector } from './search-form.js'

export const listenersSetter = (): void => {
  const el = document.querySelector('#searchBtn')
  el.addEventListener('click', dataCollector)



}

export const listenerSetterForIcon = () => {
  const heartIcons = document.querySelectorAll('.heart-icon')
  if (heartIcons) {
    heartIcons.forEach(el => {

      el.addEventListener('click', toggleFavouriteItem)
    })
  }
}
