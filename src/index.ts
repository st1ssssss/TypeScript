import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import { renderToast } from './lib.js'
import { getFavouriteAmount, getUserData, localStorageSetter } from './localStorageHelpers.js'
import { listenersSetter } from './helpFunctions.js'

window.addEventListener('DOMContentLoaded', () => {
  localStorageSetter()
  renderUserBlock(getUserData('user'), getFavouriteAmount('favouriteAmount'))
  renderSearchFormBlock(Date.now(), Date.now())
  renderSearchStubBlock()
  listenersSetter()


  renderToast(
    { text: 'Это пример уведомления. Используйте его при необходимости', type: 'success' },
    { name: 'Понял', handler: () => { console.log('Уведомление закрыто') } }
  )
})
