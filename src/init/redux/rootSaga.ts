// Core
import { all } from 'redux-saga/effects';

// Instruments
import { watchMessages } from '../../bus/messages/saga';
import { watchDays } from '../../bus/days/saga';

export function* rootSaga() {
    yield all([
        watchMessages(),
        watchDays(),
    ]);
}
