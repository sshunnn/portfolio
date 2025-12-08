import BlogListTemplate from "@/views/templates/Blog/BlogListTemplate";
import { getAllPosts } from "@/models/blogModel";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Blog | Shun's Portfolio",
  description: "日々の学びとか、自然の中でのリフレッシュとか。",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <BlogListTemplate posts={posts} />
  );
}
