import {createContext, useState } from "react";

export const CartContext = createContext()

export const CartContextProvider = ({children})=>{
    const [cartProduct, setCardProduct] = useState( localStorage.getItem('productsInCart') ? JSON.parse(localStorage.getItem('productsInCart')) : []);
    const addToCart=(product)=>{
        const newproduct= {...product, quantity:1}
        setCardProduct((prev)=>[...prev, newproduct])
    }

    const updateQuantity = (product, type) => {
        setCardProduct((prev) => {
            return prev.map((singleProduct) => {
                if (singleProduct.id === product.id) {
                    const newQuantity =
                        type === 'add'
                            ? singleProduct.quantity + 1
                            : singleProduct.quantity - 1;

                    if (newQuantity < 1) {
                        return null; 
                    }

                    return { ...singleProduct, quantity: newQuantity };
                }
                return singleProduct;
            }).filter(Boolean); 
        });
    };
    return <CartContext.Provider value={{ cartProduct, addToCart, updateQuantity }}>{children}</CartContext.Provider>
}