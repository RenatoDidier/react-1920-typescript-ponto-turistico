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

export type TourismAdminForm = {
  id: string | null;
  dataCriacao: string | null;
  name: string | null;
  description: string | null;
  reference: string | null;
  city: string | null;
  uf: string | null;
};

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