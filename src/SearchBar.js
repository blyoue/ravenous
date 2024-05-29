import React, { useState } from 'react';
import Busfetch from './utils/Busfetch'; 

function SearchBar({ onSearch }) {
    const [term, setTerm] = useState("");
    const [location, setLocation] = useState("");
    const [option, setOption] = useState("best_match");

    const handleTermChange = (e) => {
        setTerm(e.target.value);
    };
    const handleLocation = (e) => {
        setLocation(e.target.value);
    };
    const handleSort = (e) => {
        setOption(e.target.value);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(term, location, option);
        try {
            const businesses = await Busfetch(term, location, option);
            onSearch(businesses);
        }
        catch (error) {
            console.log(error);
            onSearch([]);
        }

        setTerm("");
        setLocation("");
        setOption("best_match");
    };

    return (
        <div className='bg-blueza h-bb bg-center bg-cover flex flex-col font-bold text-white'>
            <div className='h-16 bg-tan py-auto flex justify-center items-center'>
                <h1 className='text-3xl font-semibold font-head'>ravenous</h1>
            </div>
            <div className='flex flex-col flex-grow justify-center items-center'>
                <form action="" className='w-3/5 flex flex-col justify-center items-center' onSubmit={handleSubmit}>
                    <ul className='min-w-96 flex flex-row w-3/5 h-12 px-16 my-8 mx-auto justify-between font-semibold'>
                        <li className='inline-flex justify-center items-center w-1/3 border-b border-white has-[:checked]:border-tan'>
                            <input 
                                type="radio" 
                                name="sort" 
                                value="best_match" 
                                id="match" 
                                className='peer hidden' 
                                onChange={handleSort} 
                                checked={option === "best_match"}
                                required
                            />
                            <label htmlFor="match" className='w-20 text-wrap hover:text-stone-300 peer-checked:shadow-2xl peer-checked:text-tan peer-checked:font-bold'>Best Match</label>
                        </li>
                        <li className='inline-flex justify-center items-center w-1/3 border-b border-white has-[:checked]:border-tan'>
                            <input 
                                type="radio" 
                                name="sort" 
                                value="rating" 
                                id="rate" 
                                className='peer hidden'
                                onChange={handleSort}
                                checked={option ==="rating"}
                            />
                            <label htmlFor="rate" className='w-20 text-wrap hover:text-stone-300 peer-checked:shadow-2xl peer-checked:text-tan peer-checked:font-bold'>Highest Rated</label>
                        </li>
                        <li className='inline-flex justify-center items-center w-1/3 border-b border-white has-[:checked]:border-tan'>
                            <input 
                                type="radio" 
                                name="sort" 
                                value="review_count" 
                                id="review" 
                                className='peer hidden'
                                onChange={handleSort}
                                checked={option ==="review_count"}
                            />
                            <label htmlFor="review" className='w-20 text-wrap hover:text-stone-300 peer-checked:shadow-2xl peer-checked:text-tan peer-checked:font-bold'>Most Reviewed</label><br /><br />
                        </li>
                    </ul>
                    <div className='w-full'>
                        <input 
                            id="name" 
                            type="text" 
                            className='mx-4 py-2 px-4 w-2/5 text-stone-700 border font-sans border-slate-300 hover:border-slate-400 rounded-md placeholder:font-normal' 
                            placeholder="Search Businesses"
                            onChange={handleTermChange}
                            value={term}
                        />
                        <input 
                            id="location" 
                            type="text" 
                            className='mx-4 py-2 px-4 w-2/5 text-stone-700 border font-sans border-slate-300 hover:border-slate-400 rounded-md placeholder:font-normal' 
                            placeholder="Where?"
                            onChange={handleLocation}
                            value={location}
                        /><br />
                    </div>
                    <input type="submit" className='my-8 py-2 px-6 hover:bg-yellow-600 rounded bg-tan text-center' value="Let's Go"/>
                </form>
            </div>
        </div>
    )
}

export default SearchBar;