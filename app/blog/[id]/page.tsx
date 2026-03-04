import { blogPosts } from "@/lib/data"
import { BlogPostContent } from "./blog-post-content"
import { notFound } from "next/navigation"

export function generateStaticParams() {
  return blogPosts.map((post) => ({ id: post.id }))
}

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const post = blogPosts.find((p) => p.id === id)

  if (!post) {
    notFound()
  }

  return <BlogPostContent post={post} />
}
