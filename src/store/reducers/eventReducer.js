import {CREATE_EVENT, UPDATE_EVENT, DELETE_EVENT} from '../actions/actionEvents';
import {events} from "../../assets/faceData";
import uuid from 'react-native-uuid';

const initialState = {
    event: events
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_EVENT: {
            const data = {
                id: uuid.v4(),
                ...action.payload
            }
            return ({
                event:
                    [
                        ...state.event,
                        data,
                    ]
            })
        }

        case UPDATE_EVENT: {
            return {}
        }
        case DELETE_EVENT: {
            return {}
        }
        default: {
            return state;
        }
    }
}
