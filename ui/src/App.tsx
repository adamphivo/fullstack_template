import Title from "@/components/Title/Title";
import CompareTime from "./components/CompareTime/CompareTime";
import TrpcProvider from "./lib/trpc/TrpcProvider";

function App() {
  return (
    <TrpcProvider>
      <main>
        <Title />
        <CompareTime />
      </main>
    </TrpcProvider>
  );
}

export default App;
