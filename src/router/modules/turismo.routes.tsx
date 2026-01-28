import { RouteObject } from "react-router-dom";
import Listar from "@/app/app/turismo/Listar";
import Cadastrar from "@/app/app/turismo/admin/Cadastrar";

const turismoRoutes: RouteObject[] = [
  {
    path: "/app/turismo/listar",
    element: <Listar />,
  },
  {
    path: "/app/turismo/admin/cadastrar",
    element: <Cadastrar />,
  },
];

export default turismoRoutes;
