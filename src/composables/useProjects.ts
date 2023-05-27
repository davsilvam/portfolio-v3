export interface Project {
  name: string
  description: string
  language: string
  deploy_link: string
  repository_link: string
}

export const projects: Project[] = [
  // {
  //   name: 'davsilvam/parsi-app',
  //   description:
  //     '💸 A Parsi é uma aplicação web que ajuda a registrar suas transações e auxilia no melhor gerenciamento dos gastos.',
  //   language: 'Vue',
  //   deploy_link: 'https://parsi-app.vercel.app',
  //   repository_link: 'https://github.com/davsilvam/parsi-app'
  // },
  {
    name: 'davsilvam/movieshelf',
    description:
      '🎥 A Movieshelf é uma estante virtual, na qual você pode adicionar filmes à sua estante, favoritar ou salvar filmes para sua próxima sessão.',
    language: 'TypeScript',
    deploy_link: 'https://movieshelf-two.vercel.app',
    repository_link: 'https://github.com/davsilvam/movieshelf'
  },
  {
    name: 'davsilvam/towo-list',
    description:
      '💪 ToWo é uma aplicação voltado para o registro de suas atividades físicas, especificamente, atividades que envolvam séries de exercícios.',
    language: 'Vue',
    deploy_link: 'https://towo-list.vercel.app',
    repository_link: 'https://github.com/davsilvam/towo-list'
  },
  {
    name: 'davsilvam/parsi-landing-page',
    description:
      '💸 Esta é uma Landing Page que apresenta meu outro projeto chamado Parsi.',
    language: 'TypeScript',
    deploy_link: 'https://parsi-landing-page.vercel.app',
    repository_link: 'https://github.com/davsilvam/parsi-landing-page'
  },
  {
    name: 'davsilvam/winterman',
    description:
      '☃️ O Winterman é uma aplicação que traz o tempo da cidade que o usuário pesquisar.',
    language: 'Vue',
    deploy_link: 'https://winterman-app.vercel.app',
    repository_link: 'https://github.com/davsilvam/winterman-app'
  }
]
