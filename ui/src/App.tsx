import { RouterProvider } from "react-router-dom";
import TrpcProvider from "./lib/trpc/TrpcProvider";
import router from "./routes";

function App() {
  return (
    <TrpcProvider>
      <RouterProvider router={router} />
    </TrpcProvider>
  );
}

export default App;
