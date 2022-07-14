const cards: HTMLCollectionOf<Element> = document.getElementsByClassName('card');
const elemBasketCount: HTMLElement | null = document.querySelector('.header_basket-count');
let basketCount = 0;
// const basketArray:[]Element = [];
// console.log(Array.from(cards))
const changeBasketCount = () => {
  if (elemBasketCount) {
    if (basketCount > 0) {
      elemBasketCount.style.opacity = '1';
      elemBasketCount.textContent = String(basketCount);
    } else {
      elemBasketCount.style.opacity = '0';
    }
  }
}

const showWarningMessage = () => {
    alert('Извините все слоты заняты')
}

const addToCart = () => {
  Array.from(cards).forEach(card => {
    card.addEventListener('click', () => {
      if (!card.classList.contains('card-active')) {
        if (basketCount < 20) {
          card.classList.add('card-active');
          basketCount++;
          // basketArray.push(card)
        } else {
          showWarningMessage();
        }
      } else {
        card.classList.remove('card-active');
        basketCount--;
      }
      changeBasketCount();
      setLocalStorage()
    })
  });
}

addToCart();

const setLocalStorage = () => {
  localStorage.setItem('cart', String(basketCount));
}
setLocalStorage()

const getLocalStorage = () => {
  localStorage.getItem(String(basketCount));
}
window.addEventListener('DOMContentLoaded', getLocalStorage);


