import './App.css'
import PostCard from '../components/PostCard'
import { useState } from 'react'

function App() {

  const [showPost, setShowPost] = useState(false)

  const handleShowPost = () => {
    setShowPost(!showPost);
  }
  return (
    <>
    <div className="container">
      <div className="head">
      {
        showPost ? <PostCard /> : <h4>El post esta oculto</h4>
      }
      </div>

      <div className="body">
        <button onClick={handleShowPost}> Show / Hide</button>
      </div>
    </div>
    </>
  )
}

export default App
