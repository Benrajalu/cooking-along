import remoteStore from './firebase';
import { Recipe } from './entities';

export const getRecentRecipes = () => {
  const recipes: firebase.firestore.DocumentData[] = [];
  remoteStore
    .collection('recipes')
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        const currentRecipe = doc.data();
        console.log(currentRecipe);
        recipes.push(currentRecipe);
      });
    })
    .catch(error => {
      console.log('Error getting documents: ', error);
    })
    .finally(() => {
      return recipes;
    });
};
