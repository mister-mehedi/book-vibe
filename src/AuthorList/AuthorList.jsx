
import PropTypes from 'prop-types';

const AuthorList = ({ book }) => {
  const { bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;

  return (
    <tbody>
      {/* row 1 */}
      <tr>
        <th>{bookId}</th>
        <td>{bookName}</td>
        <td>{author}</td>
        <td>{totalPages}</td>
        <td>{rating}</td>
        <td>{category}</td>
        <td>{tags}</td>
        <td>{yearOfPublishing}</td>


      </tr>
    </tbody>
  );
};

AuthorList.propTypes = {

};

export default AuthorList;