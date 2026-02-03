export interface CreateTouristAttractionRequest {
  title: string
  city: string
  uf: string
  reference: string
  description: string
}

export interface UpdateTouristAttractionRequest extends CreateTouristAttractionRequest {
  id: string
}

export interface PagedTouristAttractionRequest {
  pageNumber: number
  pageSize: number
  search?: string
}
