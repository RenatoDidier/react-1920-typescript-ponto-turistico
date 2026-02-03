import { Tourism, TourismAdmin } from "./api";

export interface AdminTouristAttractionResponse {
  items: TourismAdmin[]
}

type PaginatedResponse<T> = {
  items: T[]
  totalItems: number
}

export type GetTourismResponse = PaginatedResponse<Tourism>