import type { Project } from '~/types/github'

export function useProjects() {
  const { data: projects, error } = useFetch<Project[]>(
    'https://api.github.com/users/davsilvam/repos',
    {
      transform: data =>
        data.sort((a, b) => {
          const firstDate = new Date(a.pushed_at).getTime()
          const secondDate = new Date(b.pushed_at).getTime()

          return firstDate > secondDate
            ? -1
            : 1
        }).filter(
          project => project.name !== 'davsilvam',
        ),
    },
  )

  if (error.value) {
    throw new Error(error.value.message, {
      cause: error.value.cause,
    })
  }

  return {
    projects,
  }
}
