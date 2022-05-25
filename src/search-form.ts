import { renderBlock } from './lib.js'
import { dateFormate, isoDateTransform } from './dateFormate.js'
import { DataCollection } from './dataCollection.js'

export const dataCollector = (e: Event): void => {
  e.preventDefault()
  const city = (<HTMLInputElement>document.querySelector('#city')).value
  const checkInDate = (<HTMLInputElement>document.querySelector('#check-in-date')).value
  const checkOutDate = (<HTMLInputElement>document.querySelector('#check-out-date')).value
  const maxPrice = Number((<HTMLInputElement>document.querySelector('#max-price')).value)

  const data = new DataCollection(city, checkInDate, checkOutDate, maxPrice)

  searchFunc(data)
}

const searchFunc = (value: unknown): void => {

  if (value instanceof DataCollection) {
    console.log(value)
  }
}

export function renderSearchFormBlock(curDate: number, depDate: number) {

  const { currentDate, departureDate, maxDate } = dateFormate(curDate)

  const normalCurDate = isoDateTransform(curDate)


  renderBlock(
    'search-form-block',
    `
    <form>
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>--!>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" value="${currentDate}" min="${normalCurDate}" max="${maxDate}" name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value="${departureDate}" min="2021-05-11" max="${maxDate}" name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><button id="searchBtn">Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `
  )
}
