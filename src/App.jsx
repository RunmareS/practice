import { useState } from 'react'
import Component from './Component'
import Servis from './Servis'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
       <Component/>
       <Servis/>
    </div>
  )
}

export default App
