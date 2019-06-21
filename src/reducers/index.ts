import { State } from '../entities';
import { AllActions } from '../actionCreators';

export const defaultState: State = {
  recentRecipes: {},
  isUserLogged: false,
  user: null,
  currentRecipe: null,
};

const reducer = (state: State = defaultState, action: AllActions): State => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
