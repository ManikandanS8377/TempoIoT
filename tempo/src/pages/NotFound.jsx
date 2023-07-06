import React from 'react';
const NotFound = () => {
    const containerStyle = {
        // backgroundColor: 'red',
        padding: '10px',
        borderRadius: '5px',
        color: 'white',
        // display:'flex',
        color:'red',
        textAlign:'center',
        justfyContent:'center',
        // marginLeft:'20px'
        

    };
    return (
        <div style={containerStyle}>
            <h1>404 - Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
        </div>
    );
};

export default NotFound;