import React, {useEffect, useState} from 'react'
import { getFirestore, collection, getDocs } from 'firebase/firestore';

export default function TestLecturaDeProductos() {
    const [productos, setProductos] = useState([]);
    useEffect(() => {
      const database = getFirestore()
      const collectionRef = collection(database, 'products');
      getDocs(collectionRef).then((res)=> {

        // let productosLimpios = [];
        // res.docs.forEach((item)=>{
            
        //     const objetoLimpio = {...item.data(), id: item.id};
        //     productosLimpios.push(objetoLimpio)
        // });

        let productosLimpios = res.docs.map((item)=>{
            /*return = reemplazar. Me creo un aray de productos limpios reecorriendo el viejo y por c/u de items que haya, agarro ese item y lo reempplazo por el item modificado */
           return {...item.data(), id: item.id};
        });

        setProductos(productosLimpios)
        // const cleanProducts = res.docs
        // const misObjeto = {...res.data(), id: res.id};
        // miObjeto.id = res.id;
        // setProductos(misObjeto);
      });
    }, []);
    

  return (
    <>
    <div>
    {productos.map((producto)=> (
        <div key={producto.id}>
        <div>id: {producto.id} </div>
        <div>name: {producto.name} </div>
        <div>price: {producto.price} </div>
        <div>stock: {producto.stock} </div>
        </div>
    ))}
    </div>
        

      
      </>

  )
}
