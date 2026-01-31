export const paths = {
  home: {
    getHref: () => "/app"
  },
  app: {
    tourismList: {
      getHref: () => "/app/turismo/listar"
    },
    tourismRegister: {
      getHref: () => "/app/turismo/admin/cadastrar"
    }
  }
} as const
