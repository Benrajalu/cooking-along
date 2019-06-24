import { Recipe } from '../entities';
import {
  FETCH_RECENT_RECIPES_SUCCESS,
  FETCH_RECENT_RECIPES_REQUEST,
  FETCH_RECENT_RECIPES_FAILURE,
} from '../actions';

interface FetchRecentRecipesRequestAction {
  type: typeof FETCH_RECENT_RECIPES_REQUEST;
}

interface FetchRecentRecipesSuccessAction {
  type: typeof FETCH_RECENT_RECIPES_SUCCESS;
  payload: Recipe[];
}

interface FetchRecentRecipesFailureAction {
  type: typeof FETCH_RECENT_RECIPES_FAILURE;
  payload: string;
}

export type RecipeActionTypes =
  | FetchRecentRecipesFailureAction
  | FetchRecentRecipesSuccessAction
  | FetchRecentRecipesRequestAction;

export function fetchRecentRecipesRequest(): RecipeActionTypes {
  return {
    type: FETCH_RECENT_RECIPES_REQUEST,
  };
}

export function fetchRecentRecipesSuccess(
  recentRecipes: Recipe[],
): RecipeActionTypes {
  return {
    type: FETCH_RECENT_RECIPES_SUCCESS,
    payload: recentRecipes,
  };
}

export function fetchRecentRecipesFailure(error: string): RecipeActionTypes {
  return {
    type: FETCH_RECENT_RECIPES_FAILURE,
    payload: error,
  };
}
