import "./App.css";
import NavigationBar from "../Navigation";
import HomePage from "../Home";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/learning",
      element: <HomePage />,
    },
    {
      path: "/about",
      element: <HomePage />,
    },
    {
      path: "/faq",
      element: <HomePage />,
    },
  ]);
  return (
    <div className="App">
      <NavigationBar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
