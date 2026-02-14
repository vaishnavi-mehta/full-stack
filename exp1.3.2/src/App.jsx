import React, { useState } from "react";

function App() {
  const [books, setBooks] = useState([
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newAuthor, setNewAuthor] = useState("");

  // Add Book
  const addBook = () => {
    if (newTitle.trim() === "" || newAuthor.trim() === "") return;

    const newBook = {
      id: Date.now(), // Temporary unique ID
      title: newTitle,
      author: newAuthor,
    };

    setBooks([...books, newBook]);
    setNewTitle("");
    setNewAuthor("");
  };

  // Remove Book
  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  // Filter Books (Search)
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <h1>Library Management System</h1>

      {/* Search */}
      <input
        type="text"
        placeholder="Search books..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={styles.searchInput}
      />

      {/* Add Book Form */}
      <div style={styles.form}>
        <input
          type="text"
          placeholder="Book Title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          style={styles.input}
        />

        <input
          type="text"
          placeholder="Author"
          value={newAuthor}
          onChange={(e) => setNewAuthor(e.target.value)}
          style={styles.input}
        />

        <button onClick={addBook} style={styles.addButton}>
          Add Book
        </button>
      </div>

      {/* Book List */}
      <div style={styles.bookList}>
        {filteredBooks.map((book) => (
          <div key={book.id} style={styles.bookCard}>
            <div>
              <h2 style={{ margin: 0 }}>{book.title}</h2>
              <p style={{ margin: "5px 0" }}>by {book.author}</p>
            </div>

            <button
              onClick={() => removeBook(book.id)}
              style={styles.removeButton}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

const styles = {
  container: {
    maxWidth: "800px",
    margin: "auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },

  searchInput: {
    width: "100%",
    padding: "10px",
    marginBottom: "20px",
    fontSize: "16px",
  },

  form: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
    flexWrap: "wrap",
  },

  input: {
    flex: "1",
    padding: "10px",
    fontSize: "16px",
  },

  addButton: {
    padding: "10px 20px",
    backgroundColor: "#2563eb",
    color: "white",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
  },

  bookList: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },

  bookCard: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px",
    border: "1px solid #ddd",
    borderRadius: "10px",
  },

  removeButton: {
    padding: "8px 15px",
    backgroundColor: "#dc2626",
    color: "white",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
  },
};