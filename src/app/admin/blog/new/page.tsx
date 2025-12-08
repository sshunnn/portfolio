import BlogNewTemplate from "@/views/templates/Admin/BlogNewTemplate";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "New Post | Admin",
  description: "Create a new blog post",
  robots: "noindex", // Hide from search engines
};

export default function AdminBlogNewPage() {
  return (
    <BlogNewTemplate />
  );
}
