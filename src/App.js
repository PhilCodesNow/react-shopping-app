
import Input from './Input';
import { useState, useRef } from 'react';
import Output from './Output';
import './App.css';




function App() {

  const [list, setList] = useState(['list 1', 'list 2'])
  let listRef = useRef()



  function handleInputSubmit(){
    const newList = listRef.current.value
    setList(prevList => {
      return [...prevList, newList]
    })
    listRef.current.value = ''
  }


  console.log(list)
  return (
    <div>
      <Input
      handleInputSubmit={handleInputSubmit}
      listRef={listRef}
      />
      <Output
      list={list}/>
    </div>

  );
}

export default App;
