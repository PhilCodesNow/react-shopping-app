import React from 'react'

function Output(props) {
    const {
        list
    } = props
    return (
        <div>
        <ol>
        {
        list.map(listItem =>{
           return <li>{listItem}</li>
        })
        }
        </ol>
        </div>
    )
}

export default Output
