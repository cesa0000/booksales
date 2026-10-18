// src/components/AddBookForm.jsx
import { useState } from "react";

const emptyForm = { title: "", author: "", year: "", description: "", image: "" };

function AddBookForm({ onAddBook }) {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState(emptyForm);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddBook({
      title: form.title.trim(),
      author: form.author.trim(),
      year: Number(form.year),
      description: form.description.trim(),
      image:
        form.image.trim() ||
        `https://picsum.photos/seed/${encodeURIComponent(form.title)}/300/400`,
    });
    setForm(emptyForm);
    setIsOpen(false);
  };

  if (!isOpen) {
    return (
      <button className="btn" onClick={() => setIsOpen(true)}>
        + Tambah Buku
      </button>
    );
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <input name="title" placeholder="Judul buku" value={form.title} onChange={handleChange} required />
      <input name="author" placeholder="Penulis" value={form.author} onChange={handleChange} required />
      <input name="year" type="number" placeholder="Tahun terbit" min="1900" max="2100" value={form.year} onChange={handleChange} required />
      <textarea name="description" placeholder="Deskripsi singkat" rows="3" value={form.description} onChange={handleChange} required />
      <input name="image" type="url" placeholder="URL gambar (opsional)" value={form.image} onChange={handleChange} />
      <div className="form-actions">
        <button type="submit" className="btn">Simpan</button>
        <button type="button" className="btn btn-ghost" onClick={() => setIsOpen(false)}>
          Batal
        </button>
      </div>
    </form>
  );
}

export default AddBookForm;
