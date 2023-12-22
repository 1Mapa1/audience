import React from "react";
import { BrowserRouter as Router, Routes, Route,  Navigate, Outlet } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import { ProtectedRoute } from "components";
import { ThreeDots } from 'react-loader-spinner';

const LoadingComponent = () => {
  return <ThreeDots color="blue" height={80} width={80} />;
};

const Page = React.lazy(() => import("pages/Page"));
const Audience = React.lazy(() => import("pages/Audience"));
const Login = React.lazy(() => import("pages/Login"));
const Reservation = React.lazy(() => import("pages/Reservation"));
const MyReservation = React.lazy(() => import("pages/MyReservation"));
const CreateAudience = React.lazy(() => import("pages/CreateAudience"));
const EditReservation = React.lazy(() => import("pages/EditReservation"));
const ShowReservation = React.lazy(() => import("pages/ShowReservation"));
const RequestReservation = React.lazy(() => import("pages/RequestReservation"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<LoadingComponent />}>
      <Router>
        <Routes>
          <Route path="/" element={<Page />} />
          <Route path="/Audience" element={<Audience />} />
          <Route path="/Login" element={<Login />} />
          <Route element={<ProtectedRoute allowedRoles={[1,2]}/>}>
            <Route path="/Reservation" element={<Reservation />} />
            <Route path="/MyReservation" element={<MyReservation />} />
          </Route>
          <Route element={<ProtectedRoute allowedRoles={[1]}/>}>
            <Route path="/EditReservation" element={<EditReservation />} />
            <Route path="/CreateAudience" element={<CreateAudience />} />
          </Route>
          


          <Route path="/RequestReservation" element={<RequestReservation />} />
          <Route path="/ShowReservation" element={<ShowReservation />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
