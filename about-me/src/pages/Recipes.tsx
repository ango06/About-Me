import { useState, useEffect } from "react";
import { Box, Button, Modal } from "@mui/material";
import { getFirestore } from "firebase/firestore";

import Recipe from "../components/Recipe.tsx";
import AddRecipe from "../components/AddRecipe.tsx";
import { getRecipes } from "../handleData.ts"; // addRecipe
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
            <Box className="justify-self-center p-4">
                <Button variant="contained" 
                    onClick={handleOpen}
                    sx={{ backgroundColor: '#6e1a0f', borderRadius: '30px' }}>
                    Add Recipe
                </Button>
            </Box>
            <Modal open={open} onClose={handleClose} >
                <Box>
                    <AddRecipe />
                </Box>
            </Modal>

            <div className="flex flex-row flex-wrap">
                {recipes.map(recipe => <Recipe key={recipe.name} {...recipe}/>)}
            </div>
        </>
    )
}

export default Recipes;