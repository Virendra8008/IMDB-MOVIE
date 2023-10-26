
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './componets/header/Header';
import Home from './pages/home/Home';
import MovieList from './componets/movieList/MovieLise';
import Movie from './pages/movieDetail/movie';


function App() {
  return (
    <div className="App">
      
    <Router>
      <Header/>
      <Routes>
        <Route index element={<Home/>}></Route>
        <Route path='movie/:id' element = {<Movie/>}></Route>
        <Route path='movies/:type' element={<MovieList/>}></Route>
        <Route path='/*' element={<h1>Error page</h1>}></Route>
        
      </Routes>
    </Router>
    </div>
  );
}

export default App;
