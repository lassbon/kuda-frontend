function Button({ btnType, btnValue }) {
  return <input type={btnType || "button"} value={btnValue || "Welcone"} />
}

export default Button
