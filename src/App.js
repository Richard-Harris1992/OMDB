import { useEffect, useState } from "react"
import "./App.css"
import Form from "./components/Form"
import MovieDisplay from "./components/MovieDisplay"
export default function App() {
  const apiKey = "e69dfe9d"
  //state to hold movie data
  const [movie, setMovie] = useState(null)
 
  const getList = async (searchTerm) => {
    // make fetch request and store response
    try {
      const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`)
      // Parse JSON response into a javascript object
      const data = await response.json()
    
      //set the Movie state to the movie
      setMovie(data)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div className="App">
      <Form moviesearch={getList} />
      <MovieDisplay movie={movie} />
    </div>
  )
}