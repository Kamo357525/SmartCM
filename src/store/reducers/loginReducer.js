import { GET_USER, GET_USER_SUCCESS, CLEAR_ERROR, GET_USER_FAIL } from '../actions/actionLogin';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  load: false,
  data: {},
  error: [],
  token: '',
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER: {
      return {
        load: true,
        data: {},
        error: [],
        token: '',
      };
    }

    case GET_USER_SUCCESS: {
        return {
          load: false,
          name: action.payload.name,
          error: [],
          token: action.payload.auth_key,
        };
      }

    case CLEAR_ERROR: {
      return {
        ...state,
        error:[],
      };
    }

    case GET_USER_FAIL: {
      return {
        load: false,
        data: {},
        error: action,
        token: '',
      };
    }
    default: {
      return state;
    }
  }
}
