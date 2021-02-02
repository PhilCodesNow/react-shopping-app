
import Input from './Input';
import { useState, useRef } from 'react';
import Output from './Output';
import './App.css';




function App() {

  const [list, setList] = useState([{name: 'list 1', checked: false}, {name: 'list 2', checked: false}])
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
