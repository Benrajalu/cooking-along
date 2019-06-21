export interface HashMap<E> {
  [uuid: string]: E;
}

export enum Categories {
  sweet = 'sweet',
  savoury = 'savoury',
  cake = 'cake',
  snack = 'snack',
  biscuit = 'biscuit',
  breakfast = 'breakfast',
  vegetarian = 'vegetarian',
  vegan = 'vegan',
  fish = 'fish',
  meat = 'meat',
  drink = 'drink',
}

export interface Recipe {
  authorId: string;
  categories: Categories[];
  contents: string;
  createAt: Date;
  mainImage: string;
  title: string;
  url: string;
}

export interface User {
  id: string;
  email: string;
  avatarURL: string;
  name: string;
  surname: string;
  bio: string;
}

export interface State {
  recentRecipes: HashMap<Recipe>;
  isUserLogged: boolean;
  user: User | null;
  currentRecipe: Recipe;
}
