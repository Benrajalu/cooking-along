import { Recipe } from '../entities';
import { FETCH_RECENT_RECIPES_SUCCESS } from '../actions';

interface FetchRecentRecipesAction {
  type: typeof FETCH_RECENT_RECIPES_SUCCESS;
  payload: Recipe[];
}

export function fetchRecentRecipesSuccess(
  recentRecipes: Recipe[],
): RecipeTypes {
  return {
    type: FETCH_RECENT_RECIPES_SUCCESS,
    payload: recentRecipes,
  };
}

export type RecipeTypes = FetchRecentRecipesAction;
