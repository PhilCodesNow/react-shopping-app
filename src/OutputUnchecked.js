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
            <li key={listItem.id} className="outputunchecked__li">
               <input type="checkbox" name="checked" onClick={() => handleCheckedChange(listItem.id)}></input> 
               <h2>{listItem.name}</h2>
                <DeleteIcon
                onClick={() =>{handleDeleteItem(listItem.id)}}></DeleteIcon>
            </li>
        )
    }else{
        return null
    }
})


return (<div className="outputunchecked">
        <div className="outputunchecked__header">
            <h2>
            Need
            </h2>
        </div>
        <ul className="outputunchecked__ul">
        {uncheckedList}
        </ul>
        </div>)

}



export default OutputUnchecked
