import { items } from "./data";

const SimpleAccordian = () => {
  return (
    <>
      <h2>SimpleAccordian</h2>
      {items.map((item, index) => {
        return (
          <details key={index} className="cursor-pointer w-full">
            <summary className="bg-gray-400 p-2">{item.title}</summary>
            <p className="bg-green-400 p-2">{item.content}</p>
          </details>
        );
      })}
    </>
  );
};

export default SimpleAccordian;
