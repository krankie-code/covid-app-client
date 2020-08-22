import React from 'react'

function CardPlayer(props) {
    const {img , _id, username} = props
    console.log(props)
    return (
        <div>
            <h1>{username}</h1>
            <img src={img}></img>
            
        </div>
    )
}
export default  CardPlayer