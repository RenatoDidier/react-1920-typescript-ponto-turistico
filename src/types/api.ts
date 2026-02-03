import { ComboBoxOption } from "@/components/ui/combo-box/combo-box"

export type SearchParams = {
  search: string
  pageNumber: number
  pageSize: number
}

export interface Tourism {
  id: string
  title: string
  description: string
  reference: string
  city: string
  uf: string
}

export interface TourismAdmin extends Tourism {
  createdAt: string | null
}

export type TourismAdminForm = {
  id: string | null
  createdAt: string | null
  title: string | null
  description: string | null
  reference: string | null
  city: string | null
  uf: string | null
}

type Uf =
  | "AC" | "AL" | "AP" | "AM" | "BA"
  | "CE" | "DF" | "ES" | "GO" | "MA"
  | "MT" | "MS" | "MG" | "PA" | "PB"
  | "PR" | "PE" | "PI" | "RJ" | "RN"
  | "RS" | "RO" | "RR" | "SC" | "SP"
  | "SE" | "TO"

export const ufOptions: ComboBoxOption<Uf>[] = [
  { label: "AC", value: "AC" },
  { label: "AL", value: "AL" },
  { label: "AP", value: "AP" },
  { label: "AM", value: "AM" },
  { label: "BA", value: "BA" },
  { label: "CE", value: "CE" },
  { label: "DF", value: "DF" },
  { label: "ES", value: "ES" },
  { label: "GO", value: "GO" },
  { label: "MA", value: "MA" },
  { label: "MT", value: "MT" },
  { label: "MS", value: "MS" },
  { label: "MG", value: "MG" },
  { label: "PA", value: "PA" },
  { label: "PB", value: "PB" },
  { label: "PR", value: "PR" },
  { label: "PE", value: "PE" },
  { label: "PI", value: "PI" },
  { label: "RJ", value: "RJ" },
  { label: "RN", value: "RN" },
  { label: "RS", value: "RS" },
  { label: "RO", value: "RO" },
  { label: "RR", value: "RR" },
  { label: "SC", value: "SC" },
  { label: "SP", value: "SP" },
  { label: "SE", value: "SE" },
  { label: "TO", value: "TO" }
]

