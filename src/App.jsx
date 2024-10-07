import Accordian from "./Accordian";
import AccordianGroup from "./AccordianGroup";
import SimpleAccordian from "./SimpleAccordian";

function App() {
  return (
    <div className="flex flex-col justify-center items-center h-[100vh] w-full bg-gray-500">
      <h1 className="text-5xl text-teal-300">Accordian</h1>
      <SimpleAccordian />
      <Accordian />
      <AccordianGroup/>
    </div>
  );
}

export default App;
