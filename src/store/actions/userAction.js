import { REGISTER, LOGIN, LOGIN_ERROR,REGISTER_ERROR} from '../../constants/actionTypes';

import * as api from '../../API/index';

export const registerUser = (userData) => async (dispatch) => {
  try {
    const { data } = await api.registerUser (userData);
    dispatch({ type: REGISTER, payload: {
        token:data.token,
        error:false
    } });
  } catch (error) {
    dispatch({ type: REGISTER_ERROR, payload: {error:true,message:error.message }});
  }
};
export const loginUser = (userData) => async (dispatch) => {
    try {
      const { data } = await api.loginUser (userData);
  
      dispatch({ type: LOGIN, payload:   {
        token:data.token,
        error:false
    }});
    } catch (error) {
    
        dispatch({ type: LOGIN_ERROR, payload: {error:true,message:error.message }});
      
    }
  };