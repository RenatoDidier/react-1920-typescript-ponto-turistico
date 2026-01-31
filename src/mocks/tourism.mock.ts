import { GetTourismResponse, GetTourismAdminResponse } from "@/types/api"

export const tourismMock: GetTourismResponse = {
  data: [
    {
      name: "Cristo Redentor",
      description: "Uma das sete maravilhas do mundo moderno",
      reference: "CRJ001",
      city: "Rio de Janeiro",
      uf: "RJ"
    },
    {
      name: "Pelourinho",
      description: "Centro histórico de Salvador",
      reference: "SSA002",
      city: "Salvador",
      uf: "BA"
    },
    {
      name: "Cataratas do Iguaçu",
      description: "Conjunto de quedas d’água na fronteira do Brasil",
      reference: "FOZ003",
      city: "Foz do Iguaçu",
      uf: "PR"
    },
    {
      name: "Pão de Açúcar",
      description: "Morro icônico com vista panorâmica da cidade",
      reference: "RJ004",
      city: "Rio de Janeiro",
      uf: "RJ"
    },
    {
      name: "Lençóis Maranhenses",
      description: "Parque nacional com dunas e lagoas cristalinas",
      reference: "MA005",
      city: "Barreirinhas",
      uf: "MA"
    },
    {
      name: "Fernando de Noronha",
      description: "Arquipélago famoso por praias e vida marinha",
      reference: "PE006",
      city: "Fernando de Noronha",
      uf: "PE"
    },
    {
      name: "Chapada Diamantina",
      description: "Região de trilhas, cachoeiras e formações rochosas",
      reference: "BA007",
      city: "Lençóis",
      uf: "BA"
    },
    {
      name: "Parque Ibirapuera",
      description: "Principal parque urbano da cidade de São Paulo",
      reference: "SP008",
      city: "São Paulo",
      uf: "SP"
    },
    {
      name: "Praia de Jericoacoara",
      description: "Praia famosa por dunas e pôr do sol",
      reference: "CE009",
      city: "Jijoca de Jericoacoara",
      uf: "CE"
    },
    {
      name: "Teatro Amazonas",
      description: "Teatro histórico símbolo do ciclo da borracha",
      reference: "AM010",
      city: "Manaus",
      uf: "AM"
    },
    {
      name: "Museu do Amanhã",
      description: "Museu de ciência e sustentabilidade futurista",
      reference: "RJ011",
      city: "Rio de Janeiro",
      uf: "RJ"
    },
    {
      name: "Serra do Cipó",
      description: "Área natural com cachoeiras e trilhas",
      reference: "MG012",
      city: "Santana do Riacho",
      uf: "MG"
    },
    {
      name: "Ilha do Mel",
      description: "Ilha preservada com praias e natureza",
      reference: "PR013",
      city: "Paranaguá",
      uf: "PR"
    },
    {
      name: "Bonito",
      description: "Destino famoso por rios cristalinos e ecoturismo",
      reference: "MS014",
      city: "Bonito",
      uf: "MS"
    },
    {
      name: "Parque Nacional de Brasília",
      description: "Área de preservação com trilhas e piscinas naturais",
      reference: "DF015",
      city: "Brasília",
      uf: "DF"
    },
    {
      name: "Praia dos Carneiros",
      description: "Praia paradisíaca com águas claras e coqueiros",
      reference: "PE016",
      city: "Tamandaré",
      uf: "PE"
    },
    {
      name: "Cânion do Xingó",
      description: "Cânion navegável no Rio São Francisco",
      reference: "SE017",
      city: "Canindé de São Francisco",
      uf: "SE"
    },
    {
      name: "Parque Estadual de Vila Velha",
      description: "Formações rochosas areníticas impressionantes",
      reference: "PR018",
      city: "Ponta Grossa",
      uf: "PR"
    },
    {
      name: "Praia de Pipa",
      description: "Praia famosa por falésias e golfinhos",
      reference: "RN019",
      city: "Tibau do Sul",
      uf: "RN"
    },
    {
      name: "Serra Gaúcha",
      description: "Região turística com clima europeu e vinícolas",
      reference: "RS020",
      city: "Gramado",
      uf: "RS"
    }
  ],
  meta: {
    page: 1,
    pageSize: 2,
    totalItems: 20,
    totalPages: 1
  }
}

export const tourismAdminMock: GetTourismAdminResponse = {
  data: [
    {
      id: "Cristo Redentor",
      dataCriacao: "01/05/2024",
      name: "Cristo Redentor",
      description: "Uma das sete maravilhas do mundo moderno",
      reference: "CRJ001",
      city: "Rio de Janeiro",
      uf: "RJ"
    },
    {
      id: "Pelourinho",
      dataCriacao: "01/05/2024",
      name: "Pelourinho",
      description: "Centro histórico de Salvador",
      reference: "SSA002",
      city: "Salvador",
      uf: "BA"
    },
    {
      id: "Cataratas do Iguaçu",
      dataCriacao: "01/05/2024",
      name: "Cataratas do Iguaçu",
      description: "Conjunto de quedas d’água na fronteira do Brasil",
      reference: "FOZ003",
      city: "Foz do Iguaçu",
      uf: "PR"
    },
    {
      id: "Pão de Açúcar",
      dataCriacao: "01/05/2024",
      name: "Pão de Açúcar",
      description: "Morro icônico com vista panorâmica da cidade",
      reference: "RJ004",
      city: "Rio de Janeiro",
      uf: "RJ"
    },
    {
      id: "Lençóis Maranhenses",
      dataCriacao: "01/05/2024",
      name: "Lençóis Maranhenses",
      description: "Parque nacional com dunas e lagoas cristalinas",
      reference: "MA005",
      city: "Barreirinhas",
      uf: "MA"
    },
    {
      id: "Fernando de Noronha",
      dataCriacao: "01/05/2024",
      name: "Fernando de Noronha",
      description: "Arquipélago famoso por praias e vida marinha",
      reference: "PE006",
      city: "Fernando de Noronha",
      uf: "PE"
    },
    {
      id: "Chapada Diamantina",
      dataCriacao: "01/05/2024",
      name: "Chapada Diamantina",
      description: "Região de trilhas, cachoeiras e formações rochosas",
      reference: "BA007",
      city: "Lençóis",
      uf: "BA"
    },
    {
      id: "Parque Ibirapuera",
      dataCriacao: "01/05/2024",
      name: "Parque Ibirapuera",
      description: "Principal parque urbano da cidade de São Paulo",
      reference: "SP008",
      city: "São Paulo",
      uf: "SP"
    }
  ],
  meta: {
    page: 1,
    pageSize: 2,
    totalItems: 20,
    totalPages: 1
  }
}
