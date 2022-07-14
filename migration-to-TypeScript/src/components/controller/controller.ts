import AppLoader from './appLoader';
import { ResponseSourse, HeadlinesNews } from '../../types/response';
import { Callback } from '../../types/utilityTypes';

class AppController extends AppLoader {
  getSources(callback: Callback<ResponseSourse>): void {
    super.getResp(
      {
        endpoint: 'sources',
      },
      callback
    );
  }

  getNews(e: MouseEvent, callback: Callback<HeadlinesNews>) {
    let target = e.target;
    const newsContainer = e.currentTarget;

    while (target !== newsContainer && target instanceof HTMLElement && newsContainer instanceof HTMLElement) {
      if (target.classList) {
        if (target.classList.contains('source__item')) {
          const sourceId = target.getAttribute('data-source-id');
          if (newsContainer?.getAttribute('data-source') !== sourceId) {
            if (sourceId) {
              newsContainer?.setAttribute('data-source', sourceId);
              super.getResp(
                {
                  endpoint: 'everything',
                  options: {
                    sources: sourceId,
                  },
                },
                callback
              );
            }
          }
          return;
        }
        if (target.parentNode) {
          target = target?.parentNode;
        }
      }
    }
  }
}

export default AppController;
