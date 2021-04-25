const elvenShieldRecipe = {
    leatherStrips: 2,
    ironIngot: 1,
    refinedMoonstone: 4,
};

const elvenGauntletesRecipe = {
    ...elvenShieldRecipe,
    leather: 1,
    refinedMoonstone: 5,
};

console.log(elvenShieldRecipe);
console.log(elvenGauntletesRecipe);
