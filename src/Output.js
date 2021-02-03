import React from 'react';
import OutputChecked from './OutputChecked';
import OutputUnchecked from './OutputUnchecked';
import './Output.css';


function Output(props) {
    const {
        list,
        handleCheckedChange,
        handleDeleteItem
    } = props
    return (
        <div className="output">
            <OutputUnchecked
            list={list}
            handleCheckedChange={handleCheckedChange}
            handleDeleteItem={handleDeleteItem}
            />
            <OutputChecked
            list={list}
            handleCheckedChange={handleCheckedChange}
            handleDeleteItem={handleDeleteItem}
            />
        </div>
    )
}

export default Output
