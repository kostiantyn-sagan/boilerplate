// Reducer
import { peopleReducer } from '../reducer';

// Actions
import { peopleActions } from '../actions';

describe('planets reducer', () => {
    test('should return initial state by default', () => {
        expect(peopleReducer(void 0, {})).toMatchInlineSnapshot(`
Object {
  "data": null,
  "error": null,
  "isFetching": false,
}
`);
    });
    test('should handle start fetching action', () => {
        expect(peopleReducer(void 0, peopleActions.startFetching())).toMatchInlineSnapshot(`
Object {
  "data": null,
  "error": null,
  "isFetching": true,
}
`);
    });
    test('should handle stop fetching action', () => {
        expect(peopleReducer(void 0, peopleActions.stopFetching())).toMatchInlineSnapshot(`
Object {
  "data": null,
  "error": null,
  "isFetching": false,
}
`);
    });
    test('should handle fill action', () => {
        expect(peopleReducer(void 0, peopleActions.fill({ name: 'Mars' }))).toMatchInlineSnapshot(`
Object {
  "data": Object {
    "name": "Mars",
  },
  "error": null,
  "isFetching": false,
}
`);
    });
    test('should handle set fetching error message', () => {
        expect(peopleReducer(void 0, peopleActions.setFetchingError('We have an error'))).toMatchInlineSnapshot(`
Object {
  "data": null,
  "error": "We have an error",
  "isFetching": false,
}
`);
    });
});
