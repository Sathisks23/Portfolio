"use client";
import React, { useState } from "react";
import axios from "axios";

const PostForm = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    content: "",
    keywords: "",
    description: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (event) => {
    setSelectedFiles([...selectedFiles, ...event.target.files]);
  };

  const removeFile = (index) => {
    setSelectedFiles(selectedFiles.filter((_, i) => i !== index));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      formDataToSend.append(key, formData[key]);
    });

    selectedFiles.forEach((file) => {
      formDataToSend.append("images", file);
    });

    try {
      const res = await axios.post("/api/addPost", formDataToSend, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      
      alert("Success:", res.data);
      
    } catch (error) {
      console.error("Error uploading post:", error);
    }
  };

  return (
    <div className="p-4 mx-auto max-w-xl bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-center">Create a Post</h1>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4" encType="multipart/form-data">
        <input type="text" placeholder="Title" name="title" required value={formData.title} onChange={handleChange} className="w-full px-4 py-2 border rounded" />
        <input type="text" placeholder="Slug (URL Name)" name="slug" required value={formData.slug} onChange={handleChange} className="w-full px-4 py-2 border rounded" />
        <textarea placeholder="Content" name="content" required value={formData.content} onChange={handleChange} className="w-full px-4 py-2 border rounded"></textarea>
        <input type="file" multiple required onChange={handleFileChange} className="w-full px-4 py-2 border rounded" />
        <input type="text" placeholder="Keywords (comma-separated)" name="keywords" required value={formData.keywords} onChange={handleChange} className="w-full px-4 py-2 border rounded" />
        <textarea placeholder="Description" name="description" required value={formData.description} onChange={handleChange} className="w-full px-4 py-2 border rounded"></textarea>

        {selectedFiles.length > 0 && (
          <div className="mt-4">
            <h4>Selected Files:</h4>
            <ul>
              {selectedFiles.map((file, index) => (
                <li key={index} className="flex justify-between items-center">
                  <span>{file.name}</span>
                  <button type="button" onClick={() => removeFile(index)} className="ml-2 bg-red-500 text-white px-2 py-1 rounded">Remove</button>
                </li>
              ))}
            </ul>
          </div>
        )}

        <button type="submit" className="bg-black text-white px-4 py-2 rounded">Submit Post</button>
      </form>
    </div>
  );
};

export default PostForm;
