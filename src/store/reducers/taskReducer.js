import {CREATE_TASK, UPDATE_TASK, DELETE_TASK} from '../actions/actionTasks';
import {tasks} from "../../assets/faceData";
import uuid from 'react-native-uuid';

const initialState = {
    task: tasks
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_TASK: {
            const data = {
                id: uuid.v4(),
                ...action.payload
            }
            return ({
                task:
                    [
                        ...state.task,
                        data,
                    ]
            })
        }

        case UPDATE_TASK: {
            const update=state.task.map((item,i)=>{
                if(item.id===action.payload.itemId){
                    return {
                        ...item,
                        ...action.payload.task,
                    }
                }
                    return item
            })
            return {
                task: update

            }
        }
        case DELETE_TASK: {
            const filterData=state.task.filter((item,i)=>item.id!==action.payload)
            return {
                task: filterData
            }
        }
        default: {
            return state;
        }
    }
}
