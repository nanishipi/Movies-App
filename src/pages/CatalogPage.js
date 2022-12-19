import React from "react";
import { useState, useEffect } from 'react'
import axios from 'axios';
import MovieCard from "../components/MovieCard";

// STYLES
import "../pages/Catalog.css";
import Genres from "../components/Genres";

export default function Catalog() {
    const [genre, setCurrentGenre] = useState("");

    const handleGenreChange = event => {
        setCurrentGenre(event.target.value);
    }

    return (
        <div className="catalog">
            <div>
                <h2 className="filterTitle">Filters</h2>
                <form>
                    <select onChange={handleGenreChange} className="custom-select" name="filters" id="filters">
                        <option value="none" defaultValue>None</option>
                        <Genres></Genres>
                    </select>
                </form>
            </div>

            <div className="movies-container">
                <MovieCard genreId={genre}></MovieCard>
            </div>
        </div>
    );
}