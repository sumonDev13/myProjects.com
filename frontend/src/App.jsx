import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Chat from "./pages/Chat";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/chat",
        Component: Chat,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
