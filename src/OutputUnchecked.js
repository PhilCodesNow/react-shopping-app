import React from 'react';
import './OutputUnchecked.css';
import DeleteIcon from '@material-ui/icons/DeleteForever';


function OutputUnchecked(props) {
    const {
        list,
        handleCheckedChange,
        handleDeleteItem
    } = props

    

const uncheckedList = list.map(listItem =>{
    if(listItem.checked === false){
        return (
            <li key={listItem.id}>
               {listItem.name}
            <input type="checkbox" name="checked" onClick={() => handleCheckedChange(listItem.id)}></input> 
            <DeleteIcon
                onClick={() =>{handleDeleteItem(listItem.id)}}></DeleteIcon>
            </li>
        )
    }else{
        return null
    }
})


return (<div className="outputunchecked">
        <div>
            <h2>
            Need
            </h2>
        </div>
        {uncheckedList}
        </div>)

}



export default OutputUnchecked
