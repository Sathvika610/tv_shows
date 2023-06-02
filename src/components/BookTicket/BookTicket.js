import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import './BookTicket.css';

const BookTicket = () => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    const ticketDetails = {
      name,
      email,
      showId: id,
    };
    // Save ticket details to local/session storage or send to a server
    console.log(ticketDetails);
    // Clear form fields
    setName('');
    setEmail('');
    // Redirect to home screen
    history.push('/');
  };

  return (
    <div className="BookTicket">
      <h1>Book Ticket</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Book Now
        </button>
      </form>
    </div>
  );
};

export default BookTicket;
