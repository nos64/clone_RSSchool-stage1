let leftButton = document.querySelector('.stick-left');
let rightButton = document.querySelector('.stick-right');

let carousel = document.querySelector('.carousel');
let itemLeft = document.querySelector('.item-left');
let itemActive = document.querySelector('.item-active');
let itemRight = document.querySelector('.item-right');

// Создание массива объектов
let item1 = document.querySelector('.item-1');
let item2 = document.querySelector('.item-2');
let item3 = document.querySelector('.item-3');
let item4 = document.querySelector('.item-4');
let item5 = document.querySelector('.item-5');
let item6 = document.querySelector('.item-6');
let item7 = document.querySelector('.item-7');
let item8 = document.querySelector('.item-8');

let arr = [item1, item2, item3, item4, item5, item6, item7, item8];
let state = [item4, item5, item6];

//Рандом
function getRandom() {
  let newArr = [];
  while (newArr.length < 3) {
    let item = arr[Math.floor(Math.random() * arr.length)];
    if (!state.includes(item) && !newArr.includes(item)) {
      newArr.push(item)
    }
  }
  state = newArr
}

//Заполнение карточек
function getCardsLeft() {
  itemLeft.append(state[0])
  itemLeft.append(state[1])
  itemLeft.append(state[2])
}
function getCardsRight() {
  itemRight.append(state[0])
  itemRight.append(state[1])
  itemRight.append(state[2])
}


// Левая кнопка
function moveLeft() {
  carousel.classList.add('transition-left');
  leftButton.removeEventListener("click", moveLeft);
  rightButton.removeEventListener("click", moveRight);
  itemLeft.innerHTML = ""
  getRandom()
  getCardsLeft()
}

// Правая кнопка
function moveRight() {
  carousel.classList.add('transition-right');
  leftButton.removeEventListener("click", moveLeft);
  rightButton.removeEventListener("click", moveRight);
  itemRight.innerHTML = ""
  getRandom()
  getCardsRight()
}

// Смена блоков с картинками не случайная
carousel.addEventListener("animationend", function(animationEvent) {
  leftButton.addEventListener("click", moveLeft);
  rightButton.addEventListener("click", moveRight);

  if (animationEvent.animationName === "move-left") {
    let itemLeftBACKUP = itemRight.innerHTML;
    let itemRightBACKUP = itemActive.innerHTML;

    document.querySelector(".item-active").innerHTML = itemLeft.innerHTML;
    document.querySelector(".item-left").innerHTML = itemRightBACKUP;

    carousel.classList.remove("transition-left");
  } else {
    let itemRightBACKUP = itemLeft.innerHTML;
    let itemLeftBACKUP = itemActive.innerHTML;

    document.querySelector(".item-active").innerHTML = itemRight.innerHTML;
    document.querySelector(".item-left").innerHTML = itemLeftBACKUP;

    carousel.classList.remove("transition-right");
  }
});


leftButton.addEventListener("click", moveLeft);
rightButton.addEventListener("click", moveRight);
