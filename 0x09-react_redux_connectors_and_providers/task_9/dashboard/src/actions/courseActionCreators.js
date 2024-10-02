import { setCourses } from './courseActionCreators';
import { SET_COURSES } from './actionTypes';
import thunk from 'redux-thunk';
import axios from 'axios';

export const fetchCourses = () => {
    return (dispatch) => {
        return axios.get('/dist/courses.json')
            .then(response => {
                dispatch(setCourses(response.data));
            })
            .catch(error => {
                console.error("Error fetching courses:", error);
            });
    };
};

export const setCourses = (data) => ({
    type: SET_COURSES,
    payload: data,
});
