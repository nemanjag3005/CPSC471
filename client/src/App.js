import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Home from "./components/HomePage/Home";
import Dashboard from "./components/MemberProfile/Dashboard";
import Bookings from "./components/MemberProfile/Bookings";
import ProfileSettings from "./components/MemberProfile/ProfileSettings";
import { useState, useEffect } from "react";
import Layout from "./components/Layout/Layout";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminLogin from "./components/Auth/AdminLogin";
import StaffDashboard from "./components/StaffProfile/StaffDashboard";
import WorkoutBookings from "./components/StaffProfile/WorkoutBookings";
import Machines from "./components/StaffProfile/Machines";
import AdminProfile from "./components/StaffProfile/AdminProfile";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/bookings",
      element: <Bookings />,
    },
    {
      path: "/profile",
      element: <ProfileSettings />,
    },
    {
      path: "/adminlogin",
      element: <AdminLogin />,
    },
    {
      path: "/admin",
      element: <StaffDashboard />,
    },
    {
      path: "/adminworkouts",
      element: <WorkoutBookings />,
    },
    {
      path: "/adminmachines",
      element: <Machines />,
    },
    {
      path: "/adminprofile",
      element: <AdminProfile />,
    },
  ]);
  return (
    <>
      <AuthProvider>
        <Layout>
          <RouterProvider router={router} />
        </Layout>
      </AuthProvider>
    </>
  );
}

export default App;
