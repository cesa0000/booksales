// src/pages/Book.jsx
import BookList from "../components/BookList";
import AddBookForm from "../components/AddBookForm";

function Book({ books, onAddBook }) {
  return (
    <section>
      <h1>Daftar Buku</h1>
      <p className="lead">Koleksi lengkap buku yang tersedia ({books.length} buku).</p>
      <AddBookForm onAddBook={onAddBook} />
      <BookList books={books} />
    </section>
  );
}

export default Book;
