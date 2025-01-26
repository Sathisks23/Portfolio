import { connect } from "@/utilities/dbConfig";
import Post from "@/models/Post";
import { writeFileSync } from 'fs';
import { join } from 'path';

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get('page')) || 1;
    const limit = 5;
  
    await connect();
  
    const totalPosts = await Post.countDocuments();
    const posts = await Post.find()
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);
  
    return new Response(JSON.stringify({
      posts,
      currentPage: page,
      totalPages: Math.ceil(totalPosts / limit),
    }), { status: 200 });
  }
  
  export async function POST(req) {
    await connect();
  
    const data = await req.formData();
    const title = data.get('title');
    const description = data.get('description');
    const content = data.get('content');
    const keywords = data.get('keywords');
    const slug = data.get('slug');
    const imageFile = data.get('image');
  
    if (!title || !description || !content || !slug) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
    }
  
    let imagePath = null;
    if (imageFile && imageFile.name) {
      const buffer = Buffer.from(await imageFile.arrayBuffer());
      const imageName = `${slug}-${Date.now()}-${imageFile.name}`;
      imagePath = `/uploads/${imageName}`;
      const filePath = join(process.cwd(), 'public', 'uploads', imageName);
      writeFileSync(filePath, buffer);
    }
  
    try {
      const newPost = new Post({
        title,
        description,
        content,
        keywords,
        slug,
        image: imagePath,
      });
  
      await newPost.save();
      return new Response(JSON.stringify({ message: 'Post created successfully' }), { status: 201 });
    } catch (error) {
      return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
  }