const colorsBtn: HTMLCollectionOf<Element> = document.getElementsByClassName('button-color');

const addClickColorBtn = () => {
  Array.from(colorsBtn).forEach(btn => {
    btn.addEventListener('click', () => {
      if(btn.classList.contains('button-white')) {
        btn.classList.toggle('button-color-active-negative');
      }
      btn.classList.toggle('button-color-active');
      // if (!card.classList.contains('card-active')) {
      //   if (basketCount < 20) {
      //     card.classList.add('card-active');
      //     basketCount++;
      //     // basketArray.push(card)
      //   } else {
      //     showWarningMessage();
      //   }
      // } else {
      //   card.classList.remove('card-active');
      //   basketCount--;
      // }
      // changeBasketCount();
      // setLocalStorage()
    })
  });
}

addClickColorBtn()