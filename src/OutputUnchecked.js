import React from 'react';
import './OutputUnchecked.css';

function OutputUnchecked(props) {
    const {
        list,
        handleCheckedChange
    } = props

    

const uncheckedList = list.map(listItem =>{
    if(listItem.checked === false){
        console.log('render')
        return (
            <li key={listItem.id}>
               {listItem.name}
            <input type="checkbox" name="checked" onClick={() => handleCheckedChange(listItem.id)}></input> 
            </li>
        )
    }
})
console.log(list)


return <div>{uncheckedList}</div>

}



export default OutputUnchecked
