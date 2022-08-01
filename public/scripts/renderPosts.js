var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { listenerSetterForIcon } from './helpFunctions.js';
import { favouriteAmountSetter, getFavouriteAmount, getUserData } from './localStorageHelpers.js';
import { renderUserBlock } from './user.js';
const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';
export const renderPosts = () => __awaiter(void 0, void 0, void 0, function* () {
    const arr = yield getData();
    arr.forEach(el => {
        const div = document.createElement('div');
        div.classList.add('post-div');
        const layout = `<h3 >${el.title}</h3> <i id="${el.id}"  class="heart-icon" ></i>`;
        div.innerHTML = layout;
        const resBlock = document.getElementById('search-results-block');
        resBlock.appendChild(div);
    });
    listenerSetterForIcon();
});
const getData = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch(POSTS_URL, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        });
        const json = yield response.json();
        return json;
    }
    catch (error) {
        console.log(error);
    }
});
export const toggleFavouriteItem = (e) => __awaiter(void 0, void 0, void 0, function* () {
    const arr = yield getData();
    const elem = e.target;
    const id = Number(elem.id);
    const itemToAdd = arr.find(el => el.id === id);
    const itemToAddJson = { id: itemToAdd.id, userId: itemToAdd.userId, title: itemToAdd.title };
    const LocalStorageCurrState = JSON.parse(localStorage.getItem('favouriteItems'));
    if (Object.keys(LocalStorageCurrState).includes(String(itemToAdd.id))) {
        document.getElementById(itemToAdd.id).classList.toggle('active');
        delete LocalStorageCurrState[itemToAdd.id];
        const objToAdd = JSON.stringify(Object.assign({}, LocalStorageCurrState));
        localStorage.setItem('favouriteItems', objToAdd);
        localStorage.setItem('favouriteAmount', favouriteAmountSetter());
    }
    else {
        document.getElementById(itemToAdd.id).classList.toggle('active');
        const objToAdd = JSON.stringify(Object.assign(Object.assign({}, LocalStorageCurrState), { [itemToAdd.id]: itemToAddJson }));
        localStorage.setItem('favouriteItems', objToAdd);
        localStorage.setItem('favouriteAmount', favouriteAmountSetter());
    }
    console.log(LocalStorageCurrState);
    renderUserBlock(getUserData('user'), getFavouriteAmount('favouriteAmount'));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVuZGVyUG9zdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcmVuZGVyUG9zdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0JBQW9CLENBQUE7QUFDMUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLGtCQUFrQixFQUFFLFdBQVcsRUFBRSxNQUFNLDBCQUEwQixDQUFBO0FBQ2pHLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxXQUFXLENBQUE7QUFDM0MsTUFBTSxTQUFTLEdBQUcsNENBQTRDLENBQUE7QUFJOUQsTUFBTSxDQUFDLE1BQU0sV0FBVyxHQUFHLEdBQVMsRUFBRTtJQUNwQyxNQUFNLEdBQUcsR0FBRyxNQUFNLE9BQU8sRUFBRSxDQUFBO0lBQzNCLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUU7UUFDZixNQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ3pDLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQzdCLE1BQU0sTUFBTSxHQUFHLFFBQVEsRUFBRSxDQUFDLEtBQUssZ0JBQWdCLEVBQUUsQ0FBQyxFQUFFLDZCQUE2QixDQUFBO1FBQ2pGLEdBQUcsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFBO1FBQ3RCLE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsc0JBQXNCLENBQUMsQ0FBQTtRQUNoRSxRQUFRLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQzNCLENBQUMsQ0FBQyxDQUFBO0lBQ0YscUJBQXFCLEVBQUUsQ0FBQTtBQUN6QixDQUFDLENBQUEsQ0FBQTtBQUVELE1BQU0sT0FBTyxHQUFHLEdBQVMsRUFBRTtJQUN6QixJQUFJO1FBQ0YsTUFBTSxRQUFRLEdBQUcsTUFBTSxLQUFLLENBQUMsU0FBUyxFQUFFO1lBQ3RDLE1BQU0sRUFBRSxLQUFLO1lBQ2IsT0FBTyxFQUFFO2dCQUNQLGNBQWMsRUFBRSxrQkFBa0I7YUFDbkM7U0FDRixDQUFDLENBQUE7UUFDRixNQUFNLElBQUksR0FBRyxNQUFNLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtRQUNsQyxPQUFPLElBQUksQ0FBQTtLQUVaO0lBQUMsT0FBTyxLQUFLLEVBQUU7UUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO0tBQ25CO0FBQ0gsQ0FBQyxDQUFBLENBQUE7QUFFRCxNQUFNLENBQUMsTUFBTSxtQkFBbUIsR0FBRyxDQUFPLENBQWEsRUFBRyxFQUFFO0lBQzFELE1BQU0sR0FBRyxHQUFHLE1BQU0sT0FBTyxFQUFFLENBQUE7SUFDM0IsTUFBTSxJQUFJLEdBQUcsQ0FBQyxDQUFDLE1BQXFCLENBQUE7SUFDcEMsTUFBTSxFQUFFLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUMxQixNQUFNLFNBQVMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQTtJQUU5QyxNQUFNLGFBQWEsR0FBRyxFQUFFLEVBQUUsRUFBRSxTQUFTLENBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxTQUFTLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUE7SUFHNUYsTUFBTSxxQkFBcUIsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFBO0lBRWhGLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUU7UUFDckUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUNoRSxPQUFPLHFCQUFxQixDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQTtRQUMxQyxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxtQkFDMUIscUJBQXFCLEVBQ3hCLENBQUE7UUFDRixZQUFZLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFFLFFBQVEsQ0FBQyxDQUFBO1FBQ2hELFlBQVksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLEVBQUUscUJBQXFCLEVBQUUsQ0FBQyxDQUFBO0tBQ2pFO1NBQU07UUFDTCxRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBRWhFLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLGlDQUMxQixxQkFBcUIsS0FDeEIsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQUUsYUFBYSxJQUM3QixDQUFBO1FBQ0YsWUFBWSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxRQUFRLENBQUMsQ0FBQTtRQUNoRCxZQUFZLENBQUMsT0FBTyxDQUFDLGlCQUFpQixFQUFFLHFCQUFxQixFQUFFLENBQUMsQ0FBQTtLQUNqRTtJQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQTtJQUNsQyxlQUFlLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxFQUFFLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQTtBQUU3RSxDQUFDLENBQUEsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGxpc3RlbmVyU2V0dGVyRm9ySWNvbiB9IGZyb20gJy4vaGVscEZ1bmN0aW9ucy5qcydcbmltcG9ydCB7IGZhdm91cml0ZUFtb3VudFNldHRlciwgZ2V0RmF2b3VyaXRlQW1vdW50LCBnZXRVc2VyRGF0YSB9IGZyb20gJy4vbG9jYWxTdG9yYWdlSGVscGVycy5qcydcbmltcG9ydCB7IHJlbmRlclVzZXJCbG9jayB9IGZyb20gJy4vdXNlci5qcydcbmNvbnN0IFBPU1RTX1VSTCA9ICdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHMnXG5cblxuXG5leHBvcnQgY29uc3QgcmVuZGVyUG9zdHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGFyciA9IGF3YWl0IGdldERhdGEoKVxuICBhcnIuZm9yRWFjaChlbCA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgncG9zdC1kaXYnKVxuICAgIGNvbnN0IGxheW91dCA9IGA8aDMgPiR7ZWwudGl0bGV9PC9oMz4gPGkgaWQ9XCIke2VsLmlkfVwiICBjbGFzcz1cImhlYXJ0LWljb25cIiA+PC9pPmBcbiAgICBkaXYuaW5uZXJIVE1MID0gbGF5b3V0XG4gICAgY29uc3QgcmVzQmxvY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLXJlc3VsdHMtYmxvY2snKVxuICAgIHJlc0Jsb2NrLmFwcGVuZENoaWxkKGRpdilcbiAgfSlcbiAgbGlzdGVuZXJTZXR0ZXJGb3JJY29uKClcbn1cblxuY29uc3QgZ2V0RGF0YSA9IGFzeW5jICgpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFBPU1RTX1VSTCwge1xuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfVxuICAgIH0pXG4gICAgY29uc3QganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgIHJldHVybiBqc29uXG5cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgdG9nZ2xlRmF2b3VyaXRlSXRlbSA9IGFzeW5jIChlOiBNb3VzZUV2ZW50LCkgPT4ge1xuICBjb25zdCBhcnIgPSBhd2FpdCBnZXREYXRhKClcbiAgY29uc3QgZWxlbSA9IGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50XG4gIGNvbnN0IGlkID0gTnVtYmVyKGVsZW0uaWQpXG4gIGNvbnN0IGl0ZW1Ub0FkZCA9IGFyci5maW5kKGVsID0+IGVsLmlkID09PSBpZClcblxuICBjb25zdCBpdGVtVG9BZGRKc29uID0geyBpZDogaXRlbVRvQWRkLmlkLCB1c2VySWQ6IGl0ZW1Ub0FkZC51c2VySWQsIHRpdGxlOiBpdGVtVG9BZGQudGl0bGUgfVxuXG5cbiAgY29uc3QgTG9jYWxTdG9yYWdlQ3VyclN0YXRlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmF2b3VyaXRlSXRlbXMnKSlcblxuICBpZiAoT2JqZWN0LmtleXMoTG9jYWxTdG9yYWdlQ3VyclN0YXRlKS5pbmNsdWRlcyhTdHJpbmcoaXRlbVRvQWRkLmlkKSkpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpdGVtVG9BZGQuaWQpLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpXG4gICAgZGVsZXRlIExvY2FsU3RvcmFnZUN1cnJTdGF0ZVtpdGVtVG9BZGQuaWRdXG4gICAgY29uc3Qgb2JqVG9BZGQgPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAuLi5Mb2NhbFN0b3JhZ2VDdXJyU3RhdGUsXG4gICAgfSlcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZmF2b3VyaXRlSXRlbXMnLCBvYmpUb0FkZClcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZmF2b3VyaXRlQW1vdW50JywgZmF2b3VyaXRlQW1vdW50U2V0dGVyKCkpXG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaXRlbVRvQWRkLmlkKS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKVxuXG4gICAgY29uc3Qgb2JqVG9BZGQgPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAuLi5Mb2NhbFN0b3JhZ2VDdXJyU3RhdGUsXG4gICAgICBbaXRlbVRvQWRkLmlkXTogaXRlbVRvQWRkSnNvblxuICAgIH0pXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2Zhdm91cml0ZUl0ZW1zJywgb2JqVG9BZGQpXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2Zhdm91cml0ZUFtb3VudCcsIGZhdm91cml0ZUFtb3VudFNldHRlcigpKVxuICB9XG4gIGNvbnNvbGUubG9nKExvY2FsU3RvcmFnZUN1cnJTdGF0ZSlcbiAgcmVuZGVyVXNlckJsb2NrKGdldFVzZXJEYXRhKCd1c2VyJyksIGdldEZhdm91cml0ZUFtb3VudCgnZmF2b3VyaXRlQW1vdW50JykpXG5cbn1cblxuIl19