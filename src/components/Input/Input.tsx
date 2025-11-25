import type { InputProps } from "./types"
import { InputElement } from "./styles"

function Input({
  name,
  type = "text",
  id,
  placeholder,
  required = false,
  disabled = false,
  value,
  onChange,
}: InputProps) {
  return (
    <InputElement
      type={type}
      name={name}
      id={id}
      className="form-control"
      placeholder={placeholder}
      required={required}
      disabled={disabled}
      value={value}
      onChange={onChange}
    />
  )
}

export default Input
