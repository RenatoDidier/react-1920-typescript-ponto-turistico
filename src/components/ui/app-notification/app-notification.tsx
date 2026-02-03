import { useEffect, useState } from "react"
import { registerNotifier, NotificationType } from "./notification-service"

type NotificationData = {
  message: string
  type: NotificationType
}

export default function AppNotification() {
  const [notification, setNotification] = useState<NotificationData | null>(null)

  useEffect(() => {
    registerNotifier((data) => {
      setNotification(data)

      setTimeout(() => {
        setNotification(null)
      }, 1000)
    })
  }, [])

  if (!notification) return null

  return (
    <div className="position-fixed top-0 end-0 p-3" style={{ zIndex: 1055 }}>
      <div className={`alert alert-${notification.type} shadow`}>
        {notification.message}
      </div>
    </div>
  )
}
