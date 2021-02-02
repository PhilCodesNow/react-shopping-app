import React from 'react';
import AddBoxIcon from '@material-ui/icons/AddBox';
import './Input.css';

function Input(props) {
    const {
        handleInputSubmit,
        listRef
    } = props




    return (
        <div className="input">
            <div className="input__header">
                <h1>Shopping List</h1>
            </div>
            <div className="input__flex">
            <form className="input__form">
                <input type="text" placeholder="New Item" ref={listRef}/>
                <AddBoxIcon onClick={handleInputSubmit}></AddBoxIcon>
            </form>
            </div>
        </div>
    )
}

export default Input
