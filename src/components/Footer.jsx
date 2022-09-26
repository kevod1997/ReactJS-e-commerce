import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

function Footer() {
  return (
    <div className="footer">
      <div style={{display: 'flex', justifyContent:'center'}}>
      <div style={{bottom: '0', position: 'absolute'}}>
      <div
        style={{
          marginBottom: "5px",
          paddingTop: '15px',
          display: 'flex', justifyContent:'center'
        }}
      >
        <span>
          <InstagramIcon fontSize="large" sx={{ color: "#FFC27F", marginRight: '10px' }} />
        </span>
        <span>
          <WhatsAppIcon fontSize="large" sx={{ color: "#FFC27F", marginLeft: '10px' }} />
        </span>
      </div>
      <div
        style={{
          borderTop: "solid 2px #FFC27F",
        }}
      >
        <p style={{ color: "#B99666"}}>
          © PakisPan 2021 - Todos los derechos reservados
        </p>
      </div>
      </div>
      </div>
    </div>
  );
}

export default Footer;
