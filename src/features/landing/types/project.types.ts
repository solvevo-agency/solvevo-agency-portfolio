export interface Project {
  id: string
  slug: string
  title: string
  description: string
  coverImage: string
  tags: string[]
  liveUrl: string
  featured: boolean
  completedAt: string // ISO date
}
