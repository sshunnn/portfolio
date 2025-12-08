import { notFound } from "next/navigation";
import { getPostById, getAllPosts } from "@/models/blogModel";
import BlogDetailTemplate from "@/views/templates/Blog/BlogDetailTemplate";
import { Metadata } from 'next';

type Props = {
  params: { id: string }
};

// Static Params Generation (SSG)
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    id: post.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // await params is required in Next.js 15 for dynamic routes? 
  // Next 15 changes: params access needs awaiting if accessed in async context, 
  // but generateMetadata signature usually takes resolved params or needs await depending on version.
  // In Next 13/14 params is simple object. In Next 15 it might be Promise.
  // Let's assume standard behavior for now, but watch out for Next 15 breaking changes.
  
  // Actually, in Next.js 15, params are promises.
  const { id } = await Promise.resolve(params); 
  const post = getPostById(id);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | Shun's Log`,
    description: post.excerpt,
  };
}

export default async function BlogDetailPage({ params }: Props) {
  // Await params in Next.js 15
  const { id } = await Promise.resolve(params);
  const post = getPostById(id);

  if (!post) {
    notFound();
  }

  return <BlogDetailTemplate post={post} />;
}
