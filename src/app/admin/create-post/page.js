'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CreatePostPage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const [keywords, setKeywords] = useState('');
  const [image, setImage] = useState(null);
  const [slug, setSlug] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('content', content);
    formData.append('keywords', keywords);
    formData.append('slug', slug);
    if (image) formData.append('image', image);

    const response = await fetch('/api/posts', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      router.push('/blog'); // Redirect to blog page after successful post creation
    } else {
      alert('Failed to create post.');
    }
  };

  return (
    <div>
      <h1>Create New Post</h1>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div>
          <label>Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>
        <div>
          <label>Keywords</label>
          <input
            type="text"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
          />
        </div>
        <div>
          <label>Slug</label>
          <input
            type="text"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Image</label>
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            accept="image/*"
          />
        </div>
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
}
