import { RouterProvider } from "react-router-dom"
import { router } from "@/router"
import AppNotification from "@/components/ui/app-notification/app-notification"

function App() {
  return (
    <>
      <AppNotification />
      <RouterProvider router={router} />
    </>
  )
}

export default App
