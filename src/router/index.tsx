import { createBrowserRouter, RouteObject } from "react-router-dom";
import NotFound from "@/app/not-found";
import Page from "@/app/page";

// Importa automaticamente todos os módulos de rotas
const modules = import.meta.glob("./modules/*.routes.tsx", {
  eager: true,
}) as Record<string, { default: RouteObject[] }>;

const moduleRoutes = Object.values(modules).flatMap(
  (m) => m.default
);

const routes: RouteObject[] = [
  ...moduleRoutes,
  {
    path:"/app",
    element: <Page />
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export const router = createBrowserRouter(routes);
