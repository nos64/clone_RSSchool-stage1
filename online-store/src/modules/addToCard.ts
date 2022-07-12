const cards: HTMLCollectionOf<Element> = document.getElementsByClassName('card');
const elemBasketCount: HTMLElement | null = document.querySelector('.header_basket-count');
let basketCount = 0;

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

const addToCart = () => {
  Array.from(cards).forEach(card => {
    card.addEventListener('click', () => {
      if (!card.classList.contains('card-active')) {
        card.classList.add('card-active');
        basketCount++;
      } else {
        card.classList.remove('card-active');
        basketCount--;
      }
      changeBasketCount();
    })
  });
}

addToCart();