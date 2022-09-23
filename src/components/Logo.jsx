import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Logo = () => {
  const navigate = useNavigate();
  return (
    <div style={{margin: '-50px',paddingBottom: '15px',marginBottom: '20px', display: 'flex', justifyContent: 'center', backgroundColor: '#6d4c41'
    }}>
        <img onClick={()=> navigate('/')} style={{width: '10%'}} src="https://i.ibb.co/tJtJSBp/1.jpg" alt="logo" />
    </div>
  )
}
