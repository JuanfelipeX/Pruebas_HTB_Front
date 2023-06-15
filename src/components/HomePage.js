import React, { useEffect, useState } from 'react';
import MovieItem from './MovieItem';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Fetch the list of popular movies from your backend API here
    // Example:
    fetch('http://localhost:3000/movie')
      .then(response => response.json())
      .then(data => setMovies(data));
  }, []);

  const handleSearch = event => {
    setSearchQuery(event.target.value);
  };

  // Filter the movies based on the search query
  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-gray-100 py-8 px-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to Movie App</h1>
      <div className="flex items-center mb-4">
        <input
          type="text"
          placeholder="Search movies"
          className="bg-white border border-gray-300 rounded py-2 px-4 mr-2"
          value={searchQuery}
          onChange={handleSearch}
        />
        <button className="bg-blue-500 text-white py-2 px-4 rounded">Search</button>
      </div>
      <h2 className="text-xl font-bold mb-2">Popular Movies</h2>
      <div className="grid grid-cols-3 gap-4">
        {filteredMovies.map(movie => (
          <MovieItem
            key={movie.id}
            title={movie.title}
            resume={movie.resume}
            director={movie.director}
            publicationDate={movie.publication_date}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
