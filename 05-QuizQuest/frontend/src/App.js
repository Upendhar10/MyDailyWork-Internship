import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Quiz from "./pages/Quiz";

import QuizTake from "./components/QuizTake";
import CreateQuiz from "./components/CreateQuiz";
import Result from "./components/Result";
import Register from "./pages/Register";
import Login from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/quiz",
    element: <Quiz />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/takequiz",
    element: <QuizTake />,
  },
  {
    path: "/createquiz",
    element: <CreateQuiz />,
  },
  {
    path: "/result",
    element: <Result />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
