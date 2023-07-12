import { useState } from "react";
import Button from "./component/Button";
import StepMessage from "./component/StepMessage";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

const App = () => {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const handlePrevious = () => {
    step > 1 && setStep((step) => step - 1)
  }

  const handleNext = () => {
    step < 3 && setStep((step) => step + 1)
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen((isOpen) => !isOpen)}>&times;</button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 && "active"}>1</div>
            <div className={step >= 2 && "active"}>2</div>
            <div className={step >= 3 && "active"}>3</div>
          </div>
          <StepMessage step={step}>{messages[step - 1]}</StepMessage>
          <div className="buttons">
            <Button handleEvent={handlePrevious}><span>👈</span>Previous</Button>
            <Button handleEvent={handleNext}>Next<span>👉</span></Button>
          </div>
        </div>
      )}
    </>
  )
}

export default App