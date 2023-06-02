import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import ShowSummary from './components/ShowSummary/ShowSummary';
import BookTicket from './components/BookTicket/BookTicket';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/show/:id/summary" component={ShowSummary} />
        <Route path="/show/:id/book-ticket" component={BookTicket} />
      </Switch>
    </Router>
  );
}

export default App;
