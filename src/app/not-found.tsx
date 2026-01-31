import { paths } from "@/config/paths"

const NotFoundPage = () => {
  return (
    <div className="mt-52 flex flex-col items-center font-semibold">
      <h1>404 - URL Não Encontrada</h1>
      <p>Desculpe, mas parece que essa URL não existe</p>
      <a href={paths.home.getHref()}>Ir para Home</a>
    </div>
  )
}

export default NotFoundPage
