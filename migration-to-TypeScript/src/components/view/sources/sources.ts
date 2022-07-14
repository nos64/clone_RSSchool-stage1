import './sources.css';
import { Source } from '../../../types/response';

class Sources {
  draw(data: Array<Source>) {
    const fragment: DocumentFragment = document.createDocumentFragment();
    const sourceItemTemp: HTMLTemplateElement | null = document.querySelector('#sourceItemTemp');

    data.forEach((item): void => {
      if (sourceItemTemp) {
        const sourceClone = <HTMLElement>sourceItemTemp.content.cloneNode(true);

        const sourceItemName: HTMLElement | null = sourceClone.querySelector('.source__item-name');
        if (sourceItemName) sourceItemName.textContent = item.name;

        const souceItem: HTMLElement | null = sourceClone.querySelector('.source__item');
        if (souceItem) souceItem.setAttribute('data-source-id', item.id);

        fragment.append(sourceClone);
      } else throw new Error('Source is not found');
    });

    const sources: Element | null = document.querySelector('.sources');
    if (sources) sources.append(fragment);
  }
}

export default Sources;
