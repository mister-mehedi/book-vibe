

const About = () => {
  return (
    <div className="hero min-h-screen bg-slate-200" >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Book Vibe</h1>
          <li>Live Link: <a href="https://b9a8-book-vibe-mister-mehedi.surge.sh/">Website</a></li>
          <li>Github Link: <a href="https://github.com/programming-hero-web-course-4/b9a8-book-vibe-mister-mehedi">Github Repo</a></li>
          <p className="mb-5">
            <h4>Characteristics:</h4>

            <li>Home Bar contains Book List</li>
            <li>Listed Bar contains Read and Wishlist</li>
            <li>Pages To Read Bar contains Area chart</li>
            <li>Authorlist Bar contains Table of Data used</li>
            <li>About Bar contains Summarry of website</li>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;