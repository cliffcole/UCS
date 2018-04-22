import React from 'react';

const faults = (props) => {
    return(
        <div>
        <p>Faults</p>
        <p>{props.hostname}</p>
        </div>
    )
}

export default faults