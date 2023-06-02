import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Home.css';

const Home = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.tvmaze.com/search/shows?q=all')
      .then((response) => {
        setShows(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="Home">
      <h1>TV Shows</h1>
      <div className="show-list">
        {shows.map((show) => (
          <div key={show.show.id} className="show-card">
            <h2>{show.show.name}</h2>
            <p>{show.show.premiered}</p>
            <img
              src={show.show.image ? show.show.image.medium : ''}
              alt={show.show.name}
            />
            <Link to={`/show/${show.show.id}/summary`}>
              <button className="btn btn-primary">Summary</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
