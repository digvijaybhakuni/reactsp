import React from 'react';

import './Loading.css';

export const Loading = (props) => {

    return <>
        <div className="dotwrapper">
            <p className="loading">Loading</p>
            <div className="dot0" />
            <div className="dot1" />
            <div className="dot2" />
        </div>
    </>;

};