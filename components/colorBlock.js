import { useState } from  'react';
import './colorBlock.css';

export default function colorBlock(props) {

    return (
        <>
            <div style={props.color} className='color-block'>
                {props.colorName}
            </div>
        </>
    )
}