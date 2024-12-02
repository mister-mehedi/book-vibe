import { CiStar } from "react-icons/ci";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;

  const content = <>
    <div className="card bg-base-100 shadow-xl p-4 border-2">
      <figure className='bg-slate-100 p-4 rounded-box'><img src={image} alt="Book" /></figure>
      <div className="card-body">
        <div className="card-actions justify-start">
          <div className="badge bg-slate-100 p-4 text-[#23BE0A] text-xl font-semibold"> Young Adult</div>
          <div className="badge bg-slate-100 p-4 text-[#23BE0A] text-xl font-semibold">Identity</div>
        </div>
        <h2 className="card-title">
          {bookName}
        </h2>
        <p>By : {author}</p>
      </div>
      <div className="flex-grow border-t border-gray-400"></div>
      <div className='flex justify-between py-4 text-lg'>
        <div>{category}</div>
        <div className="flex gap-4 justify-center items-center">
          <div>{rating}</div>
          <div><CiStar /></div>
        </div>
      </div>

    </div>
  </>

  return (

    <Link to={`/book/${bookId}`}>
      {
        content
      }
    </Link>


  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired
};

export default Book;