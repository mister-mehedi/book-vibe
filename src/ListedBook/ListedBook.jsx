import { useEffect, useState } from "react";
import { getStoredBookApplication, getWishlist } from "../Utility/LocalStorage";
import { useLoaderData } from "react-router-dom";
import Read from "../Read/Read";
import Wishlist from "../Wishlist/Wishlist";


const ListedBook = () => {
  const books = useLoaderData();
  const [readBooks, setReadBooks] = useState([]);
  const [wishlistBooks, setWishlistBooks] = useState([]);
  const [displayRead, setDisplayRead] = useState([]);
  const [displayListed, setDisplayListed] = useState([]);

  // console.log(books.length);

  const handleSort = srt => {
    console.log("here");
    // readBooks.sort((a, b) => b[srt] - a[srt]);
    // setReadBooks(readBooks);
    // wishlistBooks.sort((a, b) => b[srt] - a[srt]);
    // setWishlistBooks(wishlistBooks);
    if (srt === 'rating') {
      console.log("anywhere");

      const newReadBooks = readBooks.sort((a, b) => b.rating - a.rating);
      console.log(newReadBooks);
      setDisplayRead(newReadBooks);

      const newWishlistBooks = wishlistBooks.sort((a, b) => b.rating - a.rating);
      console.log(newWishlistBooks);
      setDisplayListed(newWishlistBooks);
    } else if (srt === 'totalPages') {
      console.log("haha");

      const newReadBooks = readBooks.sort((a, b) => b.totalPages - a.totalPages);
      console.log(newReadBooks);
      setDisplayRead(newReadBooks);

      const newWishlistBooks = wishlistBooks.sort((a, b) => b.totalPages - a.totalPages);
      console.log(newWishlistBooks);
      setDisplayListed(newWishlistBooks);
    } else if (srt === 'yearOfPublishing') {
      console.log("nana");

      const newReadBooks = readBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
      console.log(newReadBooks);
      setDisplayRead(newReadBooks);

      const newWishlistBooks = wishlistBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
      console.log(newWishlistBooks);
      setDisplayListed(newWishlistBooks);
    }
  }



  useEffect(() => {
    const storedBookIds = getStoredBookApplication();
    const storedWishlistIds = getWishlist();
    // console.log(books.length);
    // console.log(storedBookIds);
    if (books.length > 0) {
      const booksRead = [];
      for (const id of storedBookIds) {
        const book = books.find(book => book.bookId === id);
        if (book) {
          booksRead.push(book);
        }
      }

      const booksWishlist = [];
      for (const id of storedWishlistIds) {
        const wishlist = books.find(book => book.bookId === id);
        if (wishlist) {
          booksWishlist.push(wishlist);
        }
      }
      // const booksRead=books.filter(book=> storedBookIds.includes(book.bookId));
      // const booksRead = books.filter(book => storedBookIds.includes(book.bookId))
      // console.log(booksRead);
      setReadBooks(booksRead);
      setDisplayRead(booksRead);
      setWishlistBooks(booksWishlist);
      setDisplayListed(booksWishlist);
    }
  }, [books])

  return (
    <div>
      <div className="bg-slate-100 p-8 rounded-box my-6">
        <h2 className="text-5xl font-bold text-center">Books</h2>
      </div>
      <div className="text-center my-6">
        <details className="dropdown">
          <summary className="m-1 btn bg-[#23BE0A] text-white">Sort By</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li onClick={() => handleSort('rating')}><a>Rating</a></li>
            <li onClick={() => handleSort('totalPages')}><a>Number of Pages</a></li>
            <li onClick={() => handleSort('yearOfPublishing')}><a>Publisher Year</a></li>
          </ul>
        </details>
      </div>

      <div role="tablist" className="tabs tabs-lifted my-12">
        <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read" />
        <div role="tabpanel" className="tab-content space-y-6 bg-base-100 border-base-300 rounded-box p-6">
          <ul>
            {
              displayRead.map(book => <Read key={book.bookId} read={book}></Read>)
            }
          </ul>
        </div>

        <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Wishlist" checked />
        <div role="tabpanel" className="tab-content space-y-6 bg-base-100 border-base-300 rounded-box p-6">
          <ul>
            {
              displayListed.map(book => <Wishlist key={book.bookId} wishlist={book}></Wishlist>)
            }
          </ul>
        </div>

      </div>


    </div>
  );
};

export default ListedBook;