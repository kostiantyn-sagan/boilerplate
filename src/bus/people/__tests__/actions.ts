import { peopleActions } from '../actions';

describe('people actions', () => {
    test('should start fetching', () => {
        expect(peopleActions.startFetching()).toMatchSnapshot();
    });
    test('should stop fetching', () => {
        expect(peopleActions.stopFetching()).toMatchSnapshot();
    });
    test('should fetch people', () => {
        expect(peopleActions.fetchAsync()).toMatchSnapshot();
    });
    test('should fill people', () => {
        expect(peopleActions.fill({ name: 'Mars' })).toMatchSnapshot();
    });
    test('should set fetching error', () => {
        expect(peopleActions.setFetchingError('We have an error!')).toMatchSnapshot();
    });
});
