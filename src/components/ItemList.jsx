/* eslint-disable react/prop-types */
import React from "react";
import Item from "./Item";
import Container from "@mui/material/Container";
import ImageList from '@mui/material/ImageList';
function ItemList({ listProducts }) {
  return (
    <>
      <Container style={{ display: "flex", justifyContent: "center", paddingTop: '10px' }}>
        <ImageList sx={{ width: 900, height: 650 }} key="Subheader" cols={3}>
          {listProducts.map((product) => (
            <Item key={product.id} product={product} />
          ))}
        </ImageList>
      </Container>
    </>
  );
}

export default ItemList;
