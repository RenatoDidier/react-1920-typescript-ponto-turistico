import { RouteObject } from "react-router-dom"
import Listar from "@/app/app/turismo/listar"
import Cadastrar from "@/app/app/turismo/admin/cadastrar"

const turismoRoutes: RouteObject[] = [
  {
    path: "/app/turismo/listar",
    element: <Listar />
  },
  {
    path: "/app/turismo/admin/cadastrar",
    element: <Cadastrar />
  }
]

export default turismoRoutes
