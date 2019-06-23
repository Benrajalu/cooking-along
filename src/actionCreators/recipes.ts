import { Categories } from '../entities';
import { FETCH_RECENT_RECIPES_REQUEST } from '../actions';

interface FetchRecentRecipesAction {
  type: typeof FETCH_RECENT_RECIPES_REQUEST;
  payload: string | null;
}

export function fetchRecentRecipes(category?: Categories): RecipeTypes {
  return {
    type: FETCH_RECENT_RECIPES_REQUEST,
    payload: category || null,
  };
}

export type RecipeTypes = FetchRecentRecipesAction;
