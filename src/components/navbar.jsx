import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => (
  <nav className="ui container">
    <Menu widths={5}>
      <Menu.Item><Link className="nav-link" to="/">Home</Link></Menu.Item>
      <Menu.Item><Link className="nav-link" to="/login">Login</Link></Menu.Item>
      <Menu.Item><Link className="nav-link" to="/signup">Signup</Link></Menu.Item>
      <Menu.Item><Link className="nav-link" to="/flashcards">Flashcards</Link></Menu.Item>
      <Menu.Item><Link className="nav-link" to="/newflashcard">Create flashcard</Link></Menu.Item>
    </Menu>
  </nav>
);

export default Navbar;
