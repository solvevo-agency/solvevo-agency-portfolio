export interface Blog {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  coverImage: string
  tags: string[]
  readTime: number // minutes
  featured: boolean
  publishedAt: string
}
