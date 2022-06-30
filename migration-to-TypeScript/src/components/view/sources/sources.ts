import './sources.css';
import { Source } from '../../../types/index';

class Sources {
    draw(data: Source[]) {
        const fragment: DocumentFragment = document.createDocumentFragment();
        const sourceItemTemp: HTMLTemplateElement | null = document.querySelector('#sourceItemTemp');

        data.forEach((item): void => {
            if (sourceItemTemp) {
                const sourceClone = sourceItemTemp.content.cloneNode(true) as DocumentFragment;

                (sourceClone.querySelector('.source__item-name') as HTMLElement).textContent = item.name;
                (sourceClone.querySelector('.source__item') as HTMLElement).setAttribute('data-source-id', item.id);

                fragment.append(sourceClone);
            } else throw new Error('Source is not found');
        });

        (document.querySelector('.sources') as HTMLElement).append(fragment);
    }
}

export default Sources;
