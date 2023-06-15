import React, { useState } from 'react';

const MovieItem = ({ title, resume, director, publicationDate }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <li
      className="bg-white border border-gray-300 rounded p-4"
      onClick={handleClick}
    >
      {title}
      {showDetails && (
        <div>
          <p>Director: {director}</p>
          <p>Publication Date: {publicationDate}</p>
          <p>Resume: {resume}</p>
        </div>
      )}
    </li>
  );
};

export default MovieItem;
