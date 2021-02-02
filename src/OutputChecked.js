import React from 'react';
import './OutputChecked.css';
import DeleteIcon from '@material-ui/icons/DeleteForever';

function OutputChecked(props) {

    const {
        list,
        handleCheckedChange,
        handleDeleteItem
    } = props
    const checkedList = list.map(listItem =>{
        if(listItem.checked === true){
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

    
    
    return (<div className="outputchecked">
            <div>
                <h2>
                Checked
                </h2>
            </div>
            {checkedList}
            </div>)
}

export default OutputChecked
