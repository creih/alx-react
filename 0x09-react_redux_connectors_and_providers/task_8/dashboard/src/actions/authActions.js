import { LOGIN_SUCCESS, LOGIN_FAILURE } from './actionTypes';

export const loginRequest = (credentials) => {
  return async (dispatch) => {
    try {
      const response = await fetch('/api/login', { 
        method: 'POST', 
        body: JSON.stringify(credentials),
        headers: { 'Content-Type': 'application/json' }
      });
      
      if (response.ok) {
        const data = await response.json();
        dispatch({ type: LOGIN_SUCCESS, payload: data });
      } else {
        dispatch({ type: LOGIN_FAILURE });
      }
    } catch (error) {
      dispatch({ type: LOGIN_FAILURE });
    }
  };
};

export const logout = () => {
  return {
    type: 'LOGOUT'
  };
};
