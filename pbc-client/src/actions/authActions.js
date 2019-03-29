import fetch from 'isomorphic-fetch';
import { API_URL } from './apiUrl';
import * as types from './actionTypes';

const authRequest = () => {
  return {
    type: types.AUTHENTICATION_REQUEST
  }
}

const authSuccess = (user, token) => {
  return {
    type: types.AUTHENTICATION_SUCCESS,
    user: user,
    token: token
  }
}

const authFailure = (errors) => {
  return {
    type: types.AUTHENTICATION_FAILURE,
    errors: errors
  }
}

export const signup = (user) => {
  const newUser = user
  return dispatch => {
    return fetch(`${API_URL}/signup`, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify( user )
    })
    .then(response => response.json())
    .then(resp => {
      dispatch(authenticate({
        username: newUser.username,
        email: newUser.email,
        password: newUser.password})
      );
    })
    .catch((errors) => {
      dispatch(authFailure(errors))
    })
  };
}

export const authenticate = (credentials) => {
  console.log("calling function")
  return dispatch => {
    dispatch(authRequest())
    return fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify( credentials )
    })
    .then(response => response.json())
    .then(({ auth_token }) => {
      if (!auth_token) return false
      localStorage.setItem('auth_token', auth_token);
      return getUser(credentials)
    })
    .then((user) => {
      if (user === false) return false
        dispatch(authSuccess(user, localStorage.auth_token))
    })
    .catch((errors) => {
      dispatch(authFailure(errors))
      localStorage.clear()
    })
  }
}

export const getUser = (credentials) => {
  const request = new Request(`${API_URL}/find_user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${localStorage.auth_token}`,
    },
    body: JSON.stringify(credentials)
  })
  console.log(`This is your user ${credentials.username}, ${credentials.email}`)
  return fetch(request)
    .then(response => response.json())
    .then(user => { return user })
    .catch(error => {
      return error;
    }
  );
}

export const logout = () => {
  return dispatch => {
    localStorage.clear();
    return dispatch({
      type: types.LOGOUT
    })
  }
}

export const checkToken = (token) => {
  console.log("calling function")
  return dispatch => {
    dispatch(authRequest())
    return fetch(`${API_URL}/auth/check_token`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
    })
    .then(response => response.json())
    .then(({ email }) => {
      if (!email) return false
      return getUser({email})
    })
    .then((user) => {
      if (user === false) return false
        dispatch(authSuccess(user, localStorage.auth_token))
    })
    .catch((errors) => {
      dispatch(authFailure(errors))
      localStorage.clear()
    })
  }
}
