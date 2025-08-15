import { Box, Button } from "@mui/material"; // Modal
import type { RecipeType } from "../handleData.tsx";


const Recipe = (recipe: RecipeType) => {
    return (
        <div className="m-10 bg-[#BAA288] h-100 w-100 self-center content-center border-4 border-[#94816c]">
            <img className="h-50 justify-self-center" src={recipe.imageURL} />
            <h4 className="text-center">{recipe.name}</h4>
            <Box className="justify-self-center">
                <Button variant="contained" 
                    sx={{ margin: '2rem', backgroundColor: '#6e1a0f' }}>
                    Let's cook
                </Button>
            </Box>
        </div>
    )
}

export default Recipe;

// try the lazy loading thing