import React from 'react';
import './OutputUnchecked.css';

function OutputUnchecked(props) {
    const {
        list
    } = props
    console.log(list)
    return (
        <div className="outputunchecked">
        <ol>
        {
        list.map(listItem =>{
           if(listItem.checked === false){
               return <li className="output__li">
                {listItem.name}
            <input type="checkbox"></input>
            </li>
        }
        })
        }
        </ol>
        </div>
    )
}

export default OutputUnchecked
