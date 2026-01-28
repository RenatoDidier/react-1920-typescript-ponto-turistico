export type Tourism = {
  name: string;
  description: string;
  reference: string;
  city: string;
  uf: string;
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