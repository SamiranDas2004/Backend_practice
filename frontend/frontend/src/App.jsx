import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'


function App() {
  const [jokes,setJokes]=useState([]);

  useEffect(()=>{
    axios.get('/api/jokes')
    .then((response)=>{
      setJokes(response.data)
    })
    .catch((error)=>{
      console.log('some error')
    })
  })

  return (
   <div>
    <h1>love is true</h1>
    <p>jokes {jokes.length}</p>

    {
      jokes.map((joke)=>{
       return( <div key={joke.id}>
          <p>{joke.content}</p>
        </div>
       )
      })
    }
   </div>
  )
}

export default App
