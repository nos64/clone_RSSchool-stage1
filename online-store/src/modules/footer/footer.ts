import './footer.scss';
import '../../img/rs_school_js.svg';
import '../../img/arrow-top.svg';

const footer: HTMLElement = document.createElement('footer');
footer.className = 'footer';

const container: HTMLDivElement = document.createElement('div');
container.classList.add('container', 'footer__container');

const leftDiv: HTMLDivElement = document.createElement('div');
leftDiv.className = 'footer__left';

const copySpan: HTMLSpanElement = document.createElement('span');
copySpan.className = 'futter__left-text';
copySpan.textContent = '©';

const yearSpan: HTMLSpanElement = document.createElement('span');
copySpan.className = 'futter__left-text';
yearSpan.textContent = '2022';

const gitLink: HTMLAnchorElement = document.createElement('a');
gitLink.classList.add('footer__left-item', 'footer__link');
gitLink.textContent = 'github';
gitLink.href = 'https://github.com/nos64';
gitLink.target = '_blank';

const courseLink: HTMLAnchorElement = document.createElement('a');
courseLink.className = 'footer__link';
courseLink.href = 'https://rs.school/js/';
courseLink.target = '_blank';

const courseSvg = document.createElement('img');
courseSvg.className = 'footer__logo-course';
courseSvg.src = 'img/rs_school_js.svg';

const topLink: HTMLAnchorElement = document.createElement('a');
topLink.className = 'topbutton';
topLink.href = '#';
topLink.title = 'Top';

const topSvg = document.createElement('img');
topSvg.src = 'img/arrow-top.svg';

topLink.append(topSvg);
courseLink.append(courseSvg)
leftDiv.append(copySpan, yearSpan, gitLink);
container.append(leftDiv, courseLink);
footer.append(container);
document.body.append(footer, topLink);