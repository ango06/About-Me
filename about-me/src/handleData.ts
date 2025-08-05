// imports
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from "./firebase.ts";

// RATINGS
const ratingsCollection = collection(db, "ratings");

export interface Rating {
    rating: number;
}

export async function getRatings() {
    const ratingsSnapshot = await getDocs(ratingsCollection);
    const ratingsList = ratingsSnapshot.docs.map(doc => (doc.data().rating as number));
    // doc.data() is never undefined for query doc snapshots
    return ratingsList;
}

// add a rating to the "ratings" collection
export async function addRating(rating: Rating) {
    await addDoc(ratingsCollection, rating);
}

// RECIPES PAGE
const recipesCollection = collection(db, "cookbook");

export interface RecipeType {
    name: string,
    imageURL: string,
    ingredients: string[]
}

export async function getRecipes() {
    const recipesSnapshot = await getDocs(recipesCollection);
    const recipesList = recipesSnapshot.docs.map(doc => (doc.data())) as RecipeType[];
    return recipesList;
}

export async function addRecipe(recipe: RecipeType) {
    await addDoc(recipesCollection, recipe);
}


