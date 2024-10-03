import Title from "@/components/Title/Title";
import TrpcProvider from "./lib/trpc/TrpcProvider";

function App() {
  return (
    <TrpcProvider>
      <main>
        <Title />
      </main>
    </TrpcProvider>
  );
}

export default App;
