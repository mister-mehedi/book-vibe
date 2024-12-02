import { NavLink } from "react-router-dom";


const Navbar = () => {
  const Links = <>
    <li><NavLink to='/' className="p-4 rounded-box border-2 text-[#23BE0A] font-bold border-[#23BE0A]">Home</NavLink></li>
    <li><NavLink to='/listed' className="p-4 rounded-box border-2 text-[#23BE0A] font-bold border-[#23BE0A]">Listed Books</NavLink></li>
    <li><NavLink to='/read' className="p-4 rounded-box border-2 text-[#23BE0A] font-bold border-[#23BE0A]">Pages to Read</NavLink></li>
    <li><NavLink to='/author' className="p-4 rounded-box border-2 text-[#23BE0A] font-bold border-[#23BE0A]">Author List</NavLink></li>
    <li><NavLink to='/about' className="p-4 rounded-box border-2 text-[#23BE0A] font-bold border-[#23BE0A]">About</NavLink></li>
  </>

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {
              Links
            }
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Book Vibe</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4">
          {
            Links
          }
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn mr-6 bg-[#23BE0A] text-white">Sign in</a>
        <a className="btn bg-[#59C6D2] text-white">Sign up</a>
      </div>
    </div>
  );
};

export default Navbar;