import authorPhoto from "../../public/assets/author.jpg";

const About = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <img src={authorPhoto} alt="Author" className="w-32 h-32 rounded-full mx-auto mb-4" />
      <p className="mb-8">Hello! I'm the author of this blog. I love writing about various topics and sharing my experiences with the world.</p>
    </div>
  );
};

export default About;