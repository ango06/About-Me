import { useState, useEffect } from "react";
import { Button } from '@mui/material';

import { addRating, getRatings } from "../handleData.ts";

const Home = () => {
    const [rating, setRating] = useState(100);
    const [ratings, setRatings] = useState([0]);

    const handleDecrease = () => {
        setRating(rating - 1);
    }
    const handleIncrease = () => {
        setRating(rating + 1);
    }

    const handleRatings = () => {
        const submittedRating = { rating: rating };
        addRating(submittedRating);
        setRatings(items => [...items, rating])
    }

    // upon mount or db change
    useEffect(() => {
        async function fetchRatings() {
            const ratingsList = await getRatings();
            setRatings(ratingsList);
        }
        fetchRatings();
    }, []);
    
    return (
        <div className="p-10">
            <div className="flex flex-row justify-around">
                <div className="flex flex-col">
                    <h1 className="my-5 text-[#A12648]">About Angela Ngo</h1>
                    <p>Here's a fun project started in summer 2025. It's still VERY in the works. Regardless, enjoy! </p>
                    <img className="my-5 h-20 w-30 animate-bounce" src="https://pixsector.com/cache/0688783e/avbf566659ab2bdf82f87.png"/>
                </div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST1Y7xjxG0F0hTjegfbE9P4XQ7BCQjjWWM0g&s"></img>
            </div>

            <section>
                <div className="h-150 my-10 flex flex-row gap-4 rounded-3xl bg-[#C04A2A]">
                    <div className="p-4">
                        <h3 className="my-4 text-center text-white">What's playing???</h3>   
                        <img className="h-120 mx-8 rounded-3xl" src="https://i.pinimg.com/736x/7c/70/4c/7c704c8ec62601c31bd4626acc0a94fc.jpg" /> 
                    </div>
                    <iframe className="m-10 flex-1 rounded-3xl" src="https://open.spotify.com/embed/playlist/37i9dQZF1EpjeBzB9UN9x7?utm_source=generator" 
                        width="100%" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>     
                </div>
            </section>

            <section> 
                <div className="flex flex-row gap-4 items-center justify-center">
                    <h4>Rate your experience on this page: </h4>
                    <Button onClick={handleDecrease} variant="contained" style={{ background: "#232c73"}}>-</Button>
                    <p>{rating}</p>
                    <Button onClick={handleIncrease} variant="contained" style={{ background:"#232c73"}}>+</Button>
                    <Button onClick={handleRatings} variant="text" style={{ color:"black", background:"#e938a5"}}>SUBMIT</Button>
                </div>
                <h4 className="mt-10 mb-5 text-center">Ratings</h4>
                <div className="flex flex-row gap-10 flex-wrap">
                    {ratings.map(rating => <p className="w-10">{rating}</p>)}
                </div>
            </section>
        </div>
    )
}

export default Home;