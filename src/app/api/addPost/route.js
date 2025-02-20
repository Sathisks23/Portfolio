import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";
import { Connect } from "@/lib/mongodb";
import Post from "@/models/Post";


const uploadDir = path.join(process.cwd(), "public/uploads");
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

export async function POST(req) {
  try {
    await Connect(); // Connect to MongoDB

    const formData = await req.formData();

    // Extract text fields
    const title = formData.get("title");
    const slug = formData.get("slug");
    const content = formData.get("content");
    const keywords = formData.get("keywords")?.split(",").map((kw) => kw.trim()) || [];
    const description = formData.get("description");

    // Extract files
    const files = formData.getAll("images");
    console.log("Received Files:", files); // Debugging

    if (!files || files.length === 0) {
      return NextResponse.json({ error: "No image uploaded" }, { status: 400 });
    }

    // Save images and create paths
    const imagePaths = [];
    for (const file of files) {
      if (file && file.name) {
        const filePath = `/uploads/${Date.now()}-${file.name}`;
        const buffer = Buffer.from(await file.arrayBuffer());

        
        fs.writeFileSync(path.join(uploadDir, filePath.split("/uploads/")[1]), buffer);
        imagePaths.push(filePath);
      }
    }

    

    // Create new post
    const newPost = await Post.create({
      title,
      slug,
      content,
      keywords,
      description,
      images: imagePaths,
    });

    

    return NextResponse.json({ message: "Post created!", data: newPost });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
