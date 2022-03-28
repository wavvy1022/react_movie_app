import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"

function Detail(){

    const {id} = useParams();

    const [movie, setMovie] = useState({});
    
    const getMovieDetails = async() => {
        const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
        const json = await response.json();
        setMovie(json.data.movie);
    }

    useEffect(()=>{
        getMovieDetails();
    },[])

    return (
        <div>
            <h1>{movie.title}</h1>
            <img src={movie.background_image_original} alt={movie.title}/>
            <ul>
            {movie.genre}
            </ul>
            <p>{movie.description_full}</p>
        </div>
    )
}


export default Detail;