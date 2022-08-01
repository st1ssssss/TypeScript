export function renderBlock(elementId, html) {
    const element = document.getElementById(elementId);
    element.innerHTML = html;
}
export const renderResultsListOfBlocks = (elementId, data) => {
    const element = document.getElementById(elementId);
    const itemOfList = document.createElement('li');
    itemOfList.classList.add('result');
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
</div>`;
    element.appendChild(itemOfList);
};
export function renderToast(message, action) {
    let messageText = '';
    if (message != null) {
        messageText = `
      <div id="info-block" class="info-block ${message.type}">
        <p>${message.text}</p>
        <button id="toast-main-action">${(action === null || action === void 0 ? void 0 : action.name) || 'Закрыть'}</button>
      </div>
    `;
    }
    renderBlock('toast-block', messageText);
    const button = document.getElementById('toast-main-action');
    if (button != null) {
        button.onclick = function () {
            if (action != null && action.handler != null) {
                action.handler();
            }
            renderToast(null, null);
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGliLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2xpYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxNQUFNLFVBQVUsV0FBVyxDQUFDLFNBQVMsRUFBRSxJQUFJO0lBQ3pDLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUE7SUFDbEQsT0FBTyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUE7QUFDMUIsQ0FBQztBQUVELE1BQU0sQ0FBQyxNQUFNLHlCQUF5QixHQUFHLENBQUMsU0FBaUIsRUFBRSxJQUFZLEVBQUUsRUFBRTtJQUMzRSxNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQ2xELE1BQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDL0MsVUFBVSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDbEMsVUFBVSxDQUFDLFNBQVMsR0FBRzs7O3lDQUdnQixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzs7OztXQUk1QyxJQUFJLENBQUMsS0FBSzt5QkFDSSxJQUFJLENBQUMsS0FBSzs7O3NDQUdHLElBQUksQ0FBQyxPQUFPOzs7Ozs7O09BTzNDLENBQUE7SUFDTCxPQUFPLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFBO0FBQ2pDLENBQUMsQ0FBQTtBQUVELE1BQU0sVUFBVSxXQUFXLENBQUMsT0FBTyxFQUFFLE1BQU07SUFDekMsSUFBSSxXQUFXLEdBQUcsRUFBRSxDQUFBO0lBRXBCLElBQUksT0FBTyxJQUFJLElBQUksRUFBRTtRQUNuQixXQUFXLEdBQUc7K0NBQzZCLE9BQU8sQ0FBQyxJQUFJO2FBQzlDLE9BQU8sQ0FBQyxJQUFJO3lDQUNnQixDQUFBLE1BQU0sYUFBTixNQUFNLHVCQUFOLE1BQU0sQ0FBRSxJQUFJLEtBQUksU0FBUzs7S0FFN0QsQ0FBQTtLQUNGO0lBRUQsV0FBVyxDQUNULGFBQWEsRUFDYixXQUFXLENBQ1osQ0FBQTtJQUVELE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsbUJBQW1CLENBQUMsQ0FBQTtJQUMzRCxJQUFJLE1BQU0sSUFBSSxJQUFJLEVBQUU7UUFDbEIsTUFBTSxDQUFDLE9BQU8sR0FBRztZQUNmLElBQUksTUFBTSxJQUFJLElBQUksSUFBSSxNQUFNLENBQUMsT0FBTyxJQUFJLElBQUksRUFBRTtnQkFDNUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFBO2FBQ2pCO1lBQ0QsV0FBVyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUN6QixDQUFDLENBQUE7S0FDRjtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJSG90ZWwgfSBmcm9tIFwiLi9mbGF0LXJlbnQtc2RrXCJcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckJsb2NrKGVsZW1lbnRJZCwgaHRtbCkge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudElkKVxuICBlbGVtZW50LmlubmVySFRNTCA9IGh0bWxcbn1cblxuZXhwb3J0IGNvbnN0IHJlbmRlclJlc3VsdHNMaXN0T2ZCbG9ja3MgPSAoZWxlbWVudElkOiBzdHJpbmcsIGRhdGE6IElIb3RlbCkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudElkKVxuICBjb25zdCBpdGVtT2ZMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICBpdGVtT2ZMaXN0LmNsYXNzTGlzdC5hZGQoJ3Jlc3VsdCcpXG4gIGl0ZW1PZkxpc3QuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJyZXN1bHQtY29udGFpbmVyXCI+XG4gIDxkaXYgY2xhc3M9XCJyZXN1bHQtaW1nLWNvbnRhaW5lclwiPlxuICAgIDxkaXYgY2xhc3M9XCJmYXZvcml0ZXNcIj48L2Rpdj5cbiAgICA8aW1nIGNsYXNzPVwicmVzdWx0LWltZ1wiIHNyYz1cIi4vaW1nLyR7ZGF0YS5waG90b3NbMF19XCIgYWx0PVwiXCI+XG4gIDwvZGl2Plx0XG4gIDxkaXYgY2xhc3M9XCJyZXN1bHQtaW5mb1wiPlxuICAgIDxkaXYgY2xhc3M9XCJyZXN1bHQtaW5mby0taGVhZGVyXCI+XG4gICAgICA8cD4ke2RhdGEudGl0bGV9PC9wPlxuICAgICAgPHAgY2xhc3M9XCJwcmljZVwiPiR7ZGF0YS5wcmljZX08L3A+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInJlc3VsdC1pbmZvLS1tYXBcIj48aSBjbGFzcz1cIm1hcC1pY29uXCI+PC9pPiAyLjXQutC8INC+0YIg0LLQsNGBPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInJlc3VsdC1pbmZvLS1kZXNjclwiPiR7ZGF0YS5kZXRhaWxzfTwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJyZXN1bHQtaW5mby0tZm9vdGVyXCI+XG4gICAgICA8ZGl2PlxuICAgICAgICA8YnV0dG9uPtCX0LDQsdGA0L7QvdC40YDQvtCy0LDRgtGMPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5gXG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoaXRlbU9mTGlzdClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclRvYXN0KG1lc3NhZ2UsIGFjdGlvbikge1xuICBsZXQgbWVzc2FnZVRleHQgPSAnJ1xuXG4gIGlmIChtZXNzYWdlICE9IG51bGwpIHtcbiAgICBtZXNzYWdlVGV4dCA9IGBcbiAgICAgIDxkaXYgaWQ9XCJpbmZvLWJsb2NrXCIgY2xhc3M9XCJpbmZvLWJsb2NrICR7bWVzc2FnZS50eXBlfVwiPlxuICAgICAgICA8cD4ke21lc3NhZ2UudGV4dH08L3A+XG4gICAgICAgIDxidXR0b24gaWQ9XCJ0b2FzdC1tYWluLWFjdGlvblwiPiR7YWN0aW9uPy5uYW1lIHx8ICfQl9Cw0LrRgNGL0YLRjCd9PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICBgXG4gIH1cblxuICByZW5kZXJCbG9jayhcbiAgICAndG9hc3QtYmxvY2snLFxuICAgIG1lc3NhZ2VUZXh0XG4gIClcblxuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9hc3QtbWFpbi1hY3Rpb24nKVxuICBpZiAoYnV0dG9uICE9IG51bGwpIHtcbiAgICBidXR0b24ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChhY3Rpb24gIT0gbnVsbCAmJiBhY3Rpb24uaGFuZGxlciAhPSBudWxsKSB7XG4gICAgICAgIGFjdGlvbi5oYW5kbGVyKClcbiAgICAgIH1cbiAgICAgIHJlbmRlclRvYXN0KG51bGwsIG51bGwpXG4gICAgfVxuICB9XG59XG4iXX0=