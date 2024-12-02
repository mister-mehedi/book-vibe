import { useEffect, useState } from "react";
import AuthorList from "../AuthorList/AuthorList";


const Author = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch('books.json')
      .then(res => res.json())
      .then(data => setBooks(data))
  }, [])

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>bookId</th>
            <th>bookName</th>
            <th>author</th>
            <th>totalPages</th>
            <th>rating</th>
            <th>category</th>
            <th>tags</th>
            <th>yearOfPublishing</th>
          </tr>
        </thead>
        {
          books.map(book => <AuthorList key={book.id} book={book}></AuthorList>)
        }
      </table>
    </div>
  );
};

export default Author;