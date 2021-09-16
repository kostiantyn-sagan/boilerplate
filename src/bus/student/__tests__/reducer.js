// Reducer
import { studentReducer } from '../reducer';

// Actions
import { studentActions } from '../actions';

describe('student reducer', () => {
    test('should return initial state by default', () => {
        expect(studentReducer(void 0, {})).toMatchInlineSnapshot(`
Object {
  "data": Object {
    "age": "",
    "email": "your email",
    "firstName": "your Name",
    "sex": "your sex",
    "speciality": "your speciality",
    "surname": "your Surname",
  },
}
`);
    });
    test('should handle fill action', () => {
        expect(studentReducer(void 0, studentActions.fillProfile({ name: 'Mars' }))).toMatchInlineSnapshot(`
Object {
  "data": Object {
    "name": "Mars",
  },
}
`);
    });
});
