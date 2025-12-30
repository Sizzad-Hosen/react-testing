import { Outlet, Link } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/posts">Posts</Link>
      </nav>

      <hr />

      <Outlet />
    </>
  );
};

export default MainLayout;
