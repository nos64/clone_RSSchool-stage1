import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            // apiKey: '6831fdc5786042f5aed5874e2cea018c',
        });
    }
}

export default AppLoader;
