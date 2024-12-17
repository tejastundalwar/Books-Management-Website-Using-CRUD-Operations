import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Novels from './pages/Novels';
import Addition from './pages/Addition';
import "./style.css";

const App = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchAllNovels = async () => {
      try {
        const res = await axios.get("http://localhost:8800/books");
        setBooks(res.data);
      } catch (err) {
        console.warn(err);
      }
    };
    fetchAllNovels();
  }, []);

  const addBook = async (book) => {
    try {
      const res = await axios.post("http://localhost:8800/books", book);
      setBooks((prevBooks) => [...prevBooks, res.data]);
    } catch (err) {
      console.log(err);
      throw err; // Ensure the error is re-thrown so the caller can handle it
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Novels books={books} />} />
        <Route path="/add" element={<Addition addBook={addBook} />} />
        <Route path="/update/:id" element={<Addition addBook={addBook} />} />
      </Routes>
    </Router>
  );
};

export default App;
