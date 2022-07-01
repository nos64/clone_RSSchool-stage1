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
        const sourceElem = <HTMLElement>document.querySelector('.sources');
        sourceElem.addEventListener('click', (e) =>
            this.controller.getNews(e, (data) => {
                if (data !== undefined) {
                    this.view.drawNews(data);
                }
            })
        );
        this.controller.getSources((data) => {
            if (data !== undefined) {
                this.view.drawSources(data);
            }
        });
    }
}

export default App;
