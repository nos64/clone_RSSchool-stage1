export const createHTMLElement = (
  tag: string,
  className1?: string,
  className2?: string,
  className3?: string,
) => {
  const element: HTMLElement = document.createElement(tag);
  if (className1) {
    element.classList.add(className1);
  }
  if (className2) {
    element.classList.add(className2);
  }
  if (className3) {
    element.classList.add(className3);
  }
  return element;
};
