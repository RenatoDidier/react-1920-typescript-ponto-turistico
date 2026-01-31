import { useEffect, useMemo, useRef, useState } from "react"

import Button from "@/components/ui/button/button"

export type ComboBoxOption<TValue extends string | number> = {
  label: string
  value: TValue
}

type ComboBoxProps<TValue extends string | number> = {
  id: string
  options: ComboBoxOption<TValue>[]
  label: string
  value: TValue | null
  onChange: (value: TValue | null) => void

  placeholder?: string
  disabled?: boolean
  required?: boolean

  clearable?: boolean

  emptyText?: string
}

export default function ComboBox<TValue extends string | number>({
  id,
  options,
  label,
  value,
  onChange,
  placeholder = "Selecione...",
  disabled = false,
  required = false,
  clearable = true,
  emptyText = "Nenhum resultado"
}: ComboBoxProps<TValue>) {
  const wrapperRef = useRef<HTMLDivElement | null>(null)
  const inputRef = useRef<HTMLInputElement | null>(null)

  const selected = useMemo(
    () => options.find((o) => o.value === value) ?? null,
    [options, value]
  )

  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState(selected?.label ?? "")

  useEffect(() => {
    function handlePointerDown(e: MouseEvent) {
      const target = e.target as Node
      if (!wrapperRef.current?.contains(target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handlePointerDown)
    return () => document.removeEventListener("mousedown", handlePointerDown)
  }, [])

  function handleFocus() {
    if (disabled) return
    setIsOpen(true)
    setQuery("")
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Escape") {
      setIsOpen(false)
      inputRef.current?.blur()
    }
  }

  const filteredOptions = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!isOpen) return options

    if (!q) return options
    return options.filter((o) => o.label.toLowerCase().includes(q))
  }, [options, query, isOpen])

  function selectOption(opt: ComboBoxOption<TValue>) {
    onChange(opt.value)
    setIsOpen(false)
    setQuery(opt.label)
  }

  function clearSelection() {
    setQuery("")
    requestAnimationFrame(() => inputRef.current?.focus())
  }

  const showClear = clearable && !disabled && value !== null

  return (
    <div ref={wrapperRef} className="dropdown w-100" style={{ position: "relative" }}>
      <label htmlFor={id} className="form-label">
        {label}
        {required && (
          <>
            <span className="text-danger ms-1">*</span>
          </>
        )}
      </label>
      <div className="input-group">
        <input
          id={id}
          ref={inputRef}
          type="text"
          className="form-control"
          placeholder={placeholder}
          disabled={disabled}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={handleFocus}
          onKeyDown={handleKeyDown}
          aria-expanded={isOpen}
          aria-controls={`${id}-menu`}
          aria-autocomplete="list"
          autoComplete="off"
        />
        {showClear && (
          <Button
            id="clear-combo-button"
            text="limpar"
            color="secondary"
            onClick={() => clearSelection()}
          />
        )}
      </div>

      <div
        id={`${id}-menu`}
        className={`dropdown-menu w-100 ${isOpen ? "show" : ""}`}
        style={{ maxHeight: 280, overflowY: "auto" }}
        role="listbox"
        aria-labelledby={id}
      >
        {filteredOptions.length === 0 && (
          <div className="dropdown-item text-muted">{emptyText}</div>
        )}

        {filteredOptions.map((opt) => {
          const isSelected = opt.value === value
          return (
            <button
              key={String(opt.value)}
              type="button"
              className={`dropdown-item d-flex justify-content-between align-items-center ${
                isSelected ? "active" : ""
              }`}
              onClick={() => selectOption(opt)}
              role="option"
              aria-selected={isSelected}
            >
              <span className="text-truncate">{opt.label}</span>
              {isSelected && <span className="ms-2">✓</span>}
            </button>
          )
        })}
      </div>
    </div>
  )
}
