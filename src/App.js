
import Input from './Input';
import { useState, useRef } from 'react';
import Output from './Output';
import './App.css';
import { v4 as uuidv4 } from 'uuid';




function App() {

  const [list, setList] = useState([{name: 'item 1', checked: false, id: uuidv4()}, {name: 'item 2', checked: false, id: uuidv4()}, {name: 'item 3', checked: false, id: uuidv4()}])
  let listRef = useRef()



  function handleInputSubmit(){
    const newList = listRef.current.value
    setList(prevList => {
      return [...prevList, {name: newList, checked: false, id: uuidv4()}]
    })
    listRef.current.value = ''
  }

  function handleCheckedChange(id){
    let newList = list
    const listItem = newList.findIndex(item => item.id === id)

    newList[listItem].checked = !newList[listItem].checked
    setList(newList)
    console.log(list)
  }

  return (
    <div>
      <Input
      handleInputSubmit={handleInputSubmit}
      listRef={listRef}
      />
      <Output
      list={list}
      handleCheckedChange={handleCheckedChange}
      />
      
    </div>

  );
}

export default App;
