import React, { useState } from 'react'
import './Colorpicker.css'

const ColorPicker = () => {
    const [color, setcolor] = useState("FFFFFF");

    function handelColorChange(event){
        setcolor(event.target.value);
    }
  return (
    <div className='colorpicker-container'>
        <h1>Color Picker</h1>
        <div className='color-display' style={{backgroundColor:color}}>
            <p>Selected color: {color}</p>
        </div>
        <label>Select a color</label>
        <input type='color'value={color} onChange={handelColorChange}/>


    </div>
  )
}

export default ColorPicker
