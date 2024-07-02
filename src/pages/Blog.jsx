const Blog = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Blog</h1>
      <section className="blog-posts">
        <div className="grid gap-4">
          <article className="p-4 border rounded">
            <h3 className="text-xl font-bold">Post Title 1</h3>
            <p className="text-sm text-muted-foreground">Date: 2023-10-01</p>
            <p className="mt-2">This is a short excerpt from the first post...</p>
          </article>
          <article className="p-4 border rounded">
            <h3 className="text-xl font-bold">Post Title 2</h3>
            <p className="text-sm text-muted-foreground">Date: 2023-09-25</p>
            <p className="mt-2">This is a short excerpt from the second post...</p>
          </article>
        </div>
        <div className="mt-8">
          <button className="px-4 py-2 bg-primary text-primary-foreground rounded">Load More</button>
        </div>
      </section>
    </div>
  );
};

export default Blog;