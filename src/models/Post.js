import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  content: { type: String, required: true },
  keywords: { type: String, required: false },
  image: { type: String, required: false }, // Relative path to public folder, e.g., '/uploads/my-image.jpg'
  slug: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Post || mongoose.model('Post', PostSchema);
