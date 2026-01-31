import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { paths } from "@/config/paths"

import reactLogo from "@/assets/react.svg"
import Button from "@/components/ui/button/button"
import Modal from "@/components/ui/modal/modal"
import PaginatedList from "@/components/ui/paginated-list/paginated-list"

import { Tourism } from "@/types/api"
import { tourismMock } from "@/mocks/tourism.mock"

export default function Listar() {
  const navigate = useNavigate()
  const [searchTurism, setSearchTurism] = useState<string>("")
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isSearching, setIsSearching] = useState<boolean>(false)
  const [isOpen, setModalIsOpen] = useState(false)
  const [selectedTourism, setSelectedTourism] = useState<Tourism | null>(null)

  function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchTurism(event.target.value)
  }

  function openModalDetails(turismOption: Tourism): void {
    setSelectedTourism(turismOption)
    setModalIsOpen(true)
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
      <div>
        <div className="d-flex align-items-center justify-content-between">
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
          <Button
            id="button-register"
            text="Cadastrar um ponto turístico"
            onClick={() => navigate(paths.app.cadastrarTurismo.getHref())}
          />
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
        <div>
          <PaginatedList<Tourism>
            items={tourismMock.data}
            totalItems={tourismMock.meta.totalItems}
            itemsPerPage={tourismMock.meta.pageSize}
            getKey={(item) => item.reference}
            renderItem={(item, index) => (
              <>
                <div className="d-flex flex-column">
                  <strong>{item.name}</strong>
                  <small className="mb-2">{item.description}</small>
                  <Button
                    id={`button-details-${index}`}
                    text="ver detalhes"
                    color="light"
                    size="btn-sm"
                    onClick={() => openModalDetails(item)}
                  />
                </div>
              </>
            )}
          />
        </div>
        <Modal isOpen={isOpen} title="Detalhe" onClose={() => setModalIsOpen(false)}>
          <div className="d-flex flex-column gap-3">
            <section>
              <strong>Nome: </strong>
              <span>{selectedTourism?.name}</span>
            </section>
            <section>
              <strong>UF/Cidade: </strong>
              <span>
                {selectedTourism?.uf}/{selectedTourism?.city}
              </span>
            </section>
            <section>
              <strong>Referência: </strong>
              <span>{selectedTourism?.reference}</span>
            </section>
            <section>
              <strong>Descritivo: </strong>
              <span>{selectedTourism?.description}</span>
            </section>
          </div>
        </Modal>
      </div>
    </>
  )
}
