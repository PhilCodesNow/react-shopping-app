import React from 'react';
import './OutputChecked.css';

function OutputChecked(props) {

    const {
        list,
        handleCheckedChange
    } = props
    const checkedList = list.map(listItem =>{
        if(listItem.checked === true){
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
    
    
    return <div>{checkedList}</div>
}

export default OutputChecked
