export const AUTH_ACTIONS = {
  SET_AUTH: 'SET_AUTH'
};
export const authState = {
  auth: {
    fname: '',
    lname: '',
    email: '',
    address_one: '',
    address_two: ''
  }
};
export const authReducer = (state, action) => {
  switch (action.type) {
    case 'SET_AUTH':
      return {
        auth: action.payload
      };

    default:
      return state;
  }
};