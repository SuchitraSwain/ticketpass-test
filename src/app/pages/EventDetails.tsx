import { useLocation } from "react-router-dom";
import Navbar from "../layout/Navbar";

const EventDetails = () => {
  const location: any = useLocation();

  return (
    <section>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-12 mt-3">
            <img src={location.state.img_url} alt="" className="img-fluid" />
          </div>
          <div className="col-md-12 mt-4">
            <h1 className="text-center fw-bold">{location.state.name}</h1>
            <p className="text-center">{location.state.description}</p>
            <p className="text-center">
              <img
                src={require("../../assets/img/date.png")}
                alt=""
                className="img-fluid"
                style={{ width: "25px" }}
              />
              {location.state.startDate}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
