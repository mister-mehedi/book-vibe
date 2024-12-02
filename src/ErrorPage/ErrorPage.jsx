import { Link } from "react-router-dom";


const ErrorPage = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h2 className="mb-8">Opps!</h2>
      <Link to='/' className="p-4 bg-black text-white rounded-box">Go back to Home page</Link>
    </div>
  );
};

export default ErrorPage;