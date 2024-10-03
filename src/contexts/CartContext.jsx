import { Children, createContext, useState } from "react";

export const CartContext = createContext()

export const CartContextProvider = ({children})=>{
    const [cartProduct, setCardProduct] = useState([]);

    const addToCart=(product)=>{
        const newproduct= {...product, quantity:1}
        setCardProduct((prev)=>[...prev, newproduct])
    }

    const updateQuantity=(product, type)=>{
        let updatedProduct;
        if(type === 'add'){
            updatedProduct=cartProduct.map((singleproduct)=>
                singleproduct.id===product.id ? {...singleproduct, quantity: singleproduct.quantity + 1}: singleproduct
            )
        }
        else if(type==='sub'){
            updatedProduct=cartProduct.map((singleproduct)=>
                singleproduct.id===product.id ? {...singleproduct, quantity: singleproduct.quantity -1}: singleproduct
            )
        }
        setCardProduct(updatedProduct);

    }


    return <CartContext.Provider value={{ cartProduct, addToCart, updateQuantity }}>{children}</CartContext.Provider>
}