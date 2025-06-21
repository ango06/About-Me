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
        async function fetch() {
                const ratingsList = await getRatings();
                setRatings(ratingsList);
        }
        fetch();
    }, []);
    
    return (
        <div className="p-10 bg-[#FFEAB4]">
            <div className="flex flex-row justify-around">
                <div className="flex flex-col">
                    <h1 className="my-5 font-bold text-6xl text-[#A12648]">About Angela Ngo</h1>
                    <p>Here is a fun summer 2025 project. Enjoy ... </p>
                    <img className="my-5 h-20 w-30 animate-bounce" src="https://pixsector.com/cache/0688783e/avbf566659ab2bdf82f87.png"/>
                </div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST1Y7xjxG0F0hTjegfbE9P4XQ7BCQjjWWM0g&s"></img>
            </div>

            <div className="h-150 my-10 flex flex-row gap-4 rounded-3xl bg-[#C04A2A]">
                <div className="p-4">
                    <h3 className="my-4 text-center font-bold text-4xl text-white">What's playing??</h3>   
                    <img className="h-120 mx-8 rounded-3xl" src="https://i.pinimg.com/736x/7c/70/4c/7c704c8ec62601c31bd4626acc0a94fc.jpg" /> 
                </div>
                <iframe className="m-10 flex-1 rounded-3xl" src="https://open.spotify.com/embed/playlist/37i9dQZF1EpjeBzB9UN9x7?utm_source=generator" 
                     width="100%" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>     
            </div>

            <section> 
                <div className="flex flex-row gap-4 items-center justify-center">
                    <h4 className="text-2xl font-bold">Rate your experience on this page: </h4>
                    <Button onClick={handleDecrease} variant="contained" style={{ background: "#232c73"}}>-</Button>
                    <p>{rating}</p>
                    <Button onClick={handleIncrease} variant="contained" style={{ background:"#232c73"}}>+</Button>
                    <Button onClick={handleRatings} variant="text" style={{ color:"black", background:"#e938a5"}}>SUBMIT</Button>
                </div>
                <h4 className="text-2xl font-bold">Ratings</h4>
                {ratings.map(rating => <p>{rating}</p>)}
            </section>

            <section>
                <h3 className="text-center text-4xl font-bold">My Pinterest guise</h3>
                <div className="m-2 w-150 justify-self-center self-center">
                    <a data-pin-do="embedBoard" data-pin-scale-height="400"
                    href="https://www.pinterest.com/greenuht/Me" />
                </div>
            </section>

        </div>
    )
}

export default Home;