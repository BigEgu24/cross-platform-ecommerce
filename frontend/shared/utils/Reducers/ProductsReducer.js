export const PRODUCTS_ACTIONS = {
  SET_PRODUCTS: 'SET_PRODUCTS',
  SEARCH_PROD: 'SEARCH_PROD'
};
export const productsState = {
  products: [],
  search: []
};
export const productsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return {
        products: action.payload
      };

    case 'SEARCH_PROD':
      return {
        search: action.payload
      };

    default:
      return state;
  }
};