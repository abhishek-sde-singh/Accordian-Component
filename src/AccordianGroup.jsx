import { useState } from "react";
import { items } from "./data";

const AccordianGroup = () => {
  const [active, setActive] = useState([]);

  const handleItemClick = (index) => {
    if (active.includes(index)) {
      setActive(active.filter((i) => i !== index));
    } else {
      setActive([...active, index]);
    }
  };

  const handleToggleAll = () => {
    if (active.length === items.length) {
      setActive([]);
    } else {
      setActive(items.map((_, index) => index));
    }
  };

  return (
    <>
      <h2>Accordian Group</h2>
      <button
        className="bg-blue-500 text-white p-2 mb-4"
        onClick={handleToggleAll}
      >
        {active.length === items.length ? "Close All" : "Open All"}
      </button>
      {items.map((item, index) => {
        return (
          <div
            key={index}
            className="cursor-pointer w-full"
            onClick={() => handleItemClick(index)}
          >
            <div className="bg-gray-400 p-2">{item.title}</div>
            {active.includes(index) && (
              <div className="bg-green-500">{item.content}</div>
            )}
          </div>
        );
      })}
    </>
  );
};

export default AccordianGroup;
