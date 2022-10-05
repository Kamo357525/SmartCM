import { createLogic } from 'redux-logic';
import {GET_USER, GET_USER_CANCEL,GET_USER_SUCCESS, GET_USER_FAIL, } from '../actions/actionLogin'
import Api from '../../depenses/api/Api';

export  const fetchGetLogin = createLogic({

  type: GET_USER,
  cancelType: GET_USER_CANCEL,
  latest: true,


  process({ getState, action }, dispatch, done) {
    Api.userLogin(action.payload).
      then((data) => dispatch({ type: GET_USER_SUCCESS, payload: data.data }))
      .catch((err) => {
        dispatch({ type: GET_USER_FAIL, payload: err, error: true });
      })
      .then(() => done());
  }
});
