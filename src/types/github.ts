export interface Project {
  id: number
  name: string
  private: boolean
  html_url: string
  description: string
  url: string
  created_at: string
  pushed_at: string
  updated_at: string
  homepage: string
  stargazers_count: number
  language?: string
  topics: string[]
}
