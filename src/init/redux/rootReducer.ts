// Core
import { combineReducers } from 'redux';

// Reducers
import { togglersReducer as togglers } from '../../bus/client';
import { todosReducer as todos } from '../../bus/todos/reducer';
import { studentReducer as student } from '../../bus/student/reducer';
// import { peopleReducer as people } from '../../bus/people/reducer';

export const rootReducer = combineReducers({
    togglers,
    todos,
    student,
});

export type AppState = ReturnType<typeof rootReducer>;
