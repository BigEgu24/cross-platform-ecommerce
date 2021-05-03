export const AUTH_ACTIONS = {
    SET_AUTH: 'SET_AUTH'
  }
  
  export const authState = {
    auth: {
        fname: 'Eduardo',
        lname: 'Gutierrez',
        email: 'bigegu24@gmail.com',
        address_one: '201 S Pennsylvania Ave SPC 20',
        address_two: 'San Bernardino, CA 92410'
    }
  }
  
  export const authReducer = (state, action) => {
    switch (action.type) {
        case 'SET_AUTH':
            return {auth: action.payload}
        default:
          return state;
    }
  }