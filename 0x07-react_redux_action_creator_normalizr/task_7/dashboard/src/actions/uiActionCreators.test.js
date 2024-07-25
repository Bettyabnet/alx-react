import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from './uiActionTypes';
import { loginRequest } from './uiActionCreators';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('uiActionCreators', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('creates LOGIN_SUCCESS when login is successful', () => {
    fetchMock.getOnce('/login-success.json', {
      body: { result: { email: 'test@test.com' } },
      headers: { 'content-type': 'application/json' },
    });

    const expectedActions = [
      { type: LOGIN, user: { email: 'test@test.com', password: 'password' } },
      { type: LOGIN_SUCCESS, user: { email: 'test@test.com' } },
    ];

    const store = mockStore({});

    return store.dispatch(loginRequest('test@test.com', 'password')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates LOGIN_FAILURE when login fails', () => {
    fetchMock.getOnce('/login-success.json', 500);

    const expectedActions = [
      { type: LOGIN, user: { email: 'test@test.com', password: 'password' } },
      { type: LOGIN_FAILURE, error: expect.any(Error) },
    ];

    const store = mockStore({});

    return store.dispatch(loginRequest('test@test.com', 'password')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
