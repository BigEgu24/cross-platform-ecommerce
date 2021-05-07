export const UTILS_ACTIONS = {
    SET_SPLASH: 'SET_SPLASH',
    SET_LANG: 'SET_LANG',
    SET_COUNTRY: 'SET_COUNTRY'
}
  
export const utilsState = {
    splash: true,
    language: 'en'
}
  
export const utilsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_SPLASH':
            return {splash: action.payload}
        case 'SET_LANG':
            return {language: action.payload}
        case 'SET_COUNTRY':
            return {language: action.payload}
        default:
            return state;
    }
}