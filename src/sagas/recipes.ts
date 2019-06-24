import { call, put, takeEvery } from 'redux-saga/effects';
import { FETCH_RECENT_RECIPES_REQUEST } from '../actions';
import {
  fetchRecentRecipesSuccess,
  fetchRecentRecipesFailure,
} from '../actionCreators/recipes';
import { Recipe } from '../entities';
import { AllActions } from '../actionCreators';
import { getRecentRecipes } from '../service';

function* fetchRecentRecipes(action: AllActions) {
  try {
    const recipes: Recipe[] = yield call(getRecentRecipes);
    yield put(fetchRecentRecipesSuccess(recipes));
  } catch (e) {
    yield put(fetchRecentRecipesFailure(e.message));
  }
}

export function* watchFetchRecentRecipesRequest() {
  yield takeEvery(FETCH_RECENT_RECIPES_REQUEST, fetchRecentRecipes);
}
