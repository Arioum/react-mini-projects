const StepMessage = ({ step, children }) => {
  return (
    <div className="message">
      <h3>Step {step}</h3>
      <p>{children}</p>
    </div>
  )
}

export default StepMessage