/* eslint-disable react/prop-types */
import React from "react";
import Item from "./Item";
import Container from "@mui/material/Container";
import ImageList from '@mui/material/ImageList';

function ItemList({ listProducts, categoryId }) {
  return (
    
    <>
      <Container style={{ display: "flex", justifyContent: "center", paddingTop: '30px'}}>
        <ImageList key="Subheader" sx={{
          width: {
            xs: 600,
            sm: 600,
            md: 850,
            lg: 950,
            xl: 950,
          },
          height: {
            xs: 400,
            sm: 450,
            md: 550,
            lg: 650,
            xl: 700,
          }}} cols={3}>
          {listProducts.map((product) => (
            <Item key={product.id} product={product} categoryId={categoryId} />
          ))}
        </ImageList>
      </Container>
    </>
  );
}

export default ItemList;
