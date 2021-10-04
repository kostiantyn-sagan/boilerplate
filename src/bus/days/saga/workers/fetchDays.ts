// Core
import { put, call } from 'redux-saga/effects';

// Bus
import { togglerCreatorAction } from '../../../client/togglers';
import { errorsActions } from '../../../client/errors';
import { daysActions } from '../../slice';
import { filterActions } from '../../../client/filters/slice';

// Types
import { DaysState } from '../../types';

// Tools
import * as API from '../api';
import { IControlledError } from '../../../../tools/utils';


export function* fetchDays() {
    try {
        // ------------- SUCCESS BLOCK START -------------
        yield put(togglerCreatorAction({
            type:  'isDaysFetching',
            value: true,
        }));

        const result: DaysState = yield call(API.fetchDays);

        if (result) {
            yield put(daysActions.setDays(result));
            yield put(filterActions.setCurrentDay(result[ 0 ]));
        }
        // ------------- SUCCESS BLOCK END -------------
    } catch (error) {
        // ------------- ERROR BLOCK START -------------
        const controlledError = error as IControlledError;
        yield put(errorsActions.setControlledError(controlledError));
        // ------------- ERROR BLOCK END -------------
    } finally {
        // ------------- FINALLY BLOCK START -------------
        yield put(togglerCreatorAction({
            type:  'isDaysFetching',
            value: false,
        }));
        // ------------- FINALLY BLOCK END -------------
    }
}
