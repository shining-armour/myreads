import "./App.css";
import { Route, Routes } from "react-router-dom"
import { useState, useEffect } from "react";
import * as BooksAPI from"./BooksAPI"
import MainPage from "./MainPage";
import SearchPage from "./SearchPage";

function App() {

  const [userShelfBooks, setUserShelfBooks] = useState([]);

  const updateUserShelfBooks = (book, newShelf) => {
    BooksAPI.update(book, newShelf).then(() => {
      BooksAPI.getAll().then(res => setUserShelfBooks(res))
    })
  }

  useEffect(() => {
      
    let mounted=true
    const getUserShelfBooks = async() => {
    const result = await BooksAPI.getAll()
    setUserShelfBooks(result)
    }

    if(mounted) getUserShelfBooks();
  
    return () => {
      mounted=false;
      setUserShelfBooks([])
    }
  }, [])

  return (
  <Routes>
    <Route exact path="/" element={<MainPage userShelfBooks={userShelfBooks} updateUserShelfBooks={updateUserShelfBooks}/>}/>
    <Route path="/search" element={<SearchPage userShelfBooks={userShelfBooks} updateUserShelfBooks={updateUserShelfBooks}/>}/>
  </Routes>
  );
}

export default App;
