const Button = ({ children, handleEvent }) => {
  return (
    <button style={{ backgroundColor: "#7950f2", color: "#fff" }} onClick={handleEvent}>
      {children}
    </button>
  )
}

export default Button