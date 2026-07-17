import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {

  const { user, logout } = useContext(AuthContext);

  return (

    <nav className="navbar">

      <h2 className="logo">
        Indeed Clone
      </h2>

      <div className="nav-links">

        <Link to="/">
          Home
        </Link>

        {
          user ? (

            <>

              <Link to="/dashboard">
                Dashboard
              </Link>

              {
                user.role === "employer" && (

                  <Link to="/dashboard/create-job">
                    Create Job
                  </Link>

                )
              }

              <button
                className="logout-btn"
                onClick={logout}
              >
                Logout
              </button>

            </>

          ) : (

            <>

              <Link to="/login">
                Login
              </Link>

              <Link to="/register">
                Register
              </Link>

            </>

          )
        }

      </div>

    </nav>

  );

};

export default Navbar;