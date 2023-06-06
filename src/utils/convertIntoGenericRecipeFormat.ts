import { IRecipeById } from "../interfaces/IRecipeById";

export default function convertIntoGenericRecipeFormat(actualRecipe: IRecipeById) {
  return {
    recipeName: actualRecipe.strMeal ? actualRecipe.strMeal : actualRecipe.strDrink,
    recipeInstructions: actualRecipe.strInstructions,
    recipeThumb: actualRecipe.strMealThumb ? actualRecipe.strMealThumb : actualRecipe.strDrinkThumb,
    recipeVideo: actualRecipe.strYoutube ? actualRecipe.strYoutube : actualRecipe.strVideo,
    recipeIngredients: [
      actualRecipe.strIngredient1 ? actualRecipe.strIngredient1 : null,
      actualRecipe.strIngredient2 ? actualRecipe.strIngredient2 : null,
      actualRecipe.strIngredient3 ? actualRecipe.strIngredient3 : null,
      actualRecipe.strIngredient4 ? actualRecipe.strIngredient4 : null,
      actualRecipe.strIngredient5 ? actualRecipe.strIngredient5 : null,
      actualRecipe.strIngredient6 ? actualRecipe.strIngredient6 : null,
      actualRecipe.strIngredient7 ? actualRecipe.strIngredient7 : null,
      actualRecipe.strIngredient8 ? actualRecipe.strIngredient8 : null,
      actualRecipe.strIngredient9 ? actualRecipe.strIngredient9 : null,
      actualRecipe.strIngredient10 ? actualRecipe.strIngredient10 : null,
      actualRecipe.strIngredient11 ? actualRecipe.strIngredient11 : null,
      actualRecipe.strIngredient12 ? actualRecipe.strIngredient12 : null,
      actualRecipe.strIngredient13 ? actualRecipe.strIngredient13 : null,
      actualRecipe.strIngredient14 ? actualRecipe.strIngredient14 : null,
      actualRecipe.strIngredient15 ? actualRecipe.strIngredient15 : null,
      actualRecipe.strIngredient16 ? actualRecipe.strIngredient16 : null,
      actualRecipe.strIngredient17 ? actualRecipe.strIngredient17 : null,
      actualRecipe.strIngredient18 ? actualRecipe.strIngredient18 : null,
      actualRecipe.strIngredient19 ? actualRecipe.strIngredient19 : null,
      actualRecipe.strIngredient20 ? actualRecipe.strIngredient20 : null,
    ],
    recipeMeasures: [
      actualRecipe.strMeasure1 ? actualRecipe.strMeasure1 : null,
      actualRecipe.strMeasure2 ? actualRecipe.strMeasure2 : null,
      actualRecipe.strMeasure3 ? actualRecipe.strMeasure3 : null,
      actualRecipe.strMeasure4 ? actualRecipe.strMeasure4 : null,
      actualRecipe.strMeasure5 ? actualRecipe.strMeasure5 : null,
      actualRecipe.strMeasure6 ? actualRecipe.strMeasure6 : null,
      actualRecipe.strMeasure7 ? actualRecipe.strMeasure7 : null,
      actualRecipe.strMeasure8 ? actualRecipe.strMeasure8 : null,
      actualRecipe.strMeasure9 ? actualRecipe.strMeasure9 : null,
      actualRecipe.strMeasure10 ? actualRecipe.strMeasure10 : null,
      actualRecipe.strMeasure11 ? actualRecipe.strMeasure11 : null,
      actualRecipe.strMeasure12 ? actualRecipe.strMeasure12 : null,
      actualRecipe.strMeasure13 ? actualRecipe.strMeasure13 : null,
      actualRecipe.strMeasure14 ? actualRecipe.strMeasure14 : null,
      actualRecipe.strMeasure15 ? actualRecipe.strMeasure15 : null,
      actualRecipe.strMeasure16 ? actualRecipe.strMeasure16 : null,
      actualRecipe.strMeasure17 ? actualRecipe.strMeasure17 : null,
      actualRecipe.strMeasure18 ? actualRecipe.strMeasure18 : null,
      actualRecipe.strMeasure19 ? actualRecipe.strMeasure19 : null,
      actualRecipe.strMeasure20 ? actualRecipe.strMeasure20 : null,
    ],
    // recipeIngredient1: actualRecipe.strIngredient1 ? actualRecipe.strIngredient1 : null,
    // recipeIngredient2: actualRecipe.strIngredient2 ? actualRecipe.strIngredient2 : null,
    // recipeIngredient3: actualRecipe.strIngredient3 ? actualRecipe.strIngredient3 : null,
    // recipeIngredient4: actualRecipe.strIngredient4 ? actualRecipe.strIngredient4 : null,
    // recipeIngredient5: actualRecipe.strIngredient5 ? actualRecipe.strIngredient5 : null,
    // recipeIngredient6: actualRecipe.strIngredient6 ? actualRecipe.strIngredient6 : null,
    // recipeIngredient7: actualRecipe.strIngredient7 ? actualRecipe.strIngredient7 : null,
    // recipeIngredient8: actualRecipe.strIngredient8 ? actualRecipe.strIngredient8 : null,
    // recipeIngredient9: actualRecipe.strIngredient9 ? actualRecipe.strIngredient9 : null,
    // recipeIngredient10: actualRecipe.strIngredient10 ? actualRecipe.strIngredient10 : null,
    // recipeIngredient11: actualRecipe.strIngredient11 ? actualRecipe.strIngredient11 : null,
    // recipeIngredient12: actualRecipe.strIngredient12 ? actualRecipe.strIngredient12 : null,
    // recipeIngredient13: actualRecipe.strIngredient13 ? actualRecipe.strIngredient13 : null,
    // recipeIngredient14: actualRecipe.strIngredient14 ? actualRecipe.strIngredient14 : null,
    // recipeIngredient15: actualRecipe.strIngredient15 ? actualRecipe.strIngredient15 : null,
    // recipeIngredient16: actualRecipe.strIngredient16 ? actualRecipe.strIngredient16 : null,
    // recipeIngredient17: actualRecipe.strIngredient17 ? actualRecipe.strIngredient17 : null,
    // recipeIngredient18: actualRecipe.strIngredient18 ? actualRecipe.strIngredient18 : null,
    // recipeIngredient19: actualRecipe.strIngredient19 ? actualRecipe.strIngredient19 : null,
    // recipeIngredient20: actualRecipe.strIngredient20 ? actualRecipe.strIngredient20 : null,
    // recipeMeasure1: actualRecipe.strMeasure1 ? actualRecipe.strMeasure1 : null,
    // recipeMeasure2: actualRecipe.strMeasure2 ? actualRecipe.strMeasure2 : null,
    // recipeMeasure3: actualRecipe.strMeasure3 ? actualRecipe.strMeasure3 : null,
    // recipeMeasure4: actualRecipe.strMeasure4 ? actualRecipe.strMeasure4 : null,
    // recipeMeasure5: actualRecipe.strMeasure5 ? actualRecipe.strMeasure5 : null,
    // recipeMeasure6: actualRecipe.strMeasure6 ? actualRecipe.strMeasure6 : null,
    // recipeMeasure7: actualRecipe.strMeasure7 ? actualRecipe.strMeasure7 : null,
    // recipeMeasure8: actualRecipe.strMeasure8 ? actualRecipe.strMeasure8 : null,
    // recipeMeasure9: actualRecipe.strMeasure9 ? actualRecipe.strMeasure9 : null,
    // recipeMeasure10: actualRecipe.strMeasure10 ? actualRecipe.strMeasure10 : null,
    // recipeMeasure11: actualRecipe.strMeasure11 ? actualRecipe.strMeasure11 : null,
    // recipeMeasure12: actualRecipe.strMeasure12 ? actualRecipe.strMeasure12 : null,
    // recipeMeasure13: actualRecipe.strMeasure13 ? actualRecipe.strMeasure13 : null,
    // recipeMeasure14: actualRecipe.strMeasure14 ? actualRecipe.strMeasure14 : null,
    // recipeMeasure15: actualRecipe.strMeasure15 ? actualRecipe.strMeasure15 : null,
    // recipeMeasure16: actualRecipe.strMeasure16 ? actualRecipe.strMeasure16 : null,
    // recipeMeasure17: actualRecipe.strMeasure17 ? actualRecipe.strMeasure17 : null,
    // recipeMeasure18: actualRecipe.strMeasure18 ? actualRecipe.strMeasure18 : null,
    // recipeMeasure19: actualRecipe.strMeasure19 ? actualRecipe.strMeasure19 : null,
    // recipeMeasure20: actualRecipe.strMeasure20 ? actualRecipe.strMeasure20 : null,
  }
}