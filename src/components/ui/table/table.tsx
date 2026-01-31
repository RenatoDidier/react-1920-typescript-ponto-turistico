import "./table.css"

type TableProps<T> = {
  rows: T[]
  getKey: (row: T) => string
  getDataCriacao: (row: T) => string
  getTitulo: (row: T) => string
  onEdit?: (row: T) => void
  onDelete?: (row: T) => void
}

export default function Table<T>({
  rows,
  getKey,
  getDataCriacao,
  getTitulo,
  onEdit,
  onDelete
}: TableProps<T>) {
  return (
    <div className="table-responsive table-wrapper">
      <table className="table table-hover align-middle">
        <thead>
          <tr>
            <th className="text-nowrap">Data de criação</th>
            <th>Título</th>
            <th style={{ width: "120px" }} />
          </tr>
        </thead>

        <tbody>
          {rows.map((row) => (
            <tr key={getKey(row)}>
              <td className="text-nowrap">{getDataCriacao(row)}</td>

              <td className="w-100">{getTitulo(row)}</td>

              <td className="text-end">
                <div className="d-inline-flex gap-2">
                  {onEdit && (
                    <button
                      className="btn btn-sm btn-outline-primary"
                      onClick={() => onEdit(row)}
                      aria-label="Editar"
                    >
                      Editar
                    </button>
                  )}

                  {onDelete && (
                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => onDelete(row)}
                      aria-label="Excluir"
                    >
                      Excluir
                    </button>
                  )}
                </div>
              </td>
            </tr>
          ))}

          {rows.length === 0 && (
            <tr>
              <td colSpan={3} className="text-center text-muted py-4">
                Nenhum registro encontrado
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
