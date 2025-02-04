const Index = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to My Personal Blog</h1>
      <p className="mb-8">A place where I share my thoughts and experiences.</p>
      <section className="recent-posts">
        <h2 className="text-2xl font-semibold mb-4">Recent Posts</h2>
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
      </section>
    </div>
  );
};

export default Index;