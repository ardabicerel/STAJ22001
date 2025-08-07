import React from 'react';


function Button(props) {
    return (
    <>
        <button {...props} className='m-2'>{props.children}</button>
    </> )
}

export default Button
