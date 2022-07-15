
const colorsBtn: NodeListOf<HTMLButtonElement>= document.querySelectorAll('.button-color');

const addClickColorBtn = () => {
  colorsBtn.forEach(btn => {
    btn.addEventListener('click', () => {
      if(btn.classList.contains('button-white')) {
        btn.classList.toggle('button-color-active-negative');
      }
      btn.classList.toggle('button-color-active');
    })
  });
}

addClickColorBtn()

