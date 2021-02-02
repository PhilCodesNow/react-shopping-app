
import Input from './Input';
import { useState, useRef } from 'react';
import Output from './Output';
import './App.css';
import { v4 as uuidv4 } from 'uuid';




function App() {

  const [list, setList] = useState([{name: 'item 1', checked: false, id: uuidv4()}, {name: 'item 2', checked: false, id: uuidv4()}, {name: 'item 3', checked: false, id: uuidv4()}, {name: 'item 4', checked: false, id: uuidv4()}])
  let listRef = useRef()



  function handleInputSubmit(){
    if(listRef.current.value === ''){
      return
    }else{
    const newList = listRef.current.value
    setList(prevList => {
      return [...prevList, {name: newList, checked: false, id: uuidv4()}]
    })
    listRef.current.value = ''
  }
}

  function handleCheckedChange(id){
    let newList = [...list]
    const itemIndex = newList.findIndex(item => item.id === id)
    let newListItem = {...newList[itemIndex]}
    newListItem.checked = !newListItem.checked
    newList[itemIndex] = newListItem
    setList(newList)
  }

  function handleDeleteItem(id){
    let newList = [...list]
    const itemIndex = newList.findIndex(item => item.id === id)
    newList.splice(itemIndex, 1)
    setList(newList)
  }

  return (
    <div className="app">
      <Input
      handleInputSubmit={handleInputSubmit}
      listRef={listRef}
      />
      <Output
      list={list}
      handleCheckedChange={handleCheckedChange}
      handleDeleteItem={handleDeleteItem}
      />
      
    </div>

  );
}

export default App;
