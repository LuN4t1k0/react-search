import { useState } from 'react'

import './App.css'
import SearchComponent from './components/SearchComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container-fluid">
      <h2 className='text-center'>Buscador react</h2>
      <SearchComponent/>
    </div>
  )
}

export default App
