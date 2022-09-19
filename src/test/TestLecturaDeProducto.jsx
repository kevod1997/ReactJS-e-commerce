import React, {useEffect, useState} from 'react'
import { getFirestore, doc, collection, getDoc } from 'firebase/firestore';

export default function TestLecturaDeProducto() {
    const [producto, setProducto] = useState({});
    useEffect(() => {
      const database = getFirestore()
      const productoRef = doc(database, 'products', 'byEkCpzAfhk2ch8pIjdL');
      getDoc(productoRef).then((res)=> {
        console.log(res.data());
        const miObjeto = {...res.data(), id: res.id};
        // miObjeto.id = res.id;
        setProducto(miObjeto);
      });
    }, []);
    

  return (
    <>
      <div>id: {producto.id} </div>
      <div>name: {producto.name} </div>
      <div>price: {producto.price} </div>
      <div>stock: {producto.stock} </div>
      </>

  )
}
