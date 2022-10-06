import {REGISTER, LOGIN,LOGIN_ERROR,REGISTER_ERROR} from '../../constants/actionTypes'
// eslint-disable-next-line import/no-anonymous-default-export
export default (user = [], action) => {
    switch (action.type) {
      case REGISTER:
        return [...user,action.payload];
      case LOGIN:
        return [...user,action.payload];
        case  LOGIN_ERROR:
        return [...user,action.payload];
        case  REGISTER_ERROR:
        return [...user,action.payload];
         
     
      default:
        return user;
    }
};