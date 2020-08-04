import React from 'react'
import './PhoneInput.css'

const phoneInput = ({number, changed, children}) => {
    return (
        <div className="PhoneInput">
            <p>Value in state: {number}</p>
            <input type="number" value={number} onChange={changed}></input>
        </div>
    )
}

export default phoneInput