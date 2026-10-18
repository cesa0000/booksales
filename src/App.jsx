// src/App.jsx
import { useState } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import booksData from "./Utils/books";
import Home from "./pages/Home";
import Book from "./pages/Book";
import "./App.css";

function App() {
  // State dinaikkan ke App agar data sama di halaman Home dan Book
  const [books, setBooks] = useState(booksData);

  const handleAddBook = (newBook) => {
    const nextId = books.length ? Math.max(...books.map((b) => b.id)) + 1 : 1;
    setBooks([...books, { id: nextId, ...newBook }]);
  };

  return (
    <BrowserRouter>
      <header className="navbar">
        <span className="brand">BookSales</span>
        <nav>
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/book">Book</NavLink>
        </nav>
      </header>

      <main className="container">
        <Routes>
          <Route path="/" element={<Home books={books} onAddBook={handleAddBook} />} />
          <Route path="/book" element={<Book books={books} onAddBook={handleAddBook} />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
