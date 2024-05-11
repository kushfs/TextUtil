import React from 'react';
import PropTypes from 'prop-types';

function Navbar({ title, isDarkMode, toggleTheme }) {
  return (
    <nav className={`navbar navbar-expand-lg ${isDarkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{title}</a>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            id="themeSwitch"
            checked={isDarkMode}
            onChange={toggleTheme}
          />
          <label className="form-check-label" htmlFor="themeSwitch">
            {isDarkMode ? 'Dark Mode' : 'Light Mode'}
          </label>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  isDarkMode: PropTypes.bool.isRequired,
  toggleTheme: PropTypes.func.isRequired
};

export default Navbar;
