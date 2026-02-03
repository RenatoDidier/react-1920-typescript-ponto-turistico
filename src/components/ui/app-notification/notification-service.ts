export type NotificationType = "success" | "danger"

type NotificationData = {
  message: string
  type: NotificationType
}

let showNotification: ((data: NotificationData) => void) | null = null

export function registerNotifier(
  fn: (data: NotificationData) => void
) {
  showNotification = fn
}

export function notify(message: string, type: NotificationType = "success") {
  showNotification?.({ message, type })
}