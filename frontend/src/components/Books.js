import React, { useState, useEffect } from "react";
import axios from "axios";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [editBookId, setEditBookId] = useState(null);

  // Fetching books from backend
  const fetchBooks = () => {
    axios
      .get("http://localhost:5000/api/books")
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        console.log("Error fetching books:", error);
      });
  };

  // Adding a new book
  const addBook = () => {
    if (!title || !author) {
      alert("Please fill in both Title and Author fields.");
      return;
    }

    axios
      .post("http://localhost:5000/api/books", { title: title, author: author })
      .then(() => {
        setTitle("");
        setAuthor("");
        fetchBooks();
      })
      .catch((error) => {
        console.log("Error adding book:", error);
      });
  };

  // Updating an existing book
  const updateBook = (id) => {
    if (!title || !author) {
      alert("Please fill in both Title and Author fields.");
      return;
    }

    axios
      .put(`http://localhost:5000/api/books/${id}`, { title: title, author: author })
      .then(() => {
        setTitle("");
        setAuthor("");
        setEditBookId(null);
        fetchBooks();
      })
      .catch((error) => {
        console.log("Error updating book:", error);
      });
  };

  // Deleting a book
  const deleteBook = (id) => {
    axios
      .delete(`http://localhost:5000/api/books/${id}`)
      .then(() => {
        fetchBooks();
      })
      .catch((error) => {
        console.log("Error deleting book:", error);
      });
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="container mt-4">
      <div className="mb-4">
        <h2 className="mb-3">{editBookId ? "Edit Book" : "Add Book"}</h2>
        <div className="mb-3">
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <button
          className="btn btn-primary"
          onClick={() => (editBookId ? updateBook(editBookId) : addBook())}
        >
          {editBookId ? "Update Book" : "Add Book"}
        </button>
      </div>

      {/* Books Lists */}
      
      <h2>Books List</h2>
      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th>S.NO.</th>
            <th>Title</th>
            <th>Author</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.length > 0 ? (
            books.map((book , index) => (
              <tr key={book.id}>
                <td>{index+1}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>
                  <button
                    className="btn btn-warning me-2"
                    onClick={() => {
                      setEditBookId(book.id);
                      setTitle(book.title);
                      setAuthor(book.author);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteBook(book.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center">
                No books found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Books;
