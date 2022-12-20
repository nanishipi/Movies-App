import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';

export default function Genres() {
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=cca9e22e43e09c833e8040188c69907a&language=en-US')
            .then(res => {
                setGenres(res.data.genres)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    const data = genres;
    const listItems = genres.map(
        (genre) => {
            return (
                <option key={genre.id} value={genre.id}>{genre.name}</option>
            )
        }
    )
    return (
        [listItems]
    )
}