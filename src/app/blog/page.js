// app/blog/page.js
import SEO from '@/components/SEO';
import BlogPageClient from '@/components/BlogPage';
import seoData from '@/data/seoData';

async function fetchPosts(page = 1) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts?page=${page}`);
  if (!res.ok) return { posts: [], currentPage: 1, totalPages: 1 };
  return res.json();
}

export default async function BlogPage({ searchParams }) {
  const { title, description, url, image, keywords } = seoData.blog;
  const page = parseInt(searchParams.page) || 1;
  const { posts, currentPage, totalPages } = await fetchPosts(page);

  return (
    <>
      <SEO
        title={title}
        description={description}
        url={url}
        image={image}
        keywords={keywords}
      />
      <BlogPageClient posts={posts} currentPage={currentPage} totalPages={totalPages} />
    </>
  );
}
