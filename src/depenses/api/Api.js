import axios from 'axios';
import { store } from '../../store/store';


const api = axios.create({
  baseURL: 'https://manage-company.app',
  headers:{
    'Content-Type':'application/json',
    // 'auth_key':store.getState().loginReducer.token
  }
})

export default class Api {
  static userLogin(data) {
    return api.post('api/site/login/', data,{
    })
  }
  static getEvent(start, end){
    const token=store.getState().loginReducer.token
    console.log(token,999999999999)
       return api.get(`/api/event/list?my_events=0&start=2022-05-01&end=2022-05-31`,         {
         headers:{
           // 'auth_key': `${token}`
         }

        })
  }
}
// export const fetchPollsList = createLogic({
//   type: LIST_EVENT_REQUEST,
//   latest: true,
//   process({ getState, action }, dispatch, done) {
//     const token=action.payload.auth_key
//     axios
//       .get('https://manage-company.app/api/event/list?my_events=0&start=2022-05-01&end=2022-05-31',{headers:{
//           'auth_key': `${token}`
//         }})
//       .then((polls) => {
//         dispatch({ type:LIST_EVENT_SUCCESS, payload: polls.data.data })
//       })
//       .catch((err) => {
//         console.log(err);
//         dispatch({ type: LIST_EVENT_FAIL, payload: err, error: true });
//       })
//       .then(() => done());
//   }
// });
