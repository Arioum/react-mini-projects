import { useState } from "react";
import Button from "./Button";

const Box = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className='box'>
      <Button onClick={setIsOpen} />
      {isOpen && children}
    </div>
  );
};

export default Box;
