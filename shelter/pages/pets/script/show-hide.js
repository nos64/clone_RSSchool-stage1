export const showElem = (elem, param) => {
  let opacity = 0;
  elem.opacity = opacity;
  elem.style.display = '';

  const animation = () => {
    opacity += param;
    elem.style.opacity = opacity;
    if (opacity < 1) requestAnimationFrame(animation);
  }
  requestAnimationFrame(animation);
};

export const hideElem = (elem, param) => {
  let opacity = getComputedStyle(elem).getPropertyValue('opacity');
  const animation = () => {
    opacity -= param;
    elem.style.opacity = opacity;
    if (opacity > 0) requestAnimationFrame(animation);
    else {
      elem.style.display = 'none';
      opacity = 0;
    } 
  }
  requestAnimationFrame(animation);
};