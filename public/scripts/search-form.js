import { renderBlock } from './lib.js';
import { dateFormate, isoDateTransform } from './dateFormate.js';
import { FlatRentSdk } from './flat-rent-sdk.js';
import { renderEmptyOrErrorSearchBlock, renderSearchResultsBlock } from './search-results.js';
import { renderPosts } from './renderPosts.js';
const FlatRent = new FlatRentSdk();
export const dataCollector = (e) => {
    e.preventDefault();
    const city = document.querySelector('#city').value;
    const checkInDate = document.querySelector('#check-in-date').valueAsDate;
    const checkOutDate = document.querySelector('#check-out-date').valueAsDate;
    const priceLimit = Number(document.querySelector('#max-price').value);
    const data = { city, checkInDate, checkOutDate, priceLimit };
    const prov1 = document.getElementById('flat-rent');
    const prov2 = document.querySelector('#homy');
    if (prov1.checked) {
        data.provider = 'flat-rent';
        searchFunc(data);
    }
    if (prov2.checked) {
        data.provider = 'homy';
        searchFunc(data);
    }
    if (prov1.checked && prov2.checked) {
        data.provider = ['homy', 'flat-rent'];
        searchFunc(data);
    }
};
const searchFunc = (value) => {
    if (value.provider === 'homy') {
        renderBlock('search-results-block', '');
        renderPosts();
        value.truth = true;
    }
    else if (value.provider === 'flat-rent') {
        value.truth = false;
        renderBlock('search-results-block', '');
        FlatRent.search(value).then((result) => renderSearchResultsBlock(result)).catch((error) => renderEmptyOrErrorSearchBlock(error));
    }
    else if (value.provider instanceof Array && value.truth != true) {
        value.truth = false;
        renderBlock('search-results-block', '');
        FlatRent.search(value).then((result) => renderSearchResultsBlock(result)).catch((error) => renderEmptyOrErrorSearchBlock(error));
        renderPosts();
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
    `);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZvcm0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VhcmNoLWZvcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFVBQVUsQ0FBQTtBQUN0QyxPQUFPLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0JBQWtCLENBQUE7QUFDaEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG9CQUFvQixDQUFBO0FBQ2hELE9BQU8sRUFBRSw2QkFBNkIsRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHFCQUFxQixDQUFBO0FBQzdGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQTtBQVc5QyxNQUFNLFFBQVEsR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFBO0FBRWxDLE1BQU0sQ0FBQyxNQUFNLGFBQWEsR0FBRyxDQUFDLENBQVEsRUFBUSxFQUFFO0lBQzlDLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQTtJQUNsQixNQUFNLElBQUksR0FBc0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUUsQ0FBQyxLQUFLLENBQUE7SUFDdEUsTUFBTSxXQUFXLEdBQXNCLFFBQVEsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUUsQ0FBQyxXQUFXLENBQUE7SUFDNUYsTUFBTSxZQUFZLEdBQXNCLFFBQVEsQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUUsQ0FBQyxXQUFXLENBQUE7SUFDOUYsTUFBTSxVQUFVLEdBQUcsTUFBTSxDQUFvQixRQUFRLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBRSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBSXpGLE1BQU0sSUFBSSxHQUFVLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLENBQUE7SUFFbkUsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQXFCLENBQUE7SUFDdEUsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQXFCLENBQUE7SUFDakUsSUFBSSxLQUFLLENBQUMsT0FBTyxFQUFFO1FBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFBO1FBQzNCLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQTtLQUNqQjtJQUNELElBQUksS0FBSyxDQUFDLE9BQU8sRUFBRTtRQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQTtRQUN0QixVQUFVLENBQUMsSUFBSSxDQUFDLENBQUE7S0FDakI7SUFDRCxJQUFJLEtBQUssQ0FBQyxPQUFPLElBQUksS0FBSyxDQUFDLE9BQU8sRUFBRTtRQUNsQyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFBO1FBQ3JDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQTtLQUNqQjtBQUtILENBQUMsQ0FBQTtBQUVELE1BQU0sVUFBVSxHQUFHLENBQUMsS0FBWSxFQUFRLEVBQUU7SUFFeEMsSUFBSSxLQUFLLENBQUMsUUFBUSxLQUFLLE1BQU0sRUFBRTtRQUU3QixXQUFXLENBQUMsc0JBQXNCLEVBQUUsRUFBRSxDQUFDLENBQUE7UUFDdkMsV0FBVyxFQUFFLENBQUE7UUFDYixLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQTtLQUNuQjtTQUNJLElBQUksS0FBSyxDQUFDLFFBQVEsS0FBSyxXQUFXLEVBQUU7UUFDdkMsS0FBSyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUE7UUFDbkIsV0FBVyxDQUFDLHNCQUFzQixFQUFFLEVBQUUsQ0FBQyxDQUFBO1FBQ3ZDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsNkJBQTZCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQTtLQUNqSTtTQUVJLElBQUksS0FBSyxDQUFDLFFBQVEsWUFBWSxLQUFLLElBQUksS0FBSyxDQUFDLEtBQUssSUFBSSxJQUFJLEVBQUU7UUFDL0QsS0FBSyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUE7UUFFbkIsV0FBVyxDQUFDLHNCQUFzQixFQUFFLEVBQUUsQ0FBQyxDQUFBO1FBQ3ZDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsNkJBQTZCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQTtRQUNoSSxXQUFXLEVBQUUsQ0FBQTtLQUNkO0FBRUgsQ0FBQyxDQUFBO0FBRUQsTUFBTSxVQUFVLHFCQUFxQixDQUFDLE9BQWUsRUFBRSxPQUFlO0lBRXBFLE1BQU0sRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLE9BQU8sRUFBRSxHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUVwRSxNQUFNLGFBQWEsR0FBRyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUcvQyxXQUFXLENBQ1QsbUJBQW1CLEVBQ25COzs7Ozs7Ozs7Ozs7Ozs7OzsyREFpQnVELFdBQVcsVUFBVSxhQUFhLFVBQVUsT0FBTzs7Ozs0REFJbEQsYUFBYSwyQkFBMkIsT0FBTzs7Ozs7Ozs7Ozs7O0tBWXRHLENBQ0YsQ0FBQTtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXJCbG9jayB9IGZyb20gJy4vbGliLmpzJ1xuaW1wb3J0IHsgZGF0ZUZvcm1hdGUsIGlzb0RhdGVUcmFuc2Zvcm0gfSBmcm9tICcuL2RhdGVGb3JtYXRlLmpzJ1xuaW1wb3J0IHsgRmxhdFJlbnRTZGsgfSBmcm9tICcuL2ZsYXQtcmVudC1zZGsuanMnXG5pbXBvcnQgeyByZW5kZXJFbXB0eU9yRXJyb3JTZWFyY2hCbG9jaywgcmVuZGVyU2VhcmNoUmVzdWx0c0Jsb2NrIH0gZnJvbSAnLi9zZWFyY2gtcmVzdWx0cy5qcydcbmltcG9ydCB7IHJlbmRlclBvc3RzIH0gZnJvbSAnLi9yZW5kZXJQb3N0cy5qcydcblxuaW50ZXJmYWNlIElEYXRhIHtcbiAgY2l0eTogc3RyaW5nLFxuICBjaGVja0luRGF0ZTogRGF0ZSxcbiAgY2hlY2tPdXREYXRlOiBEYXRlLFxuICBwcmljZUxpbWl0OiBudW1iZXJcbiAgcHJvdmlkZXI/OiBzdHJpbmcgfCBzdHJpbmdbXVxuICB0cnV0aD86IGJvb2xlYW5cbn1cblxuY29uc3QgRmxhdFJlbnQgPSBuZXcgRmxhdFJlbnRTZGsoKVxuXG5leHBvcnQgY29uc3QgZGF0YUNvbGxlY3RvciA9IChlOiBFdmVudCk6IHZvaWQgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgY29uc3QgY2l0eSA9ICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2l0eScpKS52YWx1ZVxuICBjb25zdCBjaGVja0luRGF0ZSA9ICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2hlY2staW4tZGF0ZScpKS52YWx1ZUFzRGF0ZVxuICBjb25zdCBjaGVja091dERhdGUgPSAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NoZWNrLW91dC1kYXRlJykpLnZhbHVlQXNEYXRlXG4gIGNvbnN0IHByaWNlTGltaXQgPSBOdW1iZXIoKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYXgtcHJpY2UnKSkudmFsdWUpXG5cblxuXG4gIGNvbnN0IGRhdGE6IElEYXRhID0geyBjaXR5LCBjaGVja0luRGF0ZSwgY2hlY2tPdXREYXRlLCBwcmljZUxpbWl0IH1cblxuICBjb25zdCBwcm92MSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmbGF0LXJlbnQnKSBhcyBIVE1MSW5wdXRFbGVtZW50XG4gIGNvbnN0IHByb3YyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hvbXknKSBhcyBIVE1MSW5wdXRFbGVtZW50XG4gIGlmIChwcm92MS5jaGVja2VkKSB7XG4gICAgZGF0YS5wcm92aWRlciA9ICdmbGF0LXJlbnQnXG4gICAgc2VhcmNoRnVuYyhkYXRhKVxuICB9XG4gIGlmIChwcm92Mi5jaGVja2VkKSB7XG4gICAgZGF0YS5wcm92aWRlciA9ICdob215J1xuICAgIHNlYXJjaEZ1bmMoZGF0YSlcbiAgfVxuICBpZiAocHJvdjEuY2hlY2tlZCAmJiBwcm92Mi5jaGVja2VkKSB7XG4gICAgZGF0YS5wcm92aWRlciA9IFsnaG9teScsICdmbGF0LXJlbnQnXVxuICAgIHNlYXJjaEZ1bmMoZGF0YSlcbiAgfVxuXG5cblxuXG59XG5cbmNvbnN0IHNlYXJjaEZ1bmMgPSAodmFsdWU6IElEYXRhKTogdm9pZCA9PiB7XG5cbiAgaWYgKHZhbHVlLnByb3ZpZGVyID09PSAnaG9teScpIHtcblxuICAgIHJlbmRlckJsb2NrKCdzZWFyY2gtcmVzdWx0cy1ibG9jaycsICcnKVxuICAgIHJlbmRlclBvc3RzKClcbiAgICB2YWx1ZS50cnV0aCA9IHRydWVcbiAgfVxuICBlbHNlIGlmICh2YWx1ZS5wcm92aWRlciA9PT0gJ2ZsYXQtcmVudCcpIHtcbiAgICB2YWx1ZS50cnV0aCA9IGZhbHNlXG4gICAgcmVuZGVyQmxvY2soJ3NlYXJjaC1yZXN1bHRzLWJsb2NrJywgJycpXG4gICAgRmxhdFJlbnQuc2VhcmNoKHZhbHVlKS50aGVuKChyZXN1bHQpID0+IHJlbmRlclNlYXJjaFJlc3VsdHNCbG9jayhyZXN1bHQpKS5jYXRjaCgoZXJyb3IpID0+IHJlbmRlckVtcHR5T3JFcnJvclNlYXJjaEJsb2NrKGVycm9yKSlcbiAgfVxuXG4gIGVsc2UgaWYgKHZhbHVlLnByb3ZpZGVyIGluc3RhbmNlb2YgQXJyYXkgJiYgdmFsdWUudHJ1dGggIT0gdHJ1ZSkge1xuICAgIHZhbHVlLnRydXRoID0gZmFsc2VcblxuICAgIHJlbmRlckJsb2NrKCdzZWFyY2gtcmVzdWx0cy1ibG9jaycsICcnKVxuICAgIEZsYXRSZW50LnNlYXJjaCh2YWx1ZSkudGhlbigocmVzdWx0KSA9PiByZW5kZXJTZWFyY2hSZXN1bHRzQmxvY2socmVzdWx0KSkuY2F0Y2goKGVycm9yKSA9PiByZW5kZXJFbXB0eU9yRXJyb3JTZWFyY2hCbG9jayhlcnJvcikpXG4gICAgcmVuZGVyUG9zdHMoKVxuICB9XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclNlYXJjaEZvcm1CbG9jayhjdXJEYXRlOiBudW1iZXIsIGRlcERhdGU6IG51bWJlcikge1xuXG4gIGNvbnN0IHsgY3VycmVudERhdGUsIGRlcGFydHVyZURhdGUsIG1heERhdGUgfSA9IGRhdGVGb3JtYXRlKGN1ckRhdGUpXG5cbiAgY29uc3Qgbm9ybWFsQ3VyRGF0ZSA9IGlzb0RhdGVUcmFuc2Zvcm0oY3VyRGF0ZSlcblxuXG4gIHJlbmRlckJsb2NrKFxuICAgICdzZWFyY2gtZm9ybS1ibG9jaycsXG4gICAgYFxuICAgIDxmb3JtPlxuICAgICAgPGZpZWxkc2V0IGNsYXNzPVwic2VhcmNoLWZpbGVkc2V0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNpdHlcIj7Qk9C+0YDQvtC0PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBpZD1cImNpdHlcIiB0eXBlPVwidGV4dFwiIGRpc2FibGVkIHZhbHVlPVwi0KHQsNC90LrRgi3Qn9C10YLQtdGA0LHRg9GA0LNcIiAvPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBkaXNhYmxlZCB2YWx1ZT1cIjU5LjkzODYsMzAuMzE0MVwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInByb3ZpZGVyc1wiPlxuICAgICAgICAgICAgPGxhYmVsPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cImhvbXlcIiBuYW1lPVwicHJvdmlkZXJcIiB2YWx1ZT1cImhvbXlcIiAgLz4gSG9teTwvbGFiZWw+XG4gICAgICAgICAgICA8bGFiZWw+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwiZmxhdC1yZW50XCIgbmFtZT1cInByb3ZpZGVyXCIgdmFsdWU9XCJmbGF0LXJlbnRcIiAgLz4gRmxhdFJlbnQ8L2xhYmVsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiY2hlY2staW4tZGF0ZVwiPtCU0LDRgtCwINC30LDQtdC30LTQsDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJjaGVjay1pbi1kYXRlXCIgdHlwZT1cImRhdGVcIiB2YWx1ZT1cIiR7Y3VycmVudERhdGV9XCIgbWluPVwiJHtub3JtYWxDdXJEYXRlfVwiIG1heD1cIiR7bWF4RGF0ZX1cIiBuYW1lPVwiY2hlY2tpblwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjaGVjay1vdXQtZGF0ZVwiPtCU0LDRgtCwINCy0YvQtdC30LTQsDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJjaGVjay1vdXQtZGF0ZVwiIHR5cGU9XCJkYXRlXCIgdmFsdWU9XCIke2RlcGFydHVyZURhdGV9XCIgbWluPVwiMjAyMS0wNS0xMVwiIG1heD1cIiR7bWF4RGF0ZX1cIiBuYW1lPVwiY2hlY2tvdXRcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwibWF4LXByaWNlXCI+0JzQsNC60YEuINGG0LXQvdCwINGB0YPRgtC+0Lo8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwibWF4LXByaWNlXCIgdHlwZT1cInRleHRcIiB2YWx1ZT1cIlwiIG5hbWU9XCJwcmljZVwiIGNsYXNzPVwibWF4LXByaWNlXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdj48YnV0dG9uIGlkPVwic2VhcmNoQnRuXCI+0J3QsNC50YLQuDwvYnV0dG9uPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZmllbGRzZXQ+XG4gICAgPC9mb3JtPlxuICAgIGBcbiAgKVxufVxuIl19