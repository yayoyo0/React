import React from 'react';

const userInput = (props) => {
    const header = {
        marginTop: "30px",
        backgroundColor: "#222",
        color: "white"
    }
    return (
        <input style={header} type="text" value={props.username} onChange={props.changeUsername} />
    )
}
export default userInput;