import CompareTime from "@/components/CompareTime/CompareTime";
import Title from "@/components/Title/Title";
import { createBrowserRouter, Outlet } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Title />
        <CompareTime />
        <Outlet />
      </>
    ),
    children: [
      {
        path: "/edit",
        element: <div>Edit</div>,
      },
    ],
  },
  {
    path: "/auth",
    element: <div>Clients List</div>,
  },
]);

export default router;
