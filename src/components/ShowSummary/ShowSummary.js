import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import './ShowSummary.css';

const ShowSummary = () => {
  const { id } = useParams();
  const [summary, setSummary] = useState('');

  useEffect(() => {
    axios
      .get(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => {
        setSummary(response.data.summary);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  return (
    <div className="ShowSummary">
      <h1>Show Summary</h1>
      <div className="summary">{summary}</div>
      <Link to={`/show/${id}/book-ticket`}>
        <button className="btn btn-primary">Book Ticket</button>
      </Link>
    </div>
  );
};

export default ShowSummary;
