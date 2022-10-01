/* eslint-disable react/prop-types */
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { useCart } from '../context/CartContext'


export default function CartItem({purchase}) {
  const{removeItem}= useCart()
  const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
    border: '2px solid #c9c9c9'
  });

  return (
    <Paper
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="complex" src={purchase.img} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                {purchase.name}
              </Typography>
              <Typography variant="body2" gutterBottom>
                Cantidad: {purchase.quantity}
              </Typography>

            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer', fontWeight:'lighter' }} variant="body2" onClick={()=>removeItem(purchase.id)} >
                Eliminar Producto
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              $ {purchase.quantity * purchase.price}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}





//   return (
        // <div
        //   className="container d-flex justify-content-center"
        //   key={purchase.id}
        // >
        //   <div className="row">
        //     <div
        //       className="card col-3 d-flex justify-content-center "
        //       style={{
        //         width: "50rem",
        //         height: "150px",
        //         margin: "15px",
        //         padding: "100px",
        //       }}
        //     >
        //       <ul className="list-group list-group-flush">
        //         <li className="list-group-item  d-flex justify-content-center ">
        //           Producto: {purchase.name}
        //         </li>
        //         <li className="list-group-item  d-flex justify-content-center ">
        //           Cantidad: {purchase.quantity}
        //         </li>
        //         <li className="list-group-item  d-flex justify-content-center ">
        //           Precio: {purchase.quantity * purchase.price}
        //         </li>
        //         <div className="d-flex justify-content-center">
        //           <a
        //             onClick={() => navegate("/")}
        //             className="btn btn-outline-primary"
        //             style={{
        //               marginLeft: "50px",
        //               marginRight: "50px",
        //               borderRadius: "10px",
        //               marginTop: "10px",
        //               marginBottom: "10px",
        //             }}
        //           >
        //             Seguir comprando
        //           </a>
        //           <a
        //             className="btn btn-outline-danger"
        //             style={{
        //               marginLeft: "50px",
        //               marginRight: "50px",
        //               borderRadius: "10px",
        //               marginTop: "10px",
        //               marginBottom: "10px",
        //             }}
        //             onClick={()=>removeItem(purchase.id)}
        //           >
        //             Eliminar Producto
        //           </a>
        //         </div>
        //       </ul>
        //     </div>
        //   </div>
        // </div>
//   )

