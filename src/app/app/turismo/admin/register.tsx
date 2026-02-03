import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { paths } from "@/config/paths"

import Table from "@/components/ui/table/table"
import Button from "@/components/ui/button/button"
import Modal from "@/components/ui/modal/modal"
import ComboBox from "@/components/ui/combo-box/combo-box"
import TextInput from "@/components/ui/text-input/text-input"
import { notify } from "@/components/ui/app-notification/notification-service"

import { TourismAdminForm } from "@/types/api"
import { TourismAdmin, ufOptions } from "@/types/api"

import { TouristAttractionAdminService } from "@/services/tourist-attraction-admin-service"

export default function Cadastrar() {
  const navigate = useNavigate()

  const [items, setItems] = useState<TourismAdmin[]>([])

  const [isModalTourismOpen, setModalTourismIsOpen] = useState(false)
  const [isModalConfirmDeleteOpen, setModalConfirmDeleteIsOpen] = useState(false)

  const [selectedTourism, setSelectedTourism] = useState<TourismAdminForm>({
    id: null,
    createdAt: null,
    title: null,
    description: null,
    reference: null,
    city: null,
    uf: null
  })

  useEffect(() => {
    const fetchTouristAttraction = async () => {
      try {
        const data = await TouristAttractionAdminService.listAll()
        setItems(data)
      } catch {
        notify("Ocorreu um erro para listar os seus pontos turísticos", "danger")
      }
    }

    void fetchTouristAttraction()
  }, [])

  async function fetchTouristAttraction() {
    try {
      const data = await TouristAttractionAdminService.listAll()
      setItems(data)
    } catch {
      notify("Ocorreu um erro para listar os seus pontos turísticos", "danger")
    }
  }

  async function handleCreate(): Promise<void> {
    try {
      await TouristAttractionAdminService.create(selectedTourism)
    } catch {
      notify("Ocorreu um erro para criar o ponto turístico", "danger")
    }

    await fetchTouristAttraction()
    closeModalEdit()
  }

  async function handleEdit(): Promise<void> {
    try {
      await TouristAttractionAdminService.update(selectedTourism)
      notify("Ponto turístico alterado com sucesso")
    } catch {
      notify("Ocorreu um erro para alterar o ponto turístico", "danger")
    }

    await fetchTouristAttraction()
    closeModalEdit()
  }

  async function handleConfirmDelete(): Promise<void> {
    try {
      await TouristAttractionAdminService.delete(selectedTourism.id!)
      notify("Ponto turístico excluído com sucesso")
    } catch {
      notify("Ocorreu um erro para excluir o ponto turístico", "danger")
    }

    await fetchTouristAttraction()
    closeModalDelete()
  }

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
      createdAt: null,
      title: null,
      description: null,
      reference: null,
      city: null,
      uf: null
    })
  }

  return (
    <>
      <div className="d-flex justify-content-between mb-4">
        <Button
          id="button-register"
          text="Voltar para Listagem"
          color="light"
          onClick={() => navigate(paths.app.tourismList.getHref())}
        />
        <Button
          id="button-register"
          text="Adicionar"
          onClick={() => setModalTourismIsOpen(true)}
        />
      </div>
      <Table<TourismAdmin>
        rows={items}
        getKey={(row) => row.id!}
        getDataCriacao={(row) => row.createdAt!}
        getTitulo={(row) => row.title!}
        onEdit={(row) => openModalEdit(row)}
        onDelete={(row) => openModalConfirmDelete(row)}
      />

      <Modal
        size="xl"
        isOpen={isModalTourismOpen}
        title="Edição"
        hasFooter={true}
        buttonConfirmLabel={selectedTourism.id ? "Editar" : "Salvar"}
        onConfirm={() => (selectedTourism.id ? handleEdit() : handleCreate())}
        onClose={() => closeModalEdit()}
      >
        <section className="d-flex flex-wrap align-items-start justify-content-between p-4">
          <div className="col-12">
            <TextInput
              id="name-tourism"
              label="Nome"
              value={selectedTourism.title}
              onChange={(value) =>
                setSelectedTourism((prev) => ({
                  ...prev,
                  title: value
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
              <strong>{selectedTourism?.title}</strong> ? Essa ação é irreversível.
            </p>
          </section>
        </div>
      </Modal>
    </>
  )
}
