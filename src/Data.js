import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import ToggleImages from "./components/ToggleImages.js";





const Data = () => {
    const url = "https://api.nasa.gov/planetary/apod?api_key=uiwXaZImj01qERBtIXpPvs8ZYR7GcvVuBmtVAUFP&count=10"
    const [info, setInfo] = useState(null)

    useEffect(() => {
        axios.get(url).then(response => {
        setInfo(response.data)
        })

    },[url])

    const [active, setActive] = useState(false);

    const handleChangeActive = () => {
        setActive((previousStar) => {
        return !previousStar;
        });
    };
    

    if(info){
        return (
        <div className='post'>
            <img src={info[0].url} className='post-image' alt='' ></img>
                <div className='post-content'>
                    <div className='reaction-wrapper'>
                        <ToggleImages active={active} handleChangeActive={handleChangeActive} />
                    </div>
                    <h1 className='likes'>{info[0].title}</h1>
                    <p className='description'>{info[0].explanation}</p>
                    <p className='post-time'>{info[0].date}</p>
                </div>
        </div>
                    


    )};
    return (
        <div>
            here
        </div>
    )
}

export default Data


