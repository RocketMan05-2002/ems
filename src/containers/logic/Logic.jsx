import React from 'react'
import "./logic.css"

const Logic = () => {
  return (
    <div className='logic'>
        <div className="logic__top">
            <button className='add__data--btn'>
                Add Employee Data
            </button>
        </div>
        <div className="logic__middle">
            <h1>Output</h1>
            <button className='get__data--btn'>
                Download rewards file (xlsx)
            </button>
        </div>
        <div className="logic__bottom">
            <h2 className='show__data--btn'>AI based summary of Industry trends</h2>
        </div>
    </div>
  )
}

export default Logic
