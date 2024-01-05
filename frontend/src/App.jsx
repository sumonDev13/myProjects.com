import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Chat from "./pages/Chat";
import HomeLayout from "./layout/HomeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
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
