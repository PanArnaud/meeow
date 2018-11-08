const baseUrl: string = 'http://placekitten.com';

let meeow = {};

export default (meeow = {
  getUrl: (width: number, height: number, grayscale?: boolean): string => {
    let url: string = baseUrl;

    if (grayscale) {
      url = `${url}/g`;
    }

    return `${url}/${width}/${height}`;
  },
});
