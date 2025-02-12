// import { connectDB } from "@/lib/mongodb";
// import Post from "@/models/Post";
import { NextResponse } from "next/server";

export async function GET() {
//   await connectDB();
//   const posts = await Post.find({}, "slug");

  const baseUrl = "https://sathishdiaries.vercel.app"; // Change this to your actual domain

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  sitemap += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  // Add Static Pages
  const staticPages = ["/", "/about", "/contact", "/projects"];
  staticPages.forEach((page) => {
    sitemap += `<url><loc>${baseUrl}${page}</loc></url>\n`;
  });

  // Add Blog Posts
//   posts.forEach((post) => {
//     sitemap += `<url><loc>${baseUrl}/post/${post.slug}</loc></url>\n`;
//   });

  sitemap += `</urlset>`;

  return new NextResponse(sitemap, { headers: { "Content-Type": "text/xml" } });
}
