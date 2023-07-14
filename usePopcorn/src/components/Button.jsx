import { useState } from "react";

const Button = ({ onClick }) => {
  const [isOpen, setIsOpen] = useState(true);

  function handleClick() {
    onClick((open) => !open)
    setIsOpen((open) => !open)
  }

  return (
    <button className="btn-toggle" onClick={handleClick}>
      {isOpen ? "–" : "+"}
    </button>
  )
}

export default Button