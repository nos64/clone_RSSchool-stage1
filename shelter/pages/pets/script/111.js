// Создание переменной куда мы всё будем закидывать
let activePage = document.querySelector('.pets__list');
// Узнать ширину экрана
let pageWidth =  activePage.clientWidth;
// Создание массива объектов
let item1 = document.querySelector('.item-1');
let item2 = document.querySelector('.item-2');
let item3 = document.querySelector('.item-3');
let item4 = document.querySelector('.item-4');
let item5 = document.querySelector('.item-5');
let item6 = document.querySelector('.item-6');
let item7 = document.querySelector('.item-7');
let item8 = document.querySelector('.item-8');

let source = [item1, item2, item3, item4, item5, item6, item7, item8];

//Функция генерации случайного массива длиной 48, состоящего из 8 уникальных элементов
function generateArray(source) {
  function shuffleArray(array) {
    array.sort(() => Math.random() - 0.5);
  }

  let elements = source.slice();

  let result = [];
  for (let i = 1; i <= 6; i++) {
    shuffleArray(elements);
    result.push(...elements.slice()); //Из 6 маленьких массивов по 8 элементов делаем один большой 48 элементов
  }
  return result;
}

let array48 = generateArray(source); // Наш массив из 48 элементов

let pagination = {
  state: array48,
  pageSize: countCard(pageWidth), // Количество элементов на странице
  currentPage: 1,
  maxPage: Math.floor(array48.length / countCard(pageWidth)) // Считаем количество страниц
};


function getContent() { 
  let from = (pagination.currentPage - 1) * pagination.pageSize; // С какого индекса начинается отрисовка
  let to = from + pagination.pageSize; // По какой индекс отрисовывать

  return pagination.state.slice(from, to); //ВОзвращаем 
}

//Инициализация кнопок
let currentPage = document.querySelector('.stick-current');
let firstPage = document.querySelector('.stick-double-left');
let lastPage = document.querySelector('.stick-double-right');
let previousPage = document.querySelector('.stick-one-left');
let nextPage = document.querySelector('.stick-one-right');

//Функция для получения числа страничек
function countPage(width) {
  if (width === 1200) {
    return 6
  }
  else if (width === 708) {
    return 8
  }
  else {
    return 16
  }
}

//Функция для получения количества карточек на страничке
function countCard(width) {
  if (width === 1200) {
    return 8
  }
  else if (width === 708) {
    return 6
  }
  else {
    return 3
  }
}

// Количество страничек в зависимости от ширины
let countPages = countPage(pageWidth)

//Функции разных страничек
function STATEfirstPage() {
  pagination.currentPage = 1;
}

function STATElastPage() {
  pagination.currentPage = pagination.maxPage;
}

function STATEhasNextPage() {
  return pagination.currentPage !== pagination.maxPage;
}

function STATEnextPage() {
  if (STATEhasNextPage()) {
    pagination.currentPage += 1;
  } else {
    throw new Error(`Next page is not allowed at ${pagination.currentPage}`);
  }
}

function STATEhasPreviousPage() {
  return pagination.currentPage !== 1;
}

function STATEpreviousPage() {
  if (STATEhasPreviousPage()) {
    pagination.currentPage -= 1;
  } else {
    throw new Error(
      `Previous page is not allowed at ${pagination.currentPage}`
    );
  }
}

//Первая страничка
function setFirstPage() {
  STATEfirstPage()
  currentPage.textContent = '1';
  firstPage.classList.add('stick-off');
  previousPage.classList.add('stick-off');
  lastPage.classList.add('stick-on');
  nextPage.classList.add('stick-on');

  firstPage.classList.remove('stick-on');
  previousPage.classList.remove('stick-on');
  lastPage.classList.remove('stick-off');
  nextPage.classList.remove('stick-off');
}

//Последняя страничка страничка
function setLastPage() {
  STATElastPage()
  currentPage.textContent = countPages;
  firstPage.classList.add('stick-on');
  previousPage.classList.add('stick-on');
  lastPage.classList.add('stick-off');
  nextPage.classList.add('stick-off');

  firstPage.classList.remove('stick-off');
  previousPage.classList.remove('stick-off');
  lastPage.classList.remove('stick-on');
  nextPage.classList.remove('stick-on');
}

//Страничка вперед
function setNextPage() {
  STATEhasNextPage()
  STATEnextPage()
  if (Number(currentPage.textContent) === countPages) {
    setLastPage()
  }
  else {
    firstPage.classList.remove('stick-off');
    previousPage.classList.remove('stick-off');
    lastPage.classList.remove('stick-off');
    nextPage.classList.remove('stick-off');
    firstPage.classList.add('stick-on');
    previousPage.classList.add('stick-on');
    lastPage.classList.add('stick-on');
    nextPage.classList.add('stick-on');

    let current = Number(currentPage.textContent);
    current++
    currentPage.textContent = current;
    if (Number(currentPage.textContent) === countPages) {
      setLastPage()
    }
  }
}

//Страничка назад
function setPreviousPage() {
  STATEhasPreviousPage()
  STATEpreviousPage()
  if (currentPage.textContent === '1') {
    setLastPage()
  }
  else {
    firstPage.classList.remove('stick-off');
    previousPage.classList.remove('stick-off');
    lastPage.classList.remove('stick-off');
    nextPage.classList.remove('stick-off');
    firstPage.classList.add('stick-on');
    previousPage.classList.add('stick-on');
    lastPage.classList.add('stick-on');
    nextPage.classList.add('stick-on');

    let current = Number(currentPage.textContent);
    current--
    currentPage.textContent = current;
    if (currentPage.textContent === '1') {
      setFirstPage()
    }
  }
}

//Активность кнопочек на первой страничке
firstPage.addEventListener("click", function(e) {
  setFirstPage();
  render()
});

//Активность кнопочек на последней страничке
lastPage.addEventListener("click", function(e) {
  setLastPage()
  render()
});

//Активность кнопочек на следующей странице
nextPage.addEventListener("click", function(e) {
  setNextPage()
  render()
});

//Активность кнопочек на предыдущей
previousPage.addEventListener("click", function(e) {
  setPreviousPage()
  render()
});


// Отрисовка страничек
function render() {
  activePage.innerHTML = ''

  for (let card of getContent()) {
    activePage.append(card.cloneNode(true))
  }
}

// JSON И ДАННЫЕ

document.addEventListener('DOMContentLoaded', async () => {
  render()
});