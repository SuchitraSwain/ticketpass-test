import "./Navbar.scss";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <section className="navbar__section">
      <div className="container-fluid p-0">
        <div className="row">
          <div className="col-md-12">
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
              <div className="container-fluid">
                <a className="navbar-brand" href="#">
                  <img
                    src={require("../../assets/img/logo.png")}
                    alt=""
                    className="img-fluid"
                    style={{ width: "150px" }}
                  />
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse justify-content-end mt-md-0 mt-5"
                  id="navbarSupportedContent"
                >
                  <Link to="/create-event">
                    <button className="btn fill__btn me-3">Create Event</button>
                  </Link>
                  <Link to="/login">
                    <button className="btn outline__btn">Login</button>
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
