import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Page = React.lazy(() => import("pages/Page"));
const Audience = React.lazy(() => import("pages/Audience"));
const Login = React.lazy(() => import("pages/Login"));
const Reservation = React.lazy(() => import("pages/Reservation"));
const MyReservation = React.lazy(() => import("pages/MyReservation"));
const CreateAudience = React.lazy(() => import("pages/CreateAudience"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Page />} />
          <Route path="/Audience" element={<Audience />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Reservation" element={<Reservation />} />
          <Route path="/MyReservation" element={<MyReservation />} />
          <Route path="/CreateAudience" element={<CreateAudience />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
