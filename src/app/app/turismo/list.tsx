import { useState, useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"
import { paths } from "@/config/paths"

import reactLogo from "@/assets/react.svg"
import Button from "@/components/ui/button/button"
import Modal from "@/components/ui/modal/modal"
import PaginatedList from "@/components/ui/paginated-list/paginated-list"
import { notify } from "@/components/ui/app-notification/notification-service"

import { Tourism, SearchParams } from "@/types/api"

import { TouristAttractionAdminService } from "@/services/tourist-attraction-admin-service"

export default function Listar() {
  const navigate = useNavigate()

  const [params, setParams] = useState<SearchParams>({
    search: "",
    pageNumber: 1,
    pageSize: 10
  })

  const [items, setItems] = useState<Tourism[]>([])
  const [totalItems, setTotalItems] = useState(0)
  const [loadedPages, setLoadedPages] = useState<number[]>([])

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isSearching, setIsSearching] = useState<boolean>(false)
  const [isOpen, setModalIsOpen] = useState(false)

  const [selectedTourism, setSelectedTourism] = useState<Tourism | null>(null)

  const resetPageRef = useRef<(() => void) | null>(null)

  useEffect(() => {
    const fetchTouristAttraction = async () => {
      try {
        if (items.length === totalItems && totalItems !== 0) return

        const pagesToLoad = getMissingPages(params.pageNumber, loadedPages)

        if (pagesToLoad.length === 0) return

        for (const page of pagesToLoad) {
          const response = await TouristAttractionAdminService.listPaged({
            pageNumber: page,
            pageSize: params.pageSize,
            search: params.search
          })
          setItems((prev) => {
            const map = new Map<string, Tourism>()

            prev.forEach((item) => {
              map.set(item.id, item)
            })

            response.items.forEach((item) => {
              map.set(item.id, item)
            })

            return Array.from(map.values())
          })

          setTotalItems(response.totalItems)
        }

        setLoadedPages((prev) =>
          Array.from(new Set([...prev, ...pagesToLoad])).sort((a, b) => a - b)
        )
      } catch {
        notify("Ocorreu um erro para listar os seus pontos turísticos", "danger")
      }
    }

    void fetchTouristAttraction()
  }, [params.pageNumber])

  async function fetchTouristAttraction() {
    try {
      const response = await TouristAttractionAdminService.listPaged({
        pageNumber: params.pageNumber,
        pageSize: params.pageSize,
        search: params.search
      })

      setItems(response.items)
      setTotalItems(response.totalItems)
    } catch {
      notify("Ocorreu um erro para listar os seus pontos turísticos", "danger")
    }
  }

  async function handleSearchSubmit() {
    if (!params.search.trim() && !isSearching) {
      return
    }

    try {
      setIsLoading(true)
      setIsSearching(true)
      resetPageRef.current?.()
      setLoadedPages([])

      await fetchTouristAttraction()
    } finally {
      setIsLoading(false)
    }
  }

  function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    setParams((prev) => ({
      ...prev,
      search: event.target.value,
      pageNumber: 1
    }))
  }

  async function handlePageChange(page: number) {
    setParams((prev) => ({
      ...prev,
      pageNumber: page
    }))
  }

  function getMissingPages(targetPage: number, loadedPages: number[]): number[] {
    const pages: number[] = []

    for (let page = 1; page <= targetPage; page++) {
      if (!loadedPages.includes(page)) {
        pages.push(page)
      }
    }

    return pages
  }

  function openModalDetails(tourismOption: Tourism): void {
    setSelectedTourism(tourismOption)
    setModalIsOpen(true)
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
            onClick={() => navigate(paths.app.tourismRegister.getHref())}
          />
        </div>
        <div className="d-flex gap-4">
          <input
            id="input-search"
            className="form-control"
            type="text"
            placeholder="Digite um termo para buscar um ponto turístico..."
            aria-label="Digite um termo para buscar um ponto turístico..."
            value={params.search}
            autoFocus
            onChange={handleSearchChange}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearchSubmit()
              }
            }}
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
            items={items}
            totalItems={totalItems}
            itemsPerPage={params.pageSize}
            getKey={(item) => item.id}
            onPageChange={(page) => {
              handlePageChange(page)
            }}
            resetPageRef={resetPageRef}
            renderItem={(item, index) => (
              <>
                <div className="d-flex flex-column">
                  <strong>{item.title}</strong>
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
              <span>{selectedTourism?.title}</span>
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
