// src/pages/Home.jsx
import BookList from "../components/BookList";
import AddBookForm from "../components/AddBookForm";

function Home({ books, onAddBook }) {
  return (
    <section>
      <h1>Selamat Datang di BookSales</h1>
      <p className="lead">Temukan buku pemrograman favorit Anda. Total: {books.length} buku.</p>
      <AddBookForm onAddBook={onAddBook} />
      <BookList books={books} />
    </section>
  );
}

export default Home;
