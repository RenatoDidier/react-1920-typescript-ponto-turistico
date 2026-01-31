import { useState } from "react"

import Table from "@/components/ui/table/table"
import Button from "@/components/ui/button/button"
import Modal from "@/components/ui/modal/modal"

import { TourismAdmin } from "@/types/api"
import { tourismAdminMock } from "@/mocks/tourism.mock"

export default function Cadastrar() {
  const [isModalTourismOpen, setModalTourismIsOpen] = useState(false)
  const [isModalConfirmDeleteOpen, setModalConfirmDeleteIsOpen] = useState(false)
  const [selectedTourism, setSelectedTourism] = useState<TourismAdmin | null>(null)

  function openModalEdit(tourism: TourismAdmin): void {
    setSelectedTourism(tourism)
    setModalTourismIsOpen(true)
  }
  function closeModalEdit(): void {
    cleanTourismObject()
    setModalTourismIsOpen(false)
  }

  function openModalConfirmDelete(tourism: TourismAdmin): void {
    setSelectedTourism(tourism)
    setModalConfirmDeleteIsOpen(true)
  }
  function closeModalDelete(): void {
    cleanTourismObject()
    setModalConfirmDeleteIsOpen(false)
  }

  function cleanTourismObject(): void {
    setSelectedTourism(null)
  }

  function handleConfirmDelete(): void {
    const idTourismDelete = selectedTourism?.id
    console.log("Teste para ver informação", idTourismDelete)

    closeModalDelete()
  }

  return (
    <>
      <div className="d-flex justify-content-end mb-4">
        <Button
          id="button-register"
          text="Adicionar"
          onClick={() => setModalTourismIsOpen(true)}
        />
      </div>
      <Table<TourismAdmin>
        rows={tourismAdminMock.data}
        getKey={(row) => row.id}
        getDataCriacao={(row) => row.dataCriacao}
        getTitulo={(row) => row.name}
        onEdit={(row) => openModalEdit(row)}
        onDelete={(row) => openModalConfirmDelete(row)}
      />

      <Modal isOpen={isModalTourismOpen} title="Edição" onClose={() => closeModalEdit()}>
        <div className="d-flex flex-column gap-3">
          <section>
            <strong>Nome: </strong>
            <p>{selectedTourism?.name}</p>
          </section>
        </div>
      </Modal>

      <Modal
        isOpen={isModalConfirmDeleteOpen}
        title="Confirmar Exclusão"
        onClose={() => closeModalDelete()}
        onConfirm={() => handleConfirmDelete()}
        hasFooter={true}
      >
        <div className="d-flex flex-column gap-3">
          <section>
            <p>
              Você tem certeza que deseja excluir o ponto turístico:{" "}
              <strong>{selectedTourism?.name}</strong> ? Essa ação é irreversível.
            </p>
          </section>
        </div>
      </Modal>
    </>
  )
}
