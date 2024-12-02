import { useEffect } from 'react';
import { useState } from 'react';
import Book from '../Book/Book';

const Books = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch('books.json')
      .then(res => res.json())
      .then(data => setBooks(data))
  }, [])
  return (
    <div className='my-16'>
      <h1 className='text-5xl font-bold text-center'>Books</h1>
      <div className='grid grid-cols-3 gap-4 my-4 items-center'>
        {
          books.map(book => <Book key={book.id} book={book}></Book>)
        }

      </div>
    </div>
  );
};

export default Books;