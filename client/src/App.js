import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Login from "./components/Auth/Login";
import Home from "./components/HomePage/Home";

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
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
