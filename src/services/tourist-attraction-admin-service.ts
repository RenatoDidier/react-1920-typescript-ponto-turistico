import { api } from "@/api/axios"
import { TourismAdmin, TourismAdminForm } from "@/types/api"
import {
  CreateTouristAttractionRequest,
  UpdateTouristAttractionRequest,
  PagedTouristAttractionRequest
} from "@/types/request"
import { GetTourismResponse } from "@/types/response"
import { AdminTouristAttractionResponse } from "@/types/response"

export const TouristAttractionAdminService = {
  async listAll(): Promise<TourismAdmin[]> {
    const response = await api.get<AdminTouristAttractionResponse>(
      "/api/TouristAttractions/Admin/List"
    )

    return response.data.items.map((item) => ({
      id: item.id,
      title: item.title,
      description: item.description,
      city: item.city,
      uf: item.uf,
      reference: item.reference,
      createdAt: item.createdAt
    }))
  },

  async listPaged(request: PagedTouristAttractionRequest): Promise<GetTourismResponse> {
    const response = await api.post("/api/TouristAttractions/List", request)

    return response.data
  },

  async create(data: TourismAdminForm): Promise<void> {
    const request: CreateTouristAttractionRequest = {
      title: data.title!,
      city: data.city!,
      uf: data.uf!,
      reference: data.reference!,
      description: data.description!
    }

    await api.post("/api/TouristAttractions", request)
  },

  async update(data: TourismAdminForm): Promise<void> {
    const request: UpdateTouristAttractionRequest = {
      id: data.id!,
      title: data.title!,
      city: data.city!,
      uf: data.uf!,
      reference: data.reference!,
      description: data.description!
    }

    await api.put("/api/TouristAttractions", request)
  },

  async delete(id: string): Promise<void> {
    await api.delete(`/api/TouristAttractions/Delete/${id}`)
  }
}
