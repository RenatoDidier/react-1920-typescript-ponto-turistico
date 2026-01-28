export const paths = {
  home: {
    getHref: () => '/app',
  },
  app: {
    listarTurismo: {
      getHref: () => '/app/turismo/listar',
    },
    cadastrarTurismo: {
      getHref: () => '/app/turismo/admin/cadastrar',
    },
  },

} as const;
