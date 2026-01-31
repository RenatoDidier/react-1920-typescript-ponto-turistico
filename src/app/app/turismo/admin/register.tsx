import { useState } from "react"

import Table from "@/components/ui/table/table"
import Button from "@/components/ui/button/button"
import Modal from "@/components/ui/modal/modal"
import ComboBox, { ComboBoxOption } from "@/components/ui/combo-box/combo-box"
import TextInput from "@/components/ui/text-input/text-input"

import { TourismAdminForm } from "@/types/api"
import { tourismAdminMock } from "@/mocks/tourism.mock"

export default function Cadastrar() {
  type Uf = "SP" | "RJ" | "MG" | "PR"
  const ufOptions: ComboBoxOption<Uf>[] = [
    { label: "SP", value: "SP" },
    { label: "RJ", value: "RJ" },
    { label: "MG", value: "MG" },
    { label: "PR", value: "PR" }
  ]

  const [isModalTourismOpen, setModalTourismIsOpen] = useState(false)
  const [isModalConfirmDeleteOpen, setModalConfirmDeleteIsOpen] = useState(false)
  const [selectedTourism, setSelectedTourism] = useState<TourismAdminForm>({
    id: null,
    dataCriacao: null,
    name: null,
    description: null,
    reference: null,
    city: null,
    uf: null
  })

  function openModalEdit(tourism: TourismAdminForm): void {
    setSelectedTourism(tourism)
    setModalTourismIsOpen(true)
  }
  function closeModalEdit(): void {
    cleanTourismObject()
    setModalTourismIsOpen(false)
  }

  function openModalConfirmDelete(tourism: TourismAdminForm): void {
    setSelectedTourism(tourism)
    setModalConfirmDeleteIsOpen(true)
  }
  function closeModalDelete(): void {
    cleanTourismObject()
    setModalConfirmDeleteIsOpen(false)
  }

  function cleanTourismObject(): void {
    setSelectedTourism({
      id: null,
      dataCriacao: null,
      name: null,
      description: null,
      reference: null,
      city: null,
      uf: null
    })
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
      <Table<TourismAdminForm>
        rows={tourismAdminMock.data}
        getKey={(row) => row.id!}
        getDataCriacao={(row) => row.dataCriacao!}
        getTitulo={(row) => row.name!}
        onEdit={(row) => openModalEdit(row)}
        onDelete={(row) => openModalConfirmDelete(row)}
      />

      <Modal
        size="xl"
        isOpen={isModalTourismOpen}
        title="Edição"
        hasFooter={true}
        buttonConfirmLabel={selectedTourism.id ? "Editar" : "Salvar"}
        onConfirm={() => handleConfirmDelete()}
        onClose={() => closeModalEdit()}
      >
        <section className="d-flex flex-wrap align-items-start justify-content-between p-4">
          <div className="col-12">
            <TextInput
              id="name-tourism"
              label="Nome"
              value={selectedTourism.name}
              onChange={(value) =>
                setSelectedTourism((prev) => ({
                  ...prev,
                  name: value
                }))
              }
              required
            />
          </div>
          <div className="col-3">
            <ComboBox
              id="tourism-uf"
              options={ufOptions}
              label="UF"
              value={selectedTourism.uf}
              onChange={(value) =>
                setSelectedTourism((prev) => ({
                  ...prev,
                  uf: value
                }))
              }
              clearable={false}
              required
              placeholder="Selecionar"
            />
          </div>
          <div className="col-8">
            <TextInput
              id="city-tourism"
              label="Cidade"
              value={selectedTourism.city}
              onChange={(value) =>
                setSelectedTourism((prev) => ({
                  ...prev,
                  city: value
                }))
              }
              required
              maxLength={200}
            />
          </div>
          <div className="col-12">
            <TextInput
              id="description-tourism"
              label="Descrição"
              value={selectedTourism.description}
              onChange={(value) =>
                setSelectedTourism((prev) => ({
                  ...prev,
                  description: value
                }))
              }
              required
            />
          </div>
          <div className="col-12">
            <TextInput
              id="reference-tourism"
              label="Referência"
              value={selectedTourism.reference}
              onChange={(value) =>
                setSelectedTourism((prev) => ({
                  ...prev,
                  reference: value
                }))
              }
              required
            />
          </div>
        </section>
      </Modal>

      <Modal
        isOpen={isModalConfirmDeleteOpen}
        title="Confirmar Exclusão"
        onClose={() => closeModalDelete()}
        onConfirm={() => handleConfirmDelete()}
        hasFooter={true}
        buttonConfirmSize="btn-sm"
        buttonConfirmColor="danger"
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
