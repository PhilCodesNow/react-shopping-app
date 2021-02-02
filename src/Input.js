import React from 'react';
import AddBoxIcon from '@material-ui/icons/AddBox';
import './Input.css';

function Input() {
    return (
        <div className="input">
            <form>
                <input type="text" placeholder="New Item"/>
                <AddBoxIcon></AddBoxIcon>
            </form>
        </div>
    )
}

export default Input
