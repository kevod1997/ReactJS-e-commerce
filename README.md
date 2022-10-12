# E-commerce. Hecho por [Kevin Defalco](https://www.linkedin.com/in/kevindefalco/)

# [![CSS](https://img.shields.io/badge/Link%20al%20sitio-blueviolet)](https://kevod1997.github.io/ProyectoCoderReact/)

# [PakisPan - Aplicacion desarrolada con React.js](https://kevod1997.github.io/ProyectoCoderReact/)

## Comandos

Create a new React app
`npx create-react-app name`

Develop mode
`npm start`

React Router Dom
`npm install react-router-dom`

React Icons
`npm install react-icons --save`

Firebase v 8.9.1
`npm install firebase@9.10.0`

Deploy
`npm run build`

## Dependencias

@emotion/react: ^11.10.0,
@emotion/styled: ^11.10.0,
@mui/icons-material: ^5.10.2,
@mui/material: ^5.10.2,
@testing-library/jest-dom: ^5.16.5,
@testing-library/react: ^13.3.0,
@testing-library/user-event: ^13.5.0,
@bootstrap: ^5.2.0,
@firebase: ^9.10.0,
@prop-types: ^15.8.1,
@react: ^18.2.0,
@react-bootstrap: ^2.5.0,
@react-dom: ^18.2.0,
@react-icons: ^4.4.0,
@react-material-ui-carousel: ^3.4.2,
@react-mui-counter: ^1.0.9,
@react-router-dom: ^6.3.0,
@react-scripts: 5.0.1,
@react-toastify: ^9.0.8,
@sweetalert2: ^11.4.37,
@web-vitals: ^2.1.4


## Descripción

PakisPan es una single-page application  basado en un emprendemiento de venta de panes artesanales. Los productos y la orden de compra con los pedidos se almacenan en firebase.

La pagina consiste en una pagina principal, donde una imagen principal explica brevemente en que consiste el negocio y como funciona su metodologia de trabajo. Debajo de la imagen, se muestran los productos que se ofrecen, se puede ver su nombre y su precio. Se puede agregar productos al carrito haciendo click en el bolso, el cual disparar 2 tipos de leyendas dependiendo de si haya o no stock del producto.

### Items

Asimismo, si se hace click en la imagen del producto se llevara a la card del mismo, en donde se dara una descripcion del producto, la cantidad que hay disponible y una botonera para poder agregar productos al carrito. 

### Categorías
 En la barra de navegación se puede elegir entre las tres categorías de productos para visualizar. 

### Carrito

El carrito muestra la totalidad de los productos elegidos y dispone de un contador para agregar o quitar cantidades del producto. Tiene un máximo según stock del producto y cuando se disminuye a cero, el producto se elimina del carrito. Además tiene botones para borrar individualmente los productos y la totalidad.
Finalmente consta de un boton para poder finalizar la compra, el cual te dirige hacia un formulario en el cual se debe introducir nombre, telefono y mail para poder generar una orden (la genera firebase una vez validado el formulario).


## Librerías utilizadas

### Material UI v5

Esta libreria fue utilizada debido a que nos otorga un abanico de posibilidades muy variado para  crear vistas dinámicas e interactivas de gran calidad, para que la experiencia de navegacion sea mas amena para el usuario.

### Bootstrap v5.2

Gran parte del proyecto fue realizado con este libreria debido a que es sencillo e intuitivo y se adapta a todo tipo de pantallas. Es extensible y cuenta con múltiples implementaciones externas.

### SweetAlert2 y Tostify

Estas librerias fueron utilizadas ya que son excelentes visual e interactivamente, y permiten que el usuario tenga una mejor experiencia al navegar en el sitio.


#### TO-DO

| Funcionalidades | descripción                                                                  |
| --------------- | ---------------------------------------------------------------------------- |
| Login           | Crear un login para verificar usuarios                                       |
| Stock           | Reducir la cantidad de stock de la base de datos al concluir una compra      |
| Favoritos       | Añadir una lista de favoritos generada por cada usuario. (Asociada al Login) |
