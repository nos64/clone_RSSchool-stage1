import AppController from '../controller/controller';
import { AppView } from '../view/appView';
class App {
  public controller: AppController;
  public view: AppView;
  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
  }

  start(): void {
    const sourceElem: HTMLElement | null = document.querySelector('.sources');
    if (sourceElem) {
      sourceElem.addEventListener('click', (e: MouseEvent) => {
        this.controller.getNews(e, (data) => {
          if (data) {
            this.view.drawNews(data);
            sourceElem.classList.add('sourses-open');
          }
        });
      });
    }

    this.controller.getSources((data) => {
      if (data) {
        this.view.drawSources(data);
      }
    });
  }
}

export default App;
