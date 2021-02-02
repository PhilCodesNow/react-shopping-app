import React from 'react';
import './OutputUnchecked.css';

function OutputUnchecked(props) {
    const {
        list,
        handleCheckedChange
    } = props

    

// return(<div>
//     {list.map(listItem =>{
//         if(listItem.checked === false){
//             return (
//             <li className="output__li" key={listItem.id}>
//             {listItem.name}
//         <input type="checkbox" name="checked" onClick={() => handleCheckedChange(listItem.id)}></input>
//         </li>)
//     }
//     })
//     }
//     </div>
// )

// create array of unchecked list  items return those
const uncheckedList = list.map(listItem =>{
    if(listItem.checked === false){
        console.log('render')
        return (
            <li key={listItem.id}>
               {listItem.name}
            <input type="checkbox" name="checked" onClick={() => handleCheckedChange(listItem.id)}></input> 
            </li>
        )
    }
})
console.log(list)


return <div>{uncheckedList}</div>

}



export default OutputUnchecked
