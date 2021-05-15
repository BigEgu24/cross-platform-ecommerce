export const PRODUCTS_ACTIONS = {
  SET_PRODUCTS: 'SET_PRODUCTS',
  SELECTED_PRODUCT: 'SELECTED_PRODUCT',
  SEARCH_PROD: 'SEARCH_PROD'
}

export const productsState = {
  products: [],
  search: [],
  product: {
    id: '',
    title: '',
    price: 0,
    rating: 0
  }
}

export const productsReducer = (state, action) => {
  
  switch (action.type) {
      case 'SET_PRODUCTS':
          return {products: action.payload}
      case 'SELECTED_PRODUCT':
        return {product: action.payload}
      case 'SEARCH_PROD':
        return {search: action.payload}
      default:
        return state;
  }
}