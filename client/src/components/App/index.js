import "./App.css";
import NavigationBar from "../layout/Navigation";
import HomePage from "../Home";
import Footer from "../layout/Footer";
import Learning from "../layout/Learning";
import TestPage from "../layout/TestPage";
import TopicPage from "../layout/TopicPage";
import AboutUs from "../layout/AboutUs";
import Dictionary from "../layout/Dictionary";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/learning",
      element: <Learning />,
    },
    {
      path: "/learning/:topic",
      element: <TopicPage />,
    },
    {
      path: "/about-us",
      element: <AboutUs />,
    },
    {
      path: "/dictionary",
      element: <Dictionary />,
    },
    {
      path: "/test",
      element: <TestPage />,
    },
  ]);
  return (
    <div className="App">
      <NavigationBar />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
