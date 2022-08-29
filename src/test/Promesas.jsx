import React, { useState, useEffect } from "react";

export default function Promesas() {

  const [loading, setLoading] = useState(true);

  const [pago, setPago] = useState(0);

  const [error, setError] = useState('');


  const [carga, setCarga] = useState(true);
  const [productos, setProductos] = useState([]);
  const [erro1, setError1] = useState('');



  useEffect(()=>{
    let promesasProductos = new Promise((res, rej) =>{
      setTimeout(()=>{
        res([
          {id: 1, nombre: 'Coca', precio: 100},
          {id: 2, nombre: 'Sprite', precio: 100},
          {id: 3, nombre: 'Fanta', precio: 100},
        ]);
      }, 3000);
    });

    promesasProductos
    .then((res)=>{
      setProductos(res);
    })
  });

  let pagara = new Promise((res, rej) => {
    setTimeout(() => {
      res(50);
      // rej('No pagaste peluca');

    }, 3000);

    // rej()
  });

  pagara
  .then((sePago)=>{
    setPago(sePago);
   })
   .catch((err)=>{
    setError(err);
})
 .finally(()=>{
  setLoading(false);
 })

  // pagara
  //  .then((res)=>{
  //   if(res=== 50){
  //       console.log('pagaste justo');
  //   }else if(res <50 || res >25){
  //       console.log("no pagaste todo");
  //   }else{
  //       console.log("pagaste de mas!");
  //   }
  //   //  console.log(pagara);
  //   //  alert("pagaste!!!")
  //  })


  //  .catch((err)=>{
  //       if (err === 'No pagaste peluca'){
  //           console.log(err)
  //       } else{

  //           }
  // })


//   .finally(()=>{});

//   setInterval(()=>{
//     console.log(pagara);
//   }, 1500);
  

  return <div>
    <p>Loading: {loading ? 'Loading...' : 'Finalizo la carga'} </p>
    <p>Pago: {pago ?  'Se pagaron $' + pago  : null} </p>
    <p>Error: {error ? error : null} </p>
    {productos.map((item)=> (
          <div>
          <p key={item.id
          }> Nombre: {item.nombre} </p>
          <p key={item.id
          }> Precio: ${item.precio} </p>
        </div>
    ))}
  </div>;
}
