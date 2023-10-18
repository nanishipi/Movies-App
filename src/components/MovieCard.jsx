import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';

// STYLES
import "../components/MovieCard.css";

export default function MovieCard(props) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=cca9e22e43e09c833e8040188c69907a&language=en-US&page=1')
            .then(res => {
                setMovies(res.data.results)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    const listItems = movies.map(
        (movie) => {
            if (movie.genre_ids.includes(+props.genreId) || props.genreId === "" || props.genreId === "none") {
                return (
                    <div className="card" key={movie.title}>
                        <div className="card-header">
                            <img src={"https://image.tmdb.org/t/p/original/" + movie.poster_path} alt={movie.title} />
                        </div>
                        <div className="card-body">
                            <h3 className="movie-title">
                                {movie.title}
                            </h3>
                        </div>
                    </div>
                )
            }
        }
    )
    return (
        <div className='movies-container'>
            {listItems}
        </div>
    )
}

