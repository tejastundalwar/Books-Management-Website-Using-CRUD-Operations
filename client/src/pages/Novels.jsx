import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    console.log("hello");
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8800/books");
        setBooks(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBooks();
  }, []);



  console.log(books);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8800/books/${id}`);
      window.location.reload()
    } catch (err) {
      console.log(err);
    }
  };



  return (
    <div>
      <div className="heading">
        <h1>PARADISE BOOK SHOP</h1>
      </div>

      <div className="books">
        {books.map((book) => (
          <div key={book.id} className="book">

            {book.cover ? <img src={book.cover} alt={book.title} /> : null}
            <h2>{book.title}</h2>
            <div className="desc">
            <p>{book.desc}</p>
            </div>
            
            <span className="price">Rs {book.price}/-</span>

            <button className="delete" onClick={() => handleDelete(book.id)}>Delete</button>


            <button className="update">
              <Link
                to={`/update/${book.id}`}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Update
              </Link>
            </button>
          </div>
        ))}
      </div>



      <button className="addHome">
        <Link to="/add" style={{ color: "inherit", textDecoration: "none" }}>
          Add new book
        </Link>
      </button>
    </div>
  );
};

export default Books;