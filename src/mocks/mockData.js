const products = [
    {
      id: 1,
      name: "Pan de Hamgurguesa",
      price: 150,
      stock: 40,
      category: 'temporales',
      detail: "Pan de Brioche, hecho a base de una pasta con huevos, levadura, leche, mantequilla y azúcar",
      img:
        "https://i.ibb.co/PjMHQVC/brioche.jpg"
    },
      {
        id: 2,
        name: "Focaccia",
        price: 850,
        stock: 20,
        category: 'habituales',
        detail: "Pan de masa madre cubierto con hierbas y otros productos alimenticios",
        img:
          "https://i.ibb.co/F3n4dwK/Focaccia.jpg"
      },
      {
        id: 3,
        name: "Hogaza de Centeno",
        price: 800,
        stock: 20,
        category: 'habituales',
        detail: "Pan de masa madre, esponjoso y con la corteza crujiente, a base de centeno",
        img: "https://i.ibb.co/hfhBGbg/Hogazacenteno.jpg"
      },
      {
        id: 4,
        name: "Hogaza",
        price: 700,
        stock: 20,
        category: 'habituales',
        detail:
          "Pan de masa madre, esponjoso y con la corteza crujiente",
        img: "https://i.ibb.co/8KKtj9c/Hogazapanmasamadre.jpg"
      },
      {
        id: 5,
        name: "Pan integral",
        price: 600,
        stock: 20,
        category: 'oferta',
        detail: "Pan integral de masa madre, esponjoso y con la corteza crujiente",
        img:
          "https://i.ibb.co/B4YsXF7/Panintegral.jpg"
      },
      {
        id: 6,
        name: "Pan de Molde",
        price: 500,
        stock: 15,
        category: 'oferta',
        detail: "Pan de molde con masa madre. 500 gr.",
        img:
          "https://i.ibb.co/y8m3MvG/molde.jpg"
      },
    ];
  
    export const data = new Promise((res, rej) => {
      let condition = true
      setTimeout(() => {
        if (condition){
          res(products);
        }else{
          rej('algo salio mal')
        }
    
      }, 2000);
    })