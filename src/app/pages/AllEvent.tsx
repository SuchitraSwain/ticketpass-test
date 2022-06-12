import Navbar from "../layout/Navbar";
import { eventsList } from "./EventList";
import { useNavigate } from "react-router-dom";
import "./Event.scss";

const AllEvent = () => {
  let navigate = useNavigate();
  const viewDetails = (event: any) => {
    navigate("/event-detail", { state: event });
  };
  return (
    <section className="allevent__section">
      <Navbar />
      <div className="container mt-5">
        <div className="row">
          {eventsList.map((event, index) => (
            <div className="col-md-3 col-6 mt-4" key={index}>
              <div className="card">
                <img
                  src={event.img_url}
                  className="card-img-top img-fluid"
                  alt="..."
                />
                <div className="card-body">
                  <h6 className="card-title fw-bold">{event.name}</h6>
                  <p className="card-text">
                    <img
                      src={require("../../assets/img/date.png")}
                      alt=""
                      className="img-fluid me-2"
                      style={{ width: "20px" }}
                    />
                    {event.startDate}
                  </p>
                  <button
                    className="btn fill__btn d-block mx-auto mt-5 mb-3"
                    onClick={() => viewDetails(event)}
                  >
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllEvent;
