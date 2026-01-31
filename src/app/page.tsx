import reactLogo from "@/assets/react.svg"
import viteLogo from "/vite.svg"
import { paths } from "@/config/paths"
import Button from "@/components/ui/button/button"
import { useNavigate } from "react-router-dom"
import "@/App.css"

function Home() {
  const navigate = useNavigate()

  return (
    <>
      <section className="home-card">
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h3>Projeto Pontos Turísticos</h3>
        <div className="card d-flex align-items-center">
          <Button
            id="button-register"
            text="Acessar"
            onClick={() => navigate(paths.app.tourismList.getHref())}
          />
        </div>
      </section>
    </>
  )
}

export default Home
