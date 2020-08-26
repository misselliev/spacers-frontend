import React from 'react';
import { Menu, Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => (
  <nav className="ui container">
    <Menu widths={3}>
      <Menu.Item><Link className="nav-link" to="/">Home</Link></Menu.Item>
      <Dropdown id="dropdown-menu" text="Flashcards" pointing className="link item">
        <Dropdown.Menu>
          <Dropdown.Item><Link className="nav-link" to="/flashcards">See all Flashcards</Link></Dropdown.Item>
          <Dropdown.Item><Link className="nav-link" to="/newflashcard">Create flashcard</Link></Dropdown.Item>
          <Dropdown.Item><Link className="nav-link" to="/masteredflashcards">Mastered flashcards</Link></Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Menu.Item><Link className="nav-link" to="/">Logout</Link></Menu.Item>
    </Menu>
  </nav>
);

export default Navbar;
