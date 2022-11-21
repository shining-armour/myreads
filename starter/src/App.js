import "./App.css";
import { Route, Routes } from "react-router-dom"
import { useState, useEffect } from "react";
import * as BooksAPI from"./BooksAPI"
import MainPage from "./MainPage";
import SearchPage from "./SearchPage";

function App() {

  const [userBooks, setAllBooks] = useState([]);

    useEffect(() => {
      let mounted=true

      const getAllBooks = async() => {
        const result = await BooksAPI.getAll()
        console.log(result[0])
        setAllBooks(result)
      }

      if(mounted) getAllBooks();
  
      return () => {
        mounted=false;
      }
    }, [])

  return (
  <Routes>
    <Route exact path="/" element={<MainPage books={userBooks}/>}/>
    <Route path="/search" element={<SearchPage userBooks={userBooks} />}/>
  </Routes>
  );
}

export default App;
