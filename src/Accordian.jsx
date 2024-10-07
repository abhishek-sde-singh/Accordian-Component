import { useState } from "react";
import { items } from "./data";

const Accordian = () => {
  const [active, setActive] = useState(null);
  return (
    <>
      <h2>Accordian</h2>
      {items.map((item, index) => {
        return (
          <div
            key={index}
            className="cursor-pointer w-full"
            onClick={() => setActive(active !== index ? index : null)}
          >
            <div className="bg-gray-400 p-2">{item.title}</div>
            {active === index && (
              <div className="bg-green-500">{item.content}</div>
            )}
          </div>
        );
      })}
    </>
  );
};

export default Accordian;
