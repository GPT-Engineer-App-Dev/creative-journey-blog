import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !date || !content) {
      toast.error("All fields are required!");
      return;
    }

    const newPost = { title, date, content };
    const existingPosts = JSON.parse(localStorage.getItem("posts")) || [];
    localStorage.setItem("posts", JSON.stringify([...existingPosts, newPost]));

    toast.success("Post added successfully!");
    navigate("/blog");
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Add New Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-left mb-2">Title</label>
          <input
            type="text"
            id="title"
            className="w-full p-2 border rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="block text-left mb-2">Date</label>
          <input
            type="date"
            id="date"
            className="w-full p-2 border rounded"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="block text-left mb-2">Content</label>
          <textarea
            id="content"
            className="w-full p-2 border rounded"
            rows="4"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="px-4 py-2 bg-primary text-primary-foreground rounded">Add Post</button>
      </form>
    </div>
  );
};

export default AddPost;