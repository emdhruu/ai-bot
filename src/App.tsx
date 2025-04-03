import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./page/Home";
import Chat from "./page/Chat";
import NotFound from "./page/NotFound";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/chat",
      element: <Chat />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
