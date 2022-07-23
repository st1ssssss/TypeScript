import { renderBlock } from './lib.js';
import { dateFormate, isoDateTransform } from './dateFormate.js';
import { DataCollection } from './dataCollection.js';
export const dataCollector = (e) => {
    e.preventDefault();
    const city = document.querySelector('#city').value;
    const checkInDate = document.querySelector('#check-in-date').value;
    const checkOutDate = document.querySelector('#check-out-date').value;
    const maxPrice = Number(document.querySelector('#max-price').value);
    const data = new DataCollection(city, checkInDate, checkOutDate, maxPrice);
    searchFunc(data);
};
const searchFunc = (value) => {
    if (value instanceof DataCollection) {
        console.log(value);
    }
};
export function renderSearchFormBlock(curDate, depDate) {
    const { currentDate, departureDate, maxDate } = dateFormate(curDate);
    const normalCurDate = isoDateTransform(curDate);
    renderBlock('search-form-block', `
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
    `);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZvcm0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VhcmNoLWZvcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFVBQVUsQ0FBQTtBQUN0QyxPQUFPLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0JBQWtCLENBQUE7QUFDaEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHFCQUFxQixDQUFBO0FBRXBELE1BQU0sQ0FBQyxNQUFNLGFBQWEsR0FBRyxDQUFDLENBQVEsRUFBUSxFQUFFO0lBQzlDLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQTtJQUNsQixNQUFNLElBQUksR0FBc0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUUsQ0FBQyxLQUFLLENBQUE7SUFDdEUsTUFBTSxXQUFXLEdBQXNCLFFBQVEsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUUsQ0FBQyxLQUFLLENBQUE7SUFDdEYsTUFBTSxZQUFZLEdBQXNCLFFBQVEsQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUUsQ0FBQyxLQUFLLENBQUE7SUFDeEYsTUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFvQixRQUFRLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBRSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBRXZGLE1BQU0sSUFBSSxHQUFHLElBQUksY0FBYyxDQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLFFBQVEsQ0FBQyxDQUFBO0lBRTFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQTtBQUNsQixDQUFDLENBQUE7QUFFRCxNQUFNLFVBQVUsR0FBRyxDQUFDLEtBQWMsRUFBUSxFQUFFO0lBRTFDLElBQUksS0FBSyxZQUFZLGNBQWMsRUFBRTtRQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO0tBQ25CO0FBQ0gsQ0FBQyxDQUFBO0FBRUQsTUFBTSxVQUFVLHFCQUFxQixDQUFDLE9BQWUsRUFBRSxPQUFlO0lBRXBFLE1BQU0sRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLE9BQU8sRUFBRSxHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUVwRSxNQUFNLGFBQWEsR0FBRyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUcvQyxXQUFXLENBQ1QsbUJBQW1CLEVBQ25COzs7Ozs7Ozs7Ozs7Ozs7OzsyREFpQnVELFdBQVcsVUFBVSxhQUFhLFVBQVUsT0FBTzs7Ozs0REFJbEQsYUFBYSwyQkFBMkIsT0FBTzs7Ozs7Ozs7Ozs7O0tBWXRHLENBQ0YsQ0FBQTtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXJCbG9jayB9IGZyb20gJy4vbGliLmpzJ1xuaW1wb3J0IHsgZGF0ZUZvcm1hdGUsIGlzb0RhdGVUcmFuc2Zvcm0gfSBmcm9tICcuL2RhdGVGb3JtYXRlLmpzJ1xuaW1wb3J0IHsgRGF0YUNvbGxlY3Rpb24gfSBmcm9tICcuL2RhdGFDb2xsZWN0aW9uLmpzJ1xuXG5leHBvcnQgY29uc3QgZGF0YUNvbGxlY3RvciA9IChlOiBFdmVudCk6IHZvaWQgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgY29uc3QgY2l0eSA9ICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2l0eScpKS52YWx1ZVxuICBjb25zdCBjaGVja0luRGF0ZSA9ICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2hlY2staW4tZGF0ZScpKS52YWx1ZVxuICBjb25zdCBjaGVja091dERhdGUgPSAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NoZWNrLW91dC1kYXRlJykpLnZhbHVlXG4gIGNvbnN0IG1heFByaWNlID0gTnVtYmVyKCg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWF4LXByaWNlJykpLnZhbHVlKVxuXG4gIGNvbnN0IGRhdGEgPSBuZXcgRGF0YUNvbGxlY3Rpb24oY2l0eSwgY2hlY2tJbkRhdGUsIGNoZWNrT3V0RGF0ZSwgbWF4UHJpY2UpXG5cbiAgc2VhcmNoRnVuYyhkYXRhKVxufVxuXG5jb25zdCBzZWFyY2hGdW5jID0gKHZhbHVlOiB1bmtub3duKTogdm9pZCA9PiB7XG5cbiAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRGF0YUNvbGxlY3Rpb24pIHtcbiAgICBjb25zb2xlLmxvZyh2YWx1ZSlcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyU2VhcmNoRm9ybUJsb2NrKGN1ckRhdGU6IG51bWJlciwgZGVwRGF0ZTogbnVtYmVyKSB7XG5cbiAgY29uc3QgeyBjdXJyZW50RGF0ZSwgZGVwYXJ0dXJlRGF0ZSwgbWF4RGF0ZSB9ID0gZGF0ZUZvcm1hdGUoY3VyRGF0ZSlcblxuICBjb25zdCBub3JtYWxDdXJEYXRlID0gaXNvRGF0ZVRyYW5zZm9ybShjdXJEYXRlKVxuXG5cbiAgcmVuZGVyQmxvY2soXG4gICAgJ3NlYXJjaC1mb3JtLWJsb2NrJyxcbiAgICBgXG4gICAgPGZvcm0+XG4gICAgICA8ZmllbGRzZXQgY2xhc3M9XCJzZWFyY2gtZmlsZWRzZXRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiY2l0eVwiPtCT0L7RgNC+0LQ8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwiY2l0eVwiIHR5cGU9XCJ0ZXh0XCIgZGlzYWJsZWQgdmFsdWU9XCLQodCw0L3QutGCLdCf0LXRgtC10YDQsdGD0YDQs1wiIC8+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIGRpc2FibGVkIHZhbHVlPVwiNTkuOTM4NiwzMC4zMTQxXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cInByb3ZpZGVyc1wiPlxuICAgICAgICAgICAgPGxhYmVsPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwicHJvdmlkZXJcIiB2YWx1ZT1cImhvbXlcIiBjaGVja2VkIC8+IEhvbXk8L2xhYmVsPlxuICAgICAgICAgICAgPGxhYmVsPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwicHJvdmlkZXJcIiB2YWx1ZT1cImZsYXQtcmVudFwiIGNoZWNrZWQgLz4gRmxhdFJlbnQ8L2xhYmVsPlxuICAgICAgICAgIDwvZGl2Pi0tIT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNoZWNrLWluLWRhdGVcIj7QlNCw0YLQsCDQt9Cw0LXQt9C00LA8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwiY2hlY2staW4tZGF0ZVwiIHR5cGU9XCJkYXRlXCIgdmFsdWU9XCIke2N1cnJlbnREYXRlfVwiIG1pbj1cIiR7bm9ybWFsQ3VyRGF0ZX1cIiBtYXg9XCIke21heERhdGV9XCIgbmFtZT1cImNoZWNraW5cIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiY2hlY2stb3V0LWRhdGVcIj7QlNCw0YLQsCDQstGL0LXQt9C00LA8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwiY2hlY2stb3V0LWRhdGVcIiB0eXBlPVwiZGF0ZVwiIHZhbHVlPVwiJHtkZXBhcnR1cmVEYXRlfVwiIG1pbj1cIjIwMjEtMDUtMTFcIiBtYXg9XCIke21heERhdGV9XCIgbmFtZT1cImNoZWNrb3V0XCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm1heC1wcmljZVwiPtCc0LDQutGBLiDRhtC10L3QsCDRgdGD0YLQvtC6PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBpZD1cIm1heC1wcmljZVwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCJcIiBuYW1lPVwicHJpY2VcIiBjbGFzcz1cIm1heC1wcmljZVwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXY+PGJ1dHRvbiBpZD1cInNlYXJjaEJ0blwiPtCd0LDQudGC0Lg8L2J1dHRvbj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2ZpZWxkc2V0PlxuICAgIDwvZm9ybT5cbiAgICBgXG4gIClcbn1cbiJdfQ==