import { type Project } from '~/types/github'

export function useProjects() {
  const projects = useState<Project[]>('projects', () => [])

  const { data, error } = useFetch<Project[]>(
    'https://api.github.com/users/davsilvam/repos',
    {
      transform: data =>
        data.sort((a, b) => {
          const firstDate = new Date(a.pushed_at).getTime()
          const secondDate = new Date(b.pushed_at).getTime()

          if (firstDate > secondDate)
            return -1

          else
            return 1
        }),
    },
  )

  if (error.value) {
    throw new Error(error.value.message, {
      cause: error.value.cause,
    })
  }

  if (data.value) {
    projects.value = data.value.filter(
      project => project.name !== 'davsilvam',
    )
  }

  return {
    projects,
  }
}
