/**
 * @jest-environment jsdom
 */

// Core
import { createStore, combineReducers } from 'redux';
import { persistStore,  persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


// Reducers
import { peopleReducer as people } from '../../bus/people/reducer';
import { studentReducer as student } from '../../bus/student/reducer';
import { filmsReducer as films } from '../../bus/films/reducer';

// Instruments
import { store } from './index';

export const referencePersistedReducer = persistReducer(
    {
        key:       process.env.APP_NAME || 'AwesomeApp',
        storage,
        whitelist: [ 'todos' ],
    },
    combineReducers({ people, student, films }),
);

const referenceStore = createStore(referencePersistedReducer);

const referencePersistor = persistStore(referenceStore);

describe('redux store', () => {
    test('should have a valid state shape', () => {
        expect(store.getState()).toEqual(referencePersistor.getState());
    });
});
