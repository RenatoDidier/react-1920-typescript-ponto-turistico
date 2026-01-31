import { useEffect } from "react"
import Button from "@/components/ui/button/button"

type ModalProps = {
  isOpen: boolean
  title?: string
  children: React.ReactNode
  size?: "sm" | "md" | "lg" | "xl"
  closeOnBackdropClick?: boolean
  hasFooter?: boolean
  buttonConfirmLabel?: string
  onClose: () => void
  onConfirm?: () => void
}

function getSizeClass(size: ModalProps["size"]) {
  switch (size) {
    case "sm":
      return "modal-sm"
    case "lg":
      return "modal-lg"
    case "xl":
      return "modal-xl"
    default:
      return ""
  }
}

export default function Modal({
  isOpen,
  title,
  children,
  size = "md",
  closeOnBackdropClick = true,
  hasFooter = false,
  buttonConfirmLabel = "Confirmar",
  onClose,
  onConfirm
}: ModalProps) {
  useEffect(() => {
    if (!isOpen) return

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose()
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, onClose])

  useEffect(() => {
    if (!isOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [isOpen])

  if (!isOpen) return null

  function handleBackdropClick() {
    if (closeOnBackdropClick) {
      onClose()
    }
  }

  return (
    <>
      <div className="modal-backdrop fade show" onClick={handleBackdropClick} />

      <div
        className="modal fade show"
        role="dialog"
        aria-modal="true"
        style={{ display: "block" }}
        onClick={handleBackdropClick}
      >
        <div
          className={`modal-dialog modal-dialog-centered ${getSizeClass(size)}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="modal-content">
            <div className="modal-header">
              {title && <h5 className="modal-title">{title}</h5>}

              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={onClose}
              />
            </div>

            <div className="modal-body">{children}</div>

            {hasFooter && (
              <div className="modal-footer">
                <Button
                  id="confirm-delete-button"
                  text={buttonConfirmLabel}
                  onClick={onConfirm}
                  color="danger"
                  size="btn-sm"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
