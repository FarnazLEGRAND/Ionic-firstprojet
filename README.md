- ionic start nome projet
  Angular
  Blank
  ngModule
- (y/n)n
______
ionic capacitor add android
ionic capacitor run android
______
0-ionic serve : pour arrive trouver URL

1- ionic generate:
page
servise,....
apres on choisir et la suit par exemple page je choisire le nome que je veux.
_______
exo:
1- cree ionic g
page
Recipes


______
path: 'recipes',
children: [
{
path: I
loadChildren: () => import ('./recipes/recipes.module') .then ( m => m. RecipesPageM
},
{
path: ':recipeId',
loadChildren: () => import ('. /recipes/recipe-detail/recipe-detail.module'). then (m => m. RecipesPageM
},
]

______
cree recipes/recipe-item dans component pour eviter repeter le code