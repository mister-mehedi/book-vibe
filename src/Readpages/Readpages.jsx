import { useEffect, useState } from "react";
import { Bar } from 'react-chartjs-2';

const Readpages = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch('books.json')
      .then(res => res.json())
      .then(data => setBooks(data))
  }, []);
  console.log(books);

  // const { bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = books;

  // const labelArr = books.map(({ bookName }) => bookName);
  // const chartData = {
  //   labels: books.map((book) => book.bookName),
  //   datasets: [
  //     {
  //       label: 'Total Pages',
  //       data: books.map((book) => book.totalPages),
  //       backgroundColor: 'rgba(255, 99, 132, 0.2)',
  //       borderColor: 'rgba(255, 99, 132, 1)',
  //       borderWidth: 1,
  //     },
  //   ],
  // };

  // const chartOptions = {
  //   scales: {
  //     yAxes: [
  //       {
  //         ticks: {
  //           beginAtZero: true,
  //         },
  //       },
  //     ],
  //   },
  // };

  return (
    <div>
      <h2>hello from pages to read: </h2>
      {/* <Bar data={chartData} options={chartOptions} /> */}

    </div>
  );
};

export default Readpages;