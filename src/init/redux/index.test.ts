/**
 * @jest-environment jsdom
 */

// Core
import { createStore, combineReducers } from 'redux';
import {  persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


// Reducers
import { peopleReducer as people } from '../../bus/people/reducer';

// Instruments
import { store } from './index';

const persistedReducer = persistReducer(
    {
        key:       process.env.APP_NAME || 'AwesomeApp',
        storage,
        whitelist: [ 'todos' ],
    },
    people,
);

export const referenceRootReducer = combineReducers({
    persistedReducer,
});

const referenceStore = createStore(referenceRootReducer);

describe('redux store', () => {
    test('should have a valid state shape', () => {
        expect(store.getState()).toStrictEqual(referenceStore.getState());
    });
});
