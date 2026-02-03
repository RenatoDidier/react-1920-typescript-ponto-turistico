import { useMemo, useState, useEffect } from "react"
import Pagination from "@/components/ui/pagination/pagination"

type PaginatedListProps<T> = {
  items: T[]
  itemsPerPage: number
  totalItems: number
  renderItem: (item: T, index: number) => React.ReactNode
  getKey: (item: T) => string

  onPageChange: (page: number) => void
  resetPageRef?: React.MutableRefObject<(() => void) | null>
}

export default function PaginatedList<T>({
  items,
  itemsPerPage,
  totalItems,
  renderItem,
  getKey,
  onPageChange,
  resetPageRef
}: PaginatedListProps<T>) {
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(totalItems / itemsPerPage)

  const paginatedItems = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage
    const end = start + itemsPerPage
    return items.slice(start, end)
  }, [items, currentPage, itemsPerPage])

  function handlePageChange(page: number) {
    setCurrentPage(page)
    onPageChange(page)
  }

  function resetPage() {
    setCurrentPage(1)
    onPageChange(1)
  }

  useEffect(() => {
    if (!resetPageRef) return

    resetPageRef.current = resetPage

    return () => {
      resetPageRef.current = null
    }
  }, [resetPageRef])

  return (
    <>
      <ul className="list-group mt-4 mb-3">
        {paginatedItems.map((item, index) => (
          <li
            key={getKey(item)}
            className="list-group-item mb-3"
            style={{ border: "none" }}
          >
            {renderItem(item, index)}
          </li>
        ))}
      </ul>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  )
}
