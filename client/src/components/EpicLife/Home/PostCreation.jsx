import React from 'react';
import AddIcon from '@mui/icons-material/Add';

function PostCreation() {
  return (
    <>
      <div style={{
        border: '1px solid #e0e0e0', 
        borderRadius: "10px", 
        display: 'flex', 
        alignItems: 'center', 
        gap: "10px", 
        padding: "10px 15px", 
        marginBottom: '16px', 
        backgroundColor: "#fff", 
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)"
      }}>
        <img 
          style={{
            height: '60px', 
            width: "60px", 
            borderRadius: "50%", 
            objectFit: 'cover',
            flexShrink: 0
          }} 
          src='https://media.istockphoto.com/id/1276543539/photo/large-areas-of-wind-power-in-the-mountains.jpg?s=1024x1024&w=is&k=20&c=5Wps6G22hRTE3FPmxK2qpg3xG73PC4yP1SMsPWq4_AM='
          alt="Profile"
        />
        <input 
          style={{
            border: '1px solid #e0e0e0', 
            borderRadius: "25px", 
            height: "40px", 
            padding: "0 15px", 
            flex: 1, 
            fontSize: '16px',
            outline: 'none'
          }} 
          placeholder='What’s on your mind?'
        />
        <button 
          style={{
            height: "40px", 
            width: "40px", 
            backgroundColor: "#1976d2", 
            border: "none", 
            borderRadius: "50%", 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            color: '#fff', 
            cursor: "pointer",
            outline: 'none',
            transition: 'background-color 0.3s ease'
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#1565c0"}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#1976d2"}
        >
          <AddIcon style={{ fontSize: '24px' }} />
        </button>
      </div>
    </>
  );
}

export default PostCreation;
