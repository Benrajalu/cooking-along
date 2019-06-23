import { call, put, delay } from 'redux-saga/effects';

import { fetchRecentRecipesSuccess } from '../actionCreators/recipes';

export default function* () {
  // const recentRecipes = yield call(remoteStore);
  yield delay(800);
  yield put(fetchRecentRecipesSuccess([]));
}
