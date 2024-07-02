const Contact = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
      <form className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-left mb-2">Name</label>
          <input type="text" id="name" className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-left mb-2">Email</label>
          <input type="email" id="email" className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-left mb-2">Message</label>
          <textarea id="message" className="w-full p-2 border rounded" rows="4"></textarea>
        </div>
        <button type="submit" className="px-4 py-2 bg-primary text-primary-foreground rounded">Send</button>
      </form>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Follow Me</h2>
        <nav className="flex justify-center space-x-4">
          <a href="#" className="text-muted-foreground hover:text-foreground">Twitter</a>
          <a href="#" className="text-muted-foreground hover:text-foreground">LinkedIn</a>
          <a href="#" className="text-muted-foreground hover:text-foreground">GitHub</a>
        </nav>
      </div>
    </div>
  );
};

export default Contact;