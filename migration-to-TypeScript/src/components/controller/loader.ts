import { ResponseObj, Errors, LoadClass, Callback, Options, responseStatus, URLOpt } from '../../types/index';

class Loader implements LoadClass {
  baseLink: string;
  options?: Options;
  constructor(baseLink: string, options?: Options) {
    this.baseLink = baseLink;
    this.options = options;
  }

  getResp(
    { endpoint, options = {} }: { endpoint: string; options?: Options },
    callback = () => {
      console.error('No callback for GET response');
    }
  ) {
    this.loadSourcesNews('GET', endpoint, callback, options);
  }

  errorHandler<T extends Response>(res: T) {
    if (!res.ok) {
      if (res.status === responseStatus) console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
      throw Error(res.statusText);
    }

    return res;
  }

  makeUrl(options: Options, endpoint: string): string {
    const urlOptions: URLOpt = { ...this.options, ...options };
    let url = `${this.baseLink}${endpoint}?`;

    Object.keys(urlOptions).forEach((key) => {
      url += `${key}=${urlOptions[key]}&`;
    });

    return url.slice(0, -1);
  }

  async loadSourcesNews(method: 'GET', endpoint: string, callback: Callback<ResponseObj>, options: Options) {
    await fetch(this.makeUrl(options, endpoint), { method })
      .then(this.errorHandler)
      .then((res) => res.json())
      .then((data: ResponseObj) => callback(data))
      .catch((err: Errors) => console.error(err));
  }
}

export default Loader;
