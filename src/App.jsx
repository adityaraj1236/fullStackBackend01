import React, { useEffect, useState } from 'react'
import './App.css'
import './index.css'
import axios from 'axios'

const App = () => {
  const [jokes, setJoke] = useState([])

  useEffect(() => {
    axios.get('/jokes')
      .then((res) => {
        setJoke(res.data) // Assuming res.data is an array of jokes
      })
      .catch((err) => { 
        console.error('Error fetching jokes:', err)
      })
  }) // Dependency array added to prevent infinite loop

  return (
    <>
      <div>Aditya and his world of world</div>
      <p>Number of Jokes: {jokes.length}</p>
      <p>{jokes.filter((joke) => joke.title === 'Joke Title 1').length}</p>
      {jokes.map((joke) => {
        return (
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        )
      })}
    </>
  )
}

export default App
