import * as helper from './Helper';
import * as apiConfig from './Config';

export const getBooks = async (name) => {
  const endPoint =
    apiConfig.GET_BOOKS_BY_NAME_ENDPOINT + name + apiConfig.KEY_HEADER;
  return await helper.getData(apiConfig.GOOGLE_BOOKS_URL, endPoint);
};

export const getAllEbooks = async (name) => {
  name = !(name === undefined || name.length === 0) ? name : 'free ebooks';
  console.log('Fetching book list >>>>>>>>>>>> ');
  console.log(name);
  const endpoint = apiConfig.ALL_EBOOKS_ENDPOINT + name + apiConfig.KEY_HEADER;
  return await helper.getData(apiConfig.GOOGLE_BOOKS_URL, endpoint);
};

export const getFreeEBooks = async () => {
  const endpoint = apiConfig.FREE_BOOKS_ENPOINT + apiConfig.KEY_HEADER;
  return await helper.getData(apiConfig.GOOGLE_BOOKS_URL, endpoint);
};
