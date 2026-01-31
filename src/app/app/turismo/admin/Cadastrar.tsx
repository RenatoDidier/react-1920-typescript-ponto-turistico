import Table from "@/components/ui/table/table"
import Button from "@/components/ui/button/button"

import { TourismAdmin } from "@/types/api"
import { tourismAdminMock } from "@/mocks/tourism.mock"

export default function Cadastrar() {
  return (
    <>
      <div className="d-flex justify-content-end mb-4">
        <Button id="button-register" text="Adicionar" />
      </div>
      <Table<TourismAdmin>
        rows={tourismAdminMock.data}
        getKey={(row) => row.id}
        getDataCriacao={(row) => row.dataCriacao}
        getTitulo={(row) => row.name}
        onEdit={(row) => console.log("Editar", row)}
        onDelete={(row) => console.log("Excluir", row)}
      />
    </>
  )
}
