import React,{useState} from 'react'
import Nav from './components/Nav'
import Foorm from './components/Foorm'
import Home from './components/Home';

const App = () => {
  const [peoples, setpeoples] = useState([]);
    const addPeople=(newPeople)=>{
        setpeoples([...peoples,newPeople]);
    };
  return (
    <div>
      <Nav/>
      <Foorm onAdd={addPeople}/> 
      <Home/>
    </div>
  )
}

export default App
