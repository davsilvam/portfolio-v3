export interface Project {
  name: string
  category: string
  description: string
  image_url: string
  language: string
  deploy_link: string
  repository_link: string
}

export const projects: Project[] = [
  {
    image_url: '/parsi-badge.png',
    name: 'davsilvam/parsi-app',
    category: 'Gerenciador de Finanças',
    description:
      '💸 A Parsi é uma aplicação web que ajuda a registrar suas transações e auxilia no melhor gerenciamento dos gastos.',
    language: 'Vue.js',
    deploy_link: 'https://parsi-app.vercel.app',
    repository_link: 'https://github.com/davsilvam/parsi-app'
  },
  {
    image_url: '/movieshelf-badge.png',
    name: 'davsilvam/movieshelf',
    category: 'Estante de Filmes',
    description:
      '🎥 A Movieshelf é uma estante virtual, na qual você pode adicionar filmes à sua estante, favoritar ou salvar filmes para sua próxima sessão.',
    language: 'React.js',
    deploy_link: 'https://movieshelf-two.vercel.app',
    repository_link: 'https://github.com/davsilvam/movieshelf'
  },
  {
    image_url: '/towo-badge.png',
    name: 'davsilvam/towo-list',
    category: 'Registro de Treinos',
    description:
      '💪 ToWo é uma aplicação voltado para o registro de suas atividades físicas, especificamente, atividades que envolvam séries de exercícios.',
    language: 'Vue.js',
    deploy_link: 'https://towo-list.vercel.app',
    repository_link: 'https://github.com/davsilvam/towo-list'
  },
  {
    image_url: '/parsi-badge.png',
    name: 'davsilvam/parsi-landing-page',
    category: 'Landing Page',
    description:
      '💸 Esta é uma Landing Page que apresenta meu outro projeto chamado Parsi.',
    language: 'React.js',
    deploy_link: 'https://parsi-landing-page.vercel.app',
    repository_link: 'https://github.com/davsilvam/parsi-landing-page'
  },
  {
    image_url: '/winterman-badge.png',
    name: 'davsilvam/winterman',
    category: 'Consultor do Tempo',
    description:
      '☃️ O Winterman é uma aplicação que traz o tempo da cidade que o usuário pesquisar.',
    language: 'Vue.js',
    deploy_link: 'https://winterman-app.vercel.app',
    repository_link: 'https://github.com/davsilvam/winterman-app'
  }
]
