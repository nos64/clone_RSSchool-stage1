import './news.css';
import { Article } from '../../../types/response';

class News {
  draw(data: Array<Article>) {
    const news = data.length >= 10 ? data.filter((_item, idx: number) => idx < 10) : data;

    const fragment: DocumentFragment = document.createDocumentFragment();
    const newsItemTemp: HTMLTemplateElement | null = document.querySelector('#newsItemTemp');

    news.forEach((item, idx): void => {
      if (newsItemTemp) {
        const newsClone = <HTMLElement>newsItemTemp.content.cloneNode(true);

        if (newsClone !== null) {
          if (idx % 2) {
            const newsItem: HTMLElement | null = newsClone.querySelector('.news__item');
            newsItem?.classList.add('alt');
          }
          const newsMetaPhoto: HTMLElement | null = newsClone.querySelector('.news__meta-photo');
          if (newsMetaPhoto) {
            newsMetaPhoto.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'}) `;
          }
          const newsMetaAuthor: HTMLElement | null = newsClone.querySelector('.news__meta-author');
          if (newsMetaAuthor) {
            newsMetaAuthor.textContent = item.author || item.source.name;
          }
          const newsMetaDate: HTMLElement | null = newsClone.querySelector('.news__meta-date');
          if (newsMetaDate) {
            newsMetaDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');
          }
          const newsDescriptionTitle: HTMLElement | null = newsClone.querySelector('.news__description-title');
          if (newsDescriptionTitle) newsDescriptionTitle.textContent = item.title;
          const newsDescriptionSource: HTMLElement | null = newsClone.querySelector('.news__description-source');
          if (newsDescriptionSource) newsDescriptionSource.textContent = item.source.name;
          const newsDescriptionContent: HTMLElement | null = newsClone.querySelector('.news__description-content');
          if (newsDescriptionContent) newsDescriptionContent.textContent = item.description;
          const newsDescriptionReadMore: HTMLElement | null = newsClone.querySelector('.news__read-more a');
          if (newsDescriptionReadMore) {
            newsDescriptionReadMore.setAttribute('href', item.url);
            newsDescriptionReadMore.setAttribute('target', '_blank');
          }

          fragment.append(newsClone);
        }
      } else throw new Error('News is not found');
    });

    const newsNode: HTMLDivElement | null = document.querySelector('.news');
    if (newsNode !== null) {
      newsNode.innerHTML = '';
      newsNode.appendChild(fragment);
    }
  }
}

export default News;
