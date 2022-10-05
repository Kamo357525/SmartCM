export const GET_USER='GET_USER';
export const GET_USER_CANCEL='GET_USER_CANCEL';
export const GET_USER_SUCCESS='GET_USER_SUCCESS';
export const GET_USER_FAIL='GET_USER_FAIL';
export const CLEAR_ERROR='CLEAR_ERROR';


export function getUser(data){
  return {
    type:GET_USER,
    payload:data,
  }
}

export function getUserSuccess(data){
  return {
    type:GET_USER_SUCCESS,
    payload:data,
  }
}

export function logAut(){
  return {
    type:GET_USER_FAIL,
  }
}

export function clearError(){
  return {
    type:CLEAR_ERROR,
  }
}

