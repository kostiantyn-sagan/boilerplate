import { studentActions } from '../actions';

describe('student actions', () => {
    test('should fill student', () => {
        expect(studentActions.fillProfile({ name: 'Mars' })).toMatchSnapshot();
    });
});
