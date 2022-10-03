// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import ItemListContainer from '../components/ItemListContainer';

// export default function SimplePaper() {
//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         flexWrap: 'wrap',
//         '& > :not(style)': {
//           m: 3,
//           width: 128,
//           height: 128,
//         },
//       }}
//     >
//       <Paper elevation={0} />
//       <Paper>
//       <ItemListContainer/>
//       </Paper>
//       <Paper elevation={3} />
//     </Box>
//   );
// }

import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

export default function TitlebarImageList() {
  return (
    <ImageList sx={{ width: 850, height: 600}} key="Subheader" cols={3} >
      {itemData.map((item) => (
        <ImageListItem key={item.img}  style={{margin: '1.5px'}}  >
          <img
            className='imgCard'
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.name}
            loading="lazy"
            style={{objectFit: 'fill', cursor: 'pointer'}}
          />
          <ImageListItemBar

            title={item.name}
            subtitle={`$ ${item.price}`}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label= {`info about ${item.price}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
        
      ))}

    </ImageList>
  );
}

const itemData = [
  {
    id: '1',
    name: "Pan de Hamgurguesa",
    price: 150,
    stock: 40,
    category: 'Temporales',
    description: "Pan de Brioche, hecho a base de una pasta con huevos, levadura, leche, mantequilla y azúcar",
    img:
      "https://i.ibb.co/PjMHQVC/brioche.jpg"
  },
    {
      id: '2',
      name: "Focaccia",
      price: 850,
      stock: 20,
      category: 'Clasicos',
      description: "Pan de masa madre cubierto con hierbas y otros productos alimenticios",
      img:
        "https://i.ibb.co/F3n4dwK/Focaccia.jpg"
    },
    {
      id: '3',
      name: "Hogaza de Centeno",
      price: 800,
      stock: 20,
      category: 'Clasicos',
      description: "Pan de masa madre, esponjoso y con la corteza crujiente, a base de centeno",
      img: "https://i.ibb.co/hfhBGbg/Hogazacenteno.jpg"
    },
    {
      id: '4',
      name: "Hogaza",
      price: 700,
      stock: 20,
      category: 'Clasicos',
      description:
        "Pan de masa madre, esponjoso y con la corteza crujiente",
      img: "https://i.ibb.co/8KKtj9c/Hogazapanmasamadre.jpg"
    },
    {
      id: '5',
      name: "Pan integral",
      price: 600,
      stock: 20,
      category: 'Oferta',
      description: "Pan integral de masa madre, esponjoso y con la corteza crujiente",
      img:
      "https://i.ibb.co/B4YsXF7/Panintegral.jpg"
    },
    {
      id: '6',
      name: "Pan de Molde",
      price: 500,
      stock: 15,
      category: 'Oferta',
      description: "Pan de molde con masa madre. 500 gr.",
      img:
        "https://i.ibb.co/y8m3MvG/molde.jpg"
    },
  // {
  //   img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
  //   title: 'Breakfast',
  //   author: '@bkristastucchio',
  //   rows: 2,
  //   cols: 2,
  //   featured: true,
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
  //   title: 'Burger',
  //   author: '@rollelflex_graphy726',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
  //   title: 'Camera',
  //   author: '@helloimnik',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
  //   title: 'Coffee',
  //   author: '@nolanissac',
  //   cols: 2,
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
  //   title: 'Hats',
  //   author: '@hjrc33',
  //   cols: 2,
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
  //   title: 'Honey',
  //   author: '@arwinneil',
  //   rows: 2,
  //   cols: 2,
  //   featured: true,
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
  //   title: 'Basketball',
  //   author: '@tjdragotta',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
  //   title: 'Fern',
  //   author: '@katie_wasserman',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
  //   title: 'Mushrooms',
  //   author: '@silverdalex',
  //   rows: 2,
  //   cols: 2,
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
  //   title: 'Tomato basil',
  //   author: '@shelleypauls',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
  //   title: 'Sea star',
  //   author: '@peterlaster',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
  //   title: 'Bike',
  //   author: '@southside_customs',
  //   cols: 2,
  // },
];