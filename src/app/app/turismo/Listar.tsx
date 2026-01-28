import { useState } from "react"
import reactLogo from "@/assets/react.svg"
import Button from "@/components/ui/button/button"

import { tourismMock } from "@/mocks/tourism.mock"

export default function Listar() {
  const [searchTurism, setSearchTurism] = useState<string>("")
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isSearching, setIsSearching] = useState<boolean>(false)

  function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchTurism(event.target.value)
  }

  async function handleSearchSubmit() {
    if (!searchTurism.trim() && !isSearching) {
      return
    }

    try {
      setIsLoading(true)
      setIsSearching(true)

      console.log("Pesquisando por:", tourismMock)

      await new Promise((resolve) => setTimeout(resolve, 1000))
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <div className="d-flex align-items-center justify-content-between">
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <Button id="button-register" text="Cadastrar um ponto turístico" />
      </div>
      <div className="d-flex gap-4">
        <input
          id="input-search"
          className="form-control"
          type="text"
          placeholder="Digite um termo para buscar um ponto turístico..."
          aria-label="Digite um termo para buscar um ponto turístico..."
          value={searchTurism}
          autoFocus
          onChange={handleSearchChange}
        ></input>
        <Button
          id="button-search"
          text="Buscar"
          isLoading={isLoading}
          onClick={handleSearchSubmit}
        />
      </div>
    </>
  )
}
