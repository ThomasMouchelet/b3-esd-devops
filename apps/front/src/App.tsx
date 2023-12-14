import { useEffect, useState } from 'react'
import './App.css'
import MessageForm from './components/MessageForm'
import io from 'socket.io-client'
import MessageList from './components/MessageList'

function App() {
  const [socket, setSocket] = useState(null)

  useEffect(() => {
    const socket = io("http://localhost:8000");
    setSocket(socket)

    return () => socket.close();
  }, [setSocket])

  return (
    <>
      <MessageForm socket={socket} />
      <MessageList socket={socket} />
    </>
  )
}

export default App
