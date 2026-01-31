export interface Tourism {
  name: string;
  description: string;
  reference: string;
  city: string;
  uf: string;
}

export interface TourismAdmin extends Tourism {
  id: string;
  dataCriacao: string;
}

type PaginationMeta = {
  page: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
}

type PaginatedResponse<T> = {
  data: T[],
  meta: PaginationMeta
}


export type GetTourismResponse = PaginatedResponse<Tourism>;
export type GetTourismAdminResponse = PaginatedResponse<TourismAdmin>;