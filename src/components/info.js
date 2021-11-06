import React from "react";

const Info = ({ info }) => {
    return (
        <div className='info-container' style={{ width: `${info}` }}>
            <h2>About</h2>
        </div>
    );
}

export default Info;