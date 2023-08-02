// const UrlParser = {
//   parseActiveUrlWithCombiner() {
//     const url = window.location.hash.slice(1).toLowerCase();
//     const splitedUrl = this._urlSplitter(url);
//     return this._urlCombiner(splitedUrl);
//   },

//   parseActiveUrlWithoutCombiner() {
//     const url = window.location.hash.slice(1).toLowerCase();
//     return this._urlSplitter(url);
//   },

//   _urlSplitter(url) {
//     const urlsSplits = url.split('/');
//     return {
//       resource: urlsSplits[1] || null,
//       id: urlsSplits[2] || null,
//       verb: urlsSplits[3] || null,
//     };
//   },

//   _urlCombiner(splitedUrl) {
//     return (splitedUrl.resource ? `/${splitedUrl.resource}` : '/') +
//     (splitedUrl.id ? '/:id' : '') +
//     (splitedUrl.verb ? `/${splitedUrl.verb}` : '');
//   },
// };

// export default UrlParser;


const urlParser = {
  withCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();
    const splitedUrl = this._spliter(url);
    return this._combiner(splitedUrl);
  },

  withoutCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();
    return this._spliter(url);
  },

  _spliter(url) {
    const urlsSplits = url.split('/');
    return {
      resource: urlsSplits[1] || null,
      id: urlsSplits[2] || null,
      verb: urlsSplits[3] || null,
    };
  },

  _combiner(splitedUrl) {
    // eslint-disable-next-line max-len
    const splited = (splitedUrl.resource ? `/${splitedUrl.resource}` : '/') + (splitedUrl.id ? '/:id' : '') + (splitedUrl.verb ? `/${splitedUrl.verb}` : '');
    return splited;
  },
};

export default urlParser;
