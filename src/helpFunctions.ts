import { dataCollector } from './search-form.js'

export const listenersSetter = (): void => {
  const el = document.querySelector('#searchBtn')
  el.addEventListener('click', dataCollector)
}
