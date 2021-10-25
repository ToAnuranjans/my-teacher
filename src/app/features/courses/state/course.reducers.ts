import { createReducer, on } from '@ngrx/store';
import { State } from '../../../state/app.state';
import { Course } from './course.model';
import * as CourseAction from './course.actions';


export interface CourseState extends State {
    courses: ReadonlyArray<Course>;
    currentCourseId: number | null;
    currentCourse: Readonly<Course>;
    fetching: boolean;
}

const initialState: CourseState = {
    courses: null,
    currentCourseId: 0,
    currentCourse: null,
    fetching: false
};


export const courseReducers = createReducer(
    initialState,
    on(CourseAction.courseLoadedSuccess, (state, { courses }): CourseState => ({
        ...state,
        fetching: false,
        courses
    })),
    on(CourseAction.loadCourses, (state): CourseState => ({ ...state, fetching: true })),
    on(CourseAction.selectACourse, (state, { id }): CourseState => ({ ...state, currentCourseId: id })),
);


