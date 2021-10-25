import { createAction, props } from '@ngrx/store';
import { Course } from './course.model';


export const loadCourses = createAction(
    '[Course] Load Courses'
);

export const courseLoadedSuccess = createAction(
    '[Course] loaded successfully',
    props<{ courses: Course[] }>()
);

export const errorLoadingCourses = createAction(
    '[Course] Fetching courses failed',
    props<{ error: string }>()
);

export const selectACourse = createAction(
    '[Course] Selected a course',
    props<{ id: number }>()
);


export const deleteACourse = createAction(
    '[Course] Delete a course',
    props<{ id: number }>()
);

export const courseDeleted = createAction(
    '[Course] Deleted a course'
);


export const updateACourse = createAction(
    '[Course] Updated a course',
    props<{ id: number; course: Course }>()
);
