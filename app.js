function recipeFactory(name, ingredients, steps) {
  // your code here
  return {
    name: name,
    ingredients: ingredients,
    steps: steps,

    stepsHtml: function() {
      return '<ol>' + recipeFactory.steps.map(
        function(step) {return '<li>' + step + '</li>'; }).join('') + '</ul>';
    },


    ingredientsHtml: function() {
      return '<ul>' + recipeFactory.ingredients.map(
        function(ing) {return '<li>' + ing + '</li>'; }).join('') + '</ul>';
    }
  }
}

var recipe = recipeFactory('grilled cheese',['2 slices bread', 'butter', '1 slice cheese'],['Butter bread', 'Put cheese between bread', 'Toast bread on stove']);

console.log(recipe);
