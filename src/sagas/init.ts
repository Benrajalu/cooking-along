import { call, put, delay } from 'redux-saga/effects';

import { fetchRecentRecipesRequest } from '../actionCreators/recipes';

export default function* () {
  yield put(fetchRecentRecipesRequest());
}
