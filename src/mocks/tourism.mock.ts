import { GetTourismResponse } from "@/types/api";

export const tourismMock: GetTourismResponse = {
  data: [
    {
      name: "Cristo Redentor",
      description: "Uma das sete maravilhas do mundo moderno",
      reference: "CRJ001",
      city: "Rio de Janeiro",
      uf: "RJ",
    },
    {
      name: "Pelourinho",
      description: "Centro histórico de Salvador",
      reference: "SSA002",
      city: "Salvador",
      uf: "BA",
    },
    {
      name: "Cataratas do Iguaçu",
      description: "Conjunto de quedas d’água na fronteira do Brasil",
      reference: "FOZ003",
      city: "Foz do Iguaçu",
      uf: "PR",
    },
  ],
  meta: {
    page: 1,
    pageSize: 10,
    totalItems: 3,
    totalPages: 1,
  },
};
