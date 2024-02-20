import { Link, useMatch, useResolvedPath } from 'react-router-dom'

const Navigation = () => {
  return (
      <nav>
        <div>
          <a>Harly Khen Quimelat</a>
        </div>
        <div>
          <CustomLink to="/Projects">Projects</CustomLink>
          <CustomLink to="/About">About</CustomLink>
          <CustomLink to="/">Home</CustomLink>
        </div>
      </nav>
  );
};

function CustomLink({to, children, ...props}) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true})

  return (
      <Link className={isActive ? "active" : ""} to={to} {...props}>
          {children}
      </Link>
  )
}

export default Navigation;
