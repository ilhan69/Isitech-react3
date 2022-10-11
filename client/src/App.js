import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import NotFound from "./components/Layouts/NotFound";
import Login from "./components/Login";

const App = () => {

  const router = createBrowserRouter([
    {
      errorElement: <NotFound />,
      path: "/",
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
