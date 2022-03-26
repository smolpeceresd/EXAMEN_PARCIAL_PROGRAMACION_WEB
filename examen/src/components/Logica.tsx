import React from 'react';
import { cocktailsAPI, megaInput } from './Types';


export const cocktailFetcher = async (text: string) => {
    const urlPrincipal = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${text}`;
    const cocktail = await fetch(urlPrincipal);
    const primerJson = await cocktail.json();
    return primerJson;
}

export const ingredientFetcher = async (text: string) => {
    const urlPrincipal = `www.thecocktaildb.com/api/json/v1/1/filter.php?i=${text}`;
    const ingredient = await fetch(urlPrincipal);
    const primerJson:megaInput = await ingredient.json();
    return primerJson;
}