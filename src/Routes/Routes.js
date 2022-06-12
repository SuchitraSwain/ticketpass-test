import { Route, Routes } from "react-router-dom";
import Login from "../app/auth/Login";
import AllEvent from "../app/pages/AllEvent";
import CreateEvent from "../app/pages/CreateEvent";
import EventDetails from "../app/pages/EventDetails";

const CustomRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AllEvent />} />
      <Route path="/login" element={<Login />} />
      <Route path="/create-event" element={<CreateEvent />} />
      <Route path="/event-detail" element={<EventDetails />} />
    </Routes>
  );
};

export default CustomRoutes;
