import React from 'react';

import "./imgbox.css";

export const ImgBox = (props) => {
    return (
        <div className="ImgBox">
            <img alt="" src={props.img} />
            <div className='descriptions' >
                <h3>{props.name}</h3>
                <p>Still actually <span>{props.status}</span></p>
                <p><span>{props.specie}</span></p>
            </div>
        </div>
    )
}
