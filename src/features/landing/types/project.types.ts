export interface Project {
  id: string
  slug: string
  title: string
  description: string
  coverImage: string
  category: string
  tags: string[]
  liveUrl: string
  featured: boolean
  completedAt: string
}
