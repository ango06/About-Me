import { useState, useEffect } from "react";
import { Button } from '@mui/material';
import { getFirestore } from "firebase/firestore";

import Recipe from "../components/Recipe.tsx";
import { addRecipe, getRecipes } from "../handleData.ts";
import type { RecipeType } from "../handleData.ts";

const Recipes = () => {
    const db = getFirestore();
    const [recipes, setRecipes] = useState<RecipeType[]>([]);

    // load in recipes from database
    useEffect(() => {
        async function fetchRecipes() {
            const recipeList = await getRecipes();
            console.log(recipeList);
            setRecipes(recipeList);
        }
        fetchRecipes();
    }, [db]);

    // recipe pop up
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <h1 className="my-5 font-bold text-center text-6xl text-[#A12648]">My Best Dishes</h1>
            <Button variant="contained" sx={{ margin: '2rem', backgroundColor: '#6e1a0f', justifySelf: 'center'  }}>Add Recipe</Button>
            <div className="flex flex-row flex-wrap">
                {recipes.map(recipe => <Recipe key={recipe.name} {...recipe}/>)}
            </div>
        </>
    )
}

export default Recipes;