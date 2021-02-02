
import Input from './Input';
import { useState } from 'react';
import Output from './Output';
import './App.css';




function App() {

  const [list, setList] = useState(['list 1', 'list 2'])
 
  console.log(list)
  return (
    <div>
      <Input
      />
      <Output
      list={list}/>
    </div>

  );
}

export default App;
