import { useEffect, useState } from "react";
import { getStoredCart, removeFromLS } from "../../utilities/localStorage";
import { useLoaderData } from "react-router-dom";


// const Cart = ({ cart, handleRemoveFromCart }) => {
const Cart = () => {

    const products = useLoaderData();

    const [cart, setCart] = useState([]);

    // load cart from local storage
    useEffect(() => {
        console.log('called the useEffect', products.length);
        if (products.length) {
            const getCart = getStoredCart();
            // console.log(getCart, products);
            console.log('getCart:', getCart);
            const savedCart = [];
            for (const cartProductId of getCart) {
                console.log('cartProductId:', cartProductId);
                const productsInCart = products.find(product => product.id === cartProductId);
                // const productsInCart = products.filter(product => product.id === cartProductId);
                if (productsInCart) {
                savedCart.push(productsInCart);
                }
            }
            console.log(savedCart);
            setCart(savedCart);
        }
        // }, [products])
    }, [products])

    console.log('cart', cart);

    const handleRemoveFromCart = id => {
        // visual cart remove
        const remainingCart = cart.filter(product => product.id !== id);
        setCart(remainingCart);
        // remove from LS
        removeFromLS(id);
    }

    return (

        // {
        //     cart.map(cartItem => <Cart
        //         key={cartItem}
        //         cart={cart}
        //         handleRemoveFromCart={handleRemoveFromCart}
        //     ></Cart>)
        // }


        < div className="bg-slate-300 p-3" >
            <h3 className="text-xl font-bold text-center my-3">Cart: {cart?.length}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
            {
                cart.map(product =>
                    <div
                        key={product?.id}
                        className="flex flex-col mb-3"
                    >
                        <img
                            className="w-full"
                            src={product?.img}></img>

                        <button onClick={() => handleRemoveFromCart(product?.id)} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">Remove</button>
                    </div>
                )
            }
            </div>
        </div >
    );
};

export default Cart;