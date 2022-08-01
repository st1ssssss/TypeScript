import { renderBlock } from './lib.js'
import { dateFormate, isoDateTransform } from './dateFormate.js'
import { FlatRentSdk } from './flat-rent-sdk.js'
import { renderEmptyOrErrorSearchBlock, renderSearchResultsBlock } from './search-results.js'
import { renderPosts } from './renderPosts.js'

interface IData {
  city: string,
  checkInDate: Date,
  checkOutDate: Date,
  priceLimit: number
  provider?: string | string[]
  truth?: boolean
}

const FlatRent = new FlatRentSdk()

export const dataCollector = (e: Event): void => {
  e.preventDefault()
  const city = (<HTMLInputElement>document.querySelector('#city')).value
  const checkInDate = (<HTMLInputElement>document.querySelector('#check-in-date')).valueAsDate
  const checkOutDate = (<HTMLInputElement>document.querySelector('#check-out-date')).valueAsDate
  const priceLimit = Number((<HTMLInputElement>document.querySelector('#max-price')).value)



  const data: IData = { city, checkInDate, checkOutDate, priceLimit }

  const prov1 = document.getElementById('flat-rent') as HTMLInputElement
  const prov2 = document.querySelector('#homy') as HTMLInputElement
  if (prov1.checked) {
    data.provider = 'flat-rent'
    searchFunc(data)
  }
  if (prov2.checked) {
    data.provider = 'homy'
    searchFunc(data)
  }
  if (prov1.checked && prov2.checked) {
    data.provider = ['homy', 'flat-rent']
    searchFunc(data)
  }




}

const searchFunc = (value: IData): void => {

  if (value.provider === 'homy') {

    renderBlock('search-results-block', '')
    renderPosts()
    value.truth = true
  }
  else if (value.provider === 'flat-rent') {
    value.truth = false
    renderBlock('search-results-block', '')
    FlatRent.search(value).then((result) => renderSearchResultsBlock(result)).catch((error) => renderEmptyOrErrorSearchBlock(error))
  }

  else if (value.provider instanceof Array && value.truth != true) {
    value.truth = false

    renderBlock('search-results-block', '')
    FlatRent.search(value).then((result) => renderSearchResultsBlock(result)).catch((error) => renderEmptyOrErrorSearchBlock(error))
    renderPosts()
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
          <div class="providers">
            <label><input type="checkbox" id="homy" name="provider" value="homy"  /> Homy</label>
            <label><input type="checkbox" id="flat-rent" name="provider" value="flat-rent"  /> FlatRent</label>
          </div>
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
