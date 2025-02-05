'use client';
import { useState, useEffect } from 'react'
import AxiosInstance from '@/service/axios.config'

function App() {
  const [message, setMessage] = useState('')
  const [error, setError] = useState(null)
  console.log("khanh", process.env.DB_HOST || 'Failed to load data. Please try again later.')
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
        <p>{process.env.DB_HOST || 'Failed '}</p>
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
