import { connect } from "@/utilities/dbConfig";
import Post from "@/models/Post";
import SEO from "@/components/SEO";

async function fetchPost(slug) {
  await connect();
  const decodeSlug = decodeURIComponent(slug);
  console.log(decodeSlug, 'slug');

  const post = await Post.findOne({ slug: decodeSlug });
  if (!post) throw new Error('Post not found');
  return post;
}

export default async function BlogPost({ params }) {
  const post = await fetchPost(params.slug);
  const url = process.env.NEXT_PUBLIC_BASE_URL + '/blog/' + params.slug;
  console.log(url, 'url');

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <SEO
        title={post.title}
        description={post.description}
        url={url}
        image={post.image}
        keywords={post.keywords}
      />

      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Post Header */}
        <div className="relative">
          {post.image && (
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-72 object-cover"
            />
          )}
          <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent p-4">
            <h1 className="text-4xl font-bold text-white">{post.title}</h1>
          </div>
        </div>

        {/* Post Content */}
        <div className="p-6">
          <p className="text-lg text-gray-700 mb-6">{post.description}</p>
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </div>

      {/* Pagination or Back Link (optional) */}
      <div className="flex justify-center mt-8">
        <a
          href="/blog"
          className="px-6 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition duration-300"
        >
          Back to Blog
        </a>
      </div>
    </div>
  );
}
