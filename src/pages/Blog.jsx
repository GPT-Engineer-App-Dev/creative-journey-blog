import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(storedPosts);
  }, []);

  const handleDelete = (index) => {
    const updatedPosts = posts.filter((_, i) => i !== index);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
    setPosts(updatedPosts);
    toast.success("Post deleted successfully!");
  };

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Blog</h1>
      <Link to="/add-post" className="px-4 py-2 bg-primary text-primary-foreground rounded mb-4 inline-block">Add New Post</Link>
      <section className="blog-posts">
        <div className="grid gap-4">
          {posts.map((post, index) => (
            <article key={index} className="p-4 border rounded">
              <h3 className="text-xl font-bold">{post.title}</h3>
              <p className="text-sm text-muted-foreground">Date: {post.date}</p>
              <p className="mt-2">{post.content}</p>
            <Button variant="destructive" onClick={() => handleDelete(index)}>Delete</Button>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;