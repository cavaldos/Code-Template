import { useState, useEffect } from 'react'
import './App.css'
import AxiosInstance from '../src/service/axios.config'

function App() {
  const [message, setMessage] = useState('')
  const [error, setError] = useState(null)
  console.log(import.meta.env.VITE_API_URL)
  useEffect(() => {
    AxiosInstance.get('/')
      .then(res => {
        console.log(res.message)
        setMessage(res.message)
        setError(null)
      })
      .catch(err => {
        console.error('Error fetching data:', err)
        setError('Failed to load data. Please try again later.')
        setMessage('')
      })
  }, [])

  return (
    <>
      <div>
        <p>{import.meta.env.VITE_API_URL}</p>
        {error ? (
          <h1 style={{ color: 'red' }}>{error}</h1>
        ) : (
          <h1>message: {message}</h1>
        )}
      </div>
      <div className="card">
      </div>
    </>
  )
}

export default App
