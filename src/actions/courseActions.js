import ACTIONS from '../constants';

export function createCourse(course) {
    console.log("returning the action CREATE COURSE");
    return {type:ACTIONS.CREATE_COURSE, course};
}
