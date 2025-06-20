import Cashier from "./components/Cashier";
import QueueArea from "./components/Queues/QueueArea";

function App() {
  return (
    <div className="p-8 bg-gray-800 w-screen h-screen overflow-hidden flex flex-row gap-8">
      <Cashier />
      <QueueArea />
    </div>
  );
}

export default App;
