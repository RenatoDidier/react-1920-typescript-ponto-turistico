import { useState } from "react"

type TextInputProps = {
  id: string
  label: string
  value: string | null
  onChange: (value: string | null) => void

  required?: boolean
  maxLength?: number
  placeholder?: string
  disabled?: boolean
}

export default function TextInput({
  id,
  label,
  value,
  onChange,
  required = false,
  maxLength = 100,
  placeholder,
  disabled = false
}: TextInputProps) {
  const [touched, setTouched] = useState(false)

  const normalizedValue = value ?? ""
  const isEmpty = required && touched && value?.trim().length === 0

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    onChange(e.target.value)
  }

  function handleBlur() {
    setTouched(true)
  }

  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">
        {label}
        {required && (
          <>
            <span className="text-danger ms-1">*</span>
            {isEmpty && (
              <span className="text-danger ms-2">Este campo é obrigatório</span>
            )}
          </>
        )}
      </label>

      <input
        id={id}
        type="text"
        className={`form-control ${isEmpty ? "is-invalid" : ""}`}
        value={normalizedValue}
        onChange={handleChange}
        onBlur={handleBlur}
        maxLength={maxLength}
        placeholder={placeholder}
        disabled={disabled}
      />

      <div className="form-text text-end">
        {value?.length ?? 0}/{maxLength}
      </div>
    </div>
  )
}
