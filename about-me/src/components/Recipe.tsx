import { Modal, Button } from '@mui/material/Button';

import type { RecipeType } from "../handleData.tsx";


const Recipe = (recipe: RecipeType) => {

    return (
        <div className="m-10 bg-[#baa288] h-100 w-100 self-center content-center border-2 border-black">
            <img className="h-50 justify-self-center" src={recipe.imageURL} />
            <h4 className="text-center">{recipe.name}</h4>
            <Button variant="contained" sx={{ margin: '2rem', backgroundColor: '#6e1a0f', justifySelf: 'center' }}>Let's cook</Button>
        </div>
    )
}

export default Recipe;

// try the lazy loading thing