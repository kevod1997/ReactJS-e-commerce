/* eslint-disable react/prop-types */
import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import { useCart } from "../context/CartContext";

export default function CartItem({ purchase }) {
  const { removeItem, sumItem,reduceItem } = useCart();
  const Img = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
    border: "2px solid #c9c9c9",
  });


  return (
    <Paper
      sx={{
        p: 1,
        margin: "auto",
        maxWidth: 1000,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#1A2027" : "#fff",
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img 
            alt="complex" src={purchase.img} />
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
              {purchase.quantity === purchase.stock? <p className="d-flex justify-content-center" style={{fontWeight: 'lighter', border: '1px solid red',color:'red', borderRadius: '5px', margin:'10px 50px', fontSize:'13px'}}>No hay mas stock</p>: ''}
              <button className="btn btn-dark" style={{margin: '3px'}}  onClick={()=>{purchase.quantity>=2? reduceItem(purchase): removeItem(purchase.id)}}>-</button>
              <button className="btn btn-dark" style={purchase.quantity === purchase.stock?{margin: '3px', cursor:'inherit'}:{margin: '3px'}}  onClick={()=>{purchase.quantity === purchase.stock? null: sumItem(purchase)}}>+</button>
            </Grid>
            <Grid item>
              <Typography
                sx={{ cursor: "pointer", fontWeight: "lighter" }}
                variant="body2"
                onClick={() => removeItem(purchase.id)}
              >
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
