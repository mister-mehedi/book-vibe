import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { isRead, isWishlist, removeWishlist, saveBookApplication, saveWishlist } from "../Utility/LocalStorage";


const BookDetails = () => {
  const books = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const book = books.find(book => book.bookId === idInt);

  const handleReadBook = () => {
    if (isRead(idInt)) {
      toast('Already Read');
    } else {
      saveBookApplication(idInt);
      toast('Successfully added to read');
      if (isWishlist(idInt)) {
        removeWishlist(idInt);
      }
    }
  }

  const handleWishlist = () => {
    if (isWishlist(idInt)) {
      toast('Already Wishlisted');
    } else {
      if (isRead(idInt)) {
        toast('Its already in Read');
      } else {
        saveWishlist(idInt);
        toast('Successfully added to wishlist');
      }

    }

  }

  return (
    <div>
      <div className="hero bg-base-200 rounded-box">
        <div className="hero-content flex-col lg:flex-row">
          <img src={book.image} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h2 className="card-title">
              {book.bookName}
            </h2>
            <p>By : {book.author}</p>
            <div className="flex-grow border-t border-gray-400"></div>
            <p>
              {
                book.tags.map((tag, idx) => <span key={idx} className="mr-4">{tag}</span>)
              }
            </p>
            <div className="flex-grow border-t border-gray-400"></div>
            <p><b>Review</b>  : {book.review}</p>
            <p><b>Tag</b>  <span> #Young Adult</span>  <span> #Identity</span></p>
            <div className="flex-grow border-t border-gray-400"></div>
            <p>Number of Pages: {book.totalPages}</p>
            <p>Publisher: {book.publisher}</p>
            <p> Year of Publishing: {book.yearOfPublishing}</p>
            <p>Rating: {book.rating}</p>
            <div className="flex gap-4">
              <div>
                <button onClick={handleReadBook} className="btn">Read</button>
              </div>
              <div>
                <button onClick={handleWishlist} className="btn">Wishlist</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />

    </div>
  );
};

export default BookDetails;