import React from 'react';
import OutputChecked from './OutputChecked';
import OutputUnchecked from './OutputUnchecked';
import './Output.css';


function Output(props) {
    const {
        list,
        handleCheckedChange
    } = props
    return (
        <div className="output">
            <OutputChecked
            list={list}
            handleCheckedChange={handleCheckedChange}
            />
            <OutputUnchecked
            list={list}
            handleCheckedChange={handleCheckedChange}
            />
        {/* <ol>
        {
        list.map(listItem =>{
           return <li className="output__li">
                    {listItem}
                    <input type="checkbox"></input>
                </li>
        })
        }
        </ol> */}
        </div>
    )
}

export default Output
