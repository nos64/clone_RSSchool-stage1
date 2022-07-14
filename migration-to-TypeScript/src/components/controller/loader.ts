import { LoadClass, Callback, Options, responseStatus, URLOpt } from '../../types/utilityTypes';
import { ResponseSourse, Errors } from '../../types/response';
class Loader implements LoadClass {
  baseLink: string;
  options?: Partial<Options>;
  constructor(baseLink: string, options?: Partial<Options>) {
    this.baseLink = baseLink;
    this.options = options;
  }

  getResp(
    { endpoint, options = {} }: { endpoint: string; options?: Partial<Options> },
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

  makeUrl(options: Partial<Options>, endpoint: string): string {
    const urlOptions: URLOpt = { ...this.options, ...options };
    let url = `${this.baseLink}${endpoint}?`;

    Object.keys(urlOptions).forEach((key) => {
      url += `${key}=${urlOptions[key]}&`;
    });

    return url.slice(0, -1);
  }

  async loadSourcesNews(
    method: 'GET',
    endpoint: string,
    callback: Callback<ResponseSourse>,
    options: Partial<Options>
  ) {
    await fetch(this.makeUrl(options, endpoint), { method })
      .then(this.errorHandler)
      .then((res) => res.json())
      .then((data: ResponseSourse) => callback(data))
      .catch((err: Omit<Errors, 'testPartial'>) => console.error(err));
  }
}

export default Loader;
