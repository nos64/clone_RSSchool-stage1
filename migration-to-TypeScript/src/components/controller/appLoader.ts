import Loader from './loader';

class AppLoader extends Loader {
  constructor() {
    super('https://nodenews.herokuapp.com/', {
      // apiKey: '6831fdc5786042f5aed5874e2cea018c',
      // apiKey: 'fe098bb13b224e6bbeaedb4d76792476',
      apiKey: '98b26295ad584728b3240f2349d8da08',
    });
  }
}

export default AppLoader;
