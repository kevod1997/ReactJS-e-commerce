import React from 'react'
import ItemListContainer from './ItemListContainer'

export const Home = () => {
  return (
    <>
        <div style={{display: 'flex', justifyContent: 'center', backgroundImage: 'url("https://img.freepik.com/free-photo/slice-bread-with-baguette-tablecloth_114579-5829.jpg?w=1060&t=st=1664200828~exp=1664201428~hmac=5e1933c4ae4a6e3c2b92976902b45a43b89ebd216209e1c955b8f9e62288945f")', backgroundRepeat: 'repeat-x', backgroundSize: 'cover'}}>
            <img style={{padding: '15px'}} src="https://i.postimg.cc/hPVdg2BS/wheat-bread-special-2.jpg" alt="welcome logo" />
        </div>
        <ItemListContainer/>
        <div style={{display: 'flex', justifyContent: 'center', backgroundColor: '#6d4c41'}}>
        <div style={{flexDirection: 'column', backgroundColor: '#FFC27F', marginTop: '25px', border: '1px solid #FFC27F', borderRadius: '10px', padding: '25px'}}>
      
        <h3 style={{
            flexDirection: "column",
            textAlign: 'center',
            color: '#6d4c41',
          borderBottom: "solid 2px #6d4c41"
          }}>CONTACTACTANOS</h3>
          <p style={{
            flexDirection: "column",
            textAlign: 'center',
            color: '#6d4c41',
            marginTop: '15px'
          }}>
            POR CONSULTAS O COMENTARIOS GENERALES ESCRIBINOS A:
          </p>
          <p className="btn btn-warning d-flex justify-content-center " style={{
            color: '#6d4c41',
            marginLeft: '40px',
            marginRight: '40px',
            fontWeight: 'bold'
          }}
          >pakispan@gmail.com</p>
        </div>
      </div>
    </>
  )
}
