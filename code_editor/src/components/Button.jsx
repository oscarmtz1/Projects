import React from 'react'
const Button = ({title, onClick}) => { //takes in title and onClick
    return (
        <div>
            <button
                style={{
                    maxWidth: "140px",
                    minWidth: "80px",
                    height: "30px",
                    marginRight: "5 px"
                }}
                onClick={onClick}>
                    {title}
            </button>
        </div>
    )
}

export default Button