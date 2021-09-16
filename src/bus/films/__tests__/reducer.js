// Reducer
import { filmsReducer } from '../reducer';

// Actions
import { filmsActions } from '../actions';

describe('films reducer', () => {
    test('should return initial state by default', () => {
        expect(filmsReducer(void 0, {})).toMatchInlineSnapshot(`
Object {
  "data": null,
  "error": null,
  "isFetching": false,
}
`);
    });
    test('should handle start fetching action', () => {
        expect(filmsReducer(void 0, filmsActions.startFetching())).toMatchInlineSnapshot(`
Object {
  "data": null,
  "error": null,
  "isFetching": true,
}
`);
    });
    test('should handle stop fetching action', () => {
        expect(filmsReducer(void 0, filmsActions.stopFetching())).toMatchInlineSnapshot(`
Object {
  "data": null,
  "error": null,
  "isFetching": false,
}
`);
    });
    test('should handle fill action', () => {
        expect(filmsReducer(void 0, filmsActions.fill({ name: 'Mars' }))).toMatchInlineSnapshot(`
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
        expect(filmsReducer(void 0, filmsActions.setFetchingError('We have an error'))).toMatchInlineSnapshot(`
Object {
  "data": null,
  "error": "We have an error",
  "isFetching": false,
}
`);
    });
});
