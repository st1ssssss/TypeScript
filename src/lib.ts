import { IHotel } from "./flat-rent-sdk"

export function renderBlock(elementId, html) {
  const element = document.getElementById(elementId)
  element.innerHTML = html
}

export const renderResultsListOfBlocks = (elementId: string, data: IHotel) => {
  const element = document.getElementById(elementId)
  const itemOfList = document.createElement('li')
  itemOfList.classList.add('result')
  itemOfList.innerHTML = `<div class="result-container">
  <div class="result-img-container">
    <div class="favorites"></div>
    <img class="result-img" src="./img/${data.photos[0]}" alt="">
  </div>	
  <div class="result-info">
    <div class="result-info--header">
      <p>${data.title}</p>
      <p class="price">${data.price}</p>
    </div>
    <div class="result-info--map"><i class="map-icon"></i> 2.5км от вас</div>
    <div class="result-info--descr">${data.details}</div>
    <div class="result-info--footer">
      <div>
        <button>Забронировать</button>
      </div>
    </div>
  </div>
</div>`
  element.appendChild(itemOfList)
}

export function renderToast(message, action) {
  let messageText = ''

  if (message != null) {
    messageText = `
      <div id="info-block" class="info-block ${message.type}">
        <p>${message.text}</p>
        <button id="toast-main-action">${action?.name || 'Закрыть'}</button>
      </div>
    `
  }

  renderBlock(
    'toast-block',
    messageText
  )

  const button = document.getElementById('toast-main-action')
  if (button != null) {
    button.onclick = function () {
      if (action != null && action.handler != null) {
        action.handler()
      }
      renderToast(null, null)
    }
  }
}
