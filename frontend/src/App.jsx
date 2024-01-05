import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import Chat from "./pages/Chat";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
  },
  {
    path: "/chat",
    Component: Chat,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
