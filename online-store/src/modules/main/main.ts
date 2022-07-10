const main: HTMLElement = document.createElement('main');

export const container = document.createElement('div');
container.classList.add('container', 'main-container');

main.append(container);
document.body.append(main);

