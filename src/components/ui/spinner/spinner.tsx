type SpinnerProps = {
  message?: string
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark"
  size?: "sm" | "md"
}

export default function Spinner({
  message = "",
  color = "primary",
  size = "md"
}: SpinnerProps) {
  return (
    <div className="d-flex align-items-center gap-2" role="status" aria-live="polite">
      <div
        className={`spinner-border text-${color} ${
          size === "sm" ? "spinner-border-sm" : ""
        }`}
      >
        <span className="visually-hidden">{message}</span>
      </div>

      {message && <span className={`text-${color} small`}>{message}</span>}
    </div>
  )
}
