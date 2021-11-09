import React from "react";

const Info = ({ info, content }) => {
    return (
        <div className='info-container' style={{ width: `${info}` }}>
            <h2 style={{ opacity: `${content}` }}>About</h2>
            <p style={{ opacity: `${content}` }}>Global is an image archive blog.</p>
        </div>
    );
}

export default Info;