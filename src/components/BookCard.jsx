// src/components/BookCard.jsx
function BookCard({ book }) {
  return (
    <article className="book-card">
      <img
        src={book.image}
        alt={`Sampul ${book.title}`}
        loading="lazy"
        onError={(e) => {
          e.currentTarget.src = "https://placehold.co/300x400?text=No+Image";
        }}
      />
      <div className="book-info">
        <h3>{book.title}</h3>
        <p className="book-meta">
          {book.author} &bull; {book.year}
        </p>
        <p className="book-desc">{book.description}</p>
      </div>
    </article>
  );
}

export default BookCard;
