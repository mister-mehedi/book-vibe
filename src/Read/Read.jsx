
import PropTypes from 'prop-types';
import { IoPeopleOutline } from "react-icons/io5";
import { LuNewspaper } from "react-icons/lu";
import { Link } from 'react-router-dom';


const Read = ({ read }) => {
  const { bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = read;

  return (

    <div className="card card-side bg-base-100 shadow-xl">
      <figure><img src={image} alt="book" /></figure>
      <div className="card-body">
        <h2 className="card-title">{bookName}</h2>
        <p>By: {author}</p>
        <p><b>Tag</b>  <span> #Young Adult</span>  <span> #Identity</span></p>
        <div className='flex gap-6'>
          <div className='flex gap-2 items-center'>
            <div><IoPeopleOutline /></div>
            <div>Publisher: {publisher}</div>
          </div>
          <div className='flex gap-2 items-center'>
            <div><LuNewspaper /></div>
            <div>Pages: {totalPages}</div>
          </div>
        </div>
        <div className="flex-grow border-t border-gray-400"></div>

        <div className="card-actions justify-start items-center">
          <button className="p-4 bg-[#328EFF26] text-[#328EFF] rounded-xl">Category: {category}</button>
          <button className="p-4 bg-[#FFAC3326] text-[#FFAC33] rounded-xl">Rating: {rating}</button>
          <Link to={`/book/${bookId}`}>
            <button className="btn bg-[#23BE0A] text-white">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

Read.propTypes = {
  read: PropTypes.object
};

export default Read;