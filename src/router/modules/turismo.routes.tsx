import { RouteObject } from "react-router-dom"
import List from "@/app/app/turismo/list"
import Register from "@/app/app/turismo/admin/register"

const turismoRoutes: RouteObject[] = [
  {
    path: "/app/turismo/listar",
    element: <List />
  },
  {
    path: "/app/turismo/admin/cadastrar",
    element: <Register />
  }
]

export default turismoRoutes
