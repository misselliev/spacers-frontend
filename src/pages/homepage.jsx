import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Grid, Button } from 'semantic-ui-react';
import '../styles/homepage.css';

const HomePage = () => {
  const user = useSelector(state => state.user);
  const greeting = user.currentUser ? (
    <div className="home-grid">
      <div className="home-text">
        <h1 className="home-title">
          {user.currentUser.username}
          Welcome back!
        </h1>
        <img src="https://images.unsplash.com/photo-1506784365847-bbad939e9335?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1496&q=80" alt="calendar-img" className="home-image" />
        <div className="button-box">
          <Button color="green"><Link to="/newflashcard">Create a new flashcard</Link></Button>
          <Button color="green"><Link to="/flashcards">See all my flashcards</Link></Button>
        </div>

      </div>
    </div>
  ) : (
    <Grid>
      <div className="main-text">
        <h1 className="home-title">Welcome to Spacers App!</h1>
        <h3>Making learning easier</h3>
        <h3>Please login or sign up</h3>
        <div className="home-buttons-container">
          <Button className="home-button"><Link to="/login">Login</Link></Button>
          <Button className="home-button"><Link to="/signup">Signup</Link></Button>
        </div>
      </div>
    </Grid>

  );
  return (
    <main className="ui grid column centered">
      {greeting}
    </main>

  );
};

export default HomePage;
