export const disableScroll = () => {

  // const scrollY = document.body.style.top;
  const widthScroll = window.innerWidth - document.body.offsetWidth;
  document.body.scrollPosition = window.scrollY;
  document.documentElement.style.cssText = `
  position: relstive;
  height: 100vh;
  `;

  document.body.style.cssText = `
overflow: hidden;
position: fixed;
left: 0;
width: 100vw;
padding-right: ${widthScroll}px;
`;
};
//top:-${window.scrollY}px;



export const enableScroll = () => {
  
  document.documentElement.style.cssText = ``;
  document.body.style.cssText = `position: relative`;
  window.scroll({ top: document.body.scrollPosition });
};