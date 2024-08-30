import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import DarkMode from './DarkMode';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="brand">
        <p className="markName">Harly Khen Quimelat</p>
        <button className="hamburger" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        
      </div>
      <div className={`menu ${isOpen ? 'open' : ''}`}>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/About">About</CustomLink>
        <CustomLink to="/Projects">Projects</CustomLink>
      </div>
      <DarkMode className="dark-mode-icon" />
    </nav>
  );
};

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <Link className={isActive ? 'active' : ''} to={to} {...props}>
      {children}
    </Link>
  );
}

export default Navigation;
