import ACTIONS from '../constants';

export default function courseReducer(state = [], action){
    switch(action.type){
        case ACTIONS.CREATE_COURSE:
            console.log("CourseReducer: saving course "+ JSON.stringify(action.course));
            console.log("Courses STATE: "+JSON.stringify([...state, Object.assign({}, action.course)]));

            return [...state, Object.assign({}, action.course)];
        default:
            return state;
    }
}