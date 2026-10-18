// src/components/BookList.jsx
import BookCard from "./BookCard";

function BookList({ books }) {
  if (books.length === 0) {
    return <p>Belum ada buku. Tambahkan buku pertama Anda.</p>;
  }

  return (
    <div className="book-grid">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}

export default BookList;
