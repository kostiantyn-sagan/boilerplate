import { filmsActions } from '../actions';

describe('films actions', () => {
    test('should start fetching', () => {
        expect(filmsActions.startFetching()).toMatchSnapshot();
    });
    test('should stop fetching', () => {
        expect(filmsActions.stopFetching()).toMatchSnapshot();
    });
    test('should fetch films', () => {
        expect(filmsActions.fetchAsync()).toMatchSnapshot();
    });
    test('should fill films', () => {
        expect(filmsActions.fill({ name: 'Mars' })).toMatchSnapshot();
    });
    test('should set fetching error', () => {
        expect(filmsActions.setFetchingError('We have an error!')).toMatchSnapshot();
    });
});
