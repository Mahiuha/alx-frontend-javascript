import getResponseFromAPI from './0-promise';

const response = getResponseFromAPI();
console.log(response instanceof Promise);
