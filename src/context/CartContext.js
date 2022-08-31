import React, { useContext, useEffect, useState } from "react";
const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  let getCartFromLs = JSON.parse(window.localStorage.getItem('compra'))
  if (getCartFromLs === null) {
    getCartFromLs = [];
  }
  const [cart, setCart] = useState(getCartFromLs);

  const addProducto = (item, cantidad) => {
    if (agregadoAlCart(item.id)) {
      setCart(
        cart.map((producto) => {
          return producto.id === item.id
            ? { ...producto, cantidad: producto.cantidad + cantidad }
            : producto;
        })
      );

    } else {
      setCart([...cart, { ...item, cantidad }]);
    }
  };
  //funcion de vaciar carrito
  const LimpiarCart = () => {
    return (
      setCart([])
    )
  };

  //funcion de agregar al carrito
  const agregadoAlCart = (id) => {
    return cart.find((producto) => producto.id === id) ? true : false;
  };
  //Funcion de quitar producto
  const quitarProducto = (id) =>
    setCart(cart.filter((producto) => producto.id !== id));

  //Funcion de precio final
  const precioFinal = () => {
    return (
      cart.reduce((prev, act) => prev + act.cantidad * act.precio, 0)
    );
  }

  //Funcion total de productos
  const totalProductos = () => {
    return (
      cart.reduce((prev, act) => prev + act.cantidad, 0)
    );
  }



  useEffect(() => {
    window.localStorage.setItem("compra", JSON.stringify(cart));
  }, [cart]);


  return (
    <CartContext.Provider
      value={{
        LimpiarCart,
        agregadoAlCart,
        quitarProducto,
        addProducto,
        precioFinal,
        cart,
        totalProductos,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;
