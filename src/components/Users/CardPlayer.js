import React from 'react'

function CardPlayer(props) {
    const {img , _id, user} = props
    console.log(user.username)
    return (
        <div>
            <h1>{user.username}</h1>
            
        </div>
    )
}
export default  CardPlayer