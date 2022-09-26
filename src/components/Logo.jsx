import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Logo = () => {
  const navigate = useNavigate();
  return (
    <div style={{marginTop: '-50px',paddingBottom: '15px', display: 'flex', justifyContent: 'center', backgroundColor: '#6d4c41'
    }}> <a href=""  style={{width: '11%'}}>
      <img onClick={()=> navigate('/')} style={{width: '100%'}} src="https://i.ibb.co/tJtJSBp/1.jpg" alt="logo" />
    </a>
        
    </div>
  )
}
