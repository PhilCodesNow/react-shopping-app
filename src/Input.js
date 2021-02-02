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
            <form>
                <input type="text" placeholder="New Item" ref={listRef}/>
                <AddBoxIcon onClick={handleInputSubmit}></AddBoxIcon>
            </form>
        </div>
    )
}

export default Input
