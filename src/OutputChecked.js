import React from 'react';
import './OutputChecked.css';
import DeleteIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';

function OutputChecked(props) {

    const {
        list,
        handleCheckedChange,
        handleDeleteItem
    } = props
    const checkedList = list.map(listItem =>{
        if(listItem.checked === true){
            return (
                <li key={listItem.id} className="outputchecked__li">
                    <input type="checkbox" name="checked" checked="checked" onClick={() => handleCheckedChange(listItem.id)}></input> 
                    <h2>{listItem.name}</h2>
                    <div>
                        <EditIcon></EditIcon>
                        <DeleteIcon
                        onClick={() =>{handleDeleteItem(listItem.id)}}></DeleteIcon>
                    </div>
                </li>
            )
        }else{
            return null
        }
    })

    
    
    return (<div className="outputchecked">
            <div className="outputchecked__header">
                <h2>
                Checked
                </h2>
            </div>
            <ul className="outputchecked__ul">
            {checkedList}
            </ul>
            </div>)
}

export default OutputChecked
