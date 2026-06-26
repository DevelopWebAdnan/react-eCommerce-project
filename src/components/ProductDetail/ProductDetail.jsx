import { CiShoppingCart } from "react-icons/ci";
import { useLoaderData, useParams } from "react-router-dom";
import { addToLS, getStoredCart } from "../../utilities/localStorage";
import { useEffect, useState } from "react";

const ProductDetail = () => {

    const data = useLoaderData();
    const { id } = useParams();
    const productId = parseInt(id);

    const product = data.find(product => product.id === productId);
    // console.log(data, typeof(product.id), typeof(id), typeof(productId));
    console.log('Detail of:', product);

    const { id: currentId, img } = product;

    const [cart, setCart] = useState([]);

    // load cart from local storage
    useEffect(() => {
        // console.log('called the useEffect', products.length);
        // if (products.length) {
        const getCart = getStoredCart();
        // console.log(getCart, products);
        console.log('getCart:', getCart);
        // const savedCart = [];
        for (const cardProductId of getCart) {
            console.log('cartProductId:', cardProductId);
            // const product = products.find(product => product.id === id);
            // if (product) {
            // savedCart.push(product);
            // }
        }
        // console.log(savedCart);
        // setCart(savedCart);
        // }
        // }, [products])
    }, [])

    // const handleAddToCart = product => {
    const handleAddToCart = productId => {
        const newCart = [...cart, productId];
        setCart(newCart);
        addToLS(productId);
    }

    // const handleRemoveFromCart = id => {
    //     // visual cart remove
    //     const remainingCart = cart.filter(product => product.id !== id);
    //     setCart(remainingCart);
    //     // remove from LS
    //     removeFromLS(id);
    // }

    return (
        <div className="my-12">
            <h2>Book Details: {id}</h2>
            <img className="w-2xs" src={img} alt="image of product" />
            <br />
            <button
                onClick={() => handleAddToCart(productId)}
                className="btn btn-primary mr-4"
            ><CiShoppingCart
                className="text-2xl"
            ></CiShoppingCart> Add to Cart
            </button>
            {/* <button className="btn btn-accent btn-outline mr-4">Add To Cart</button> */}

            <button className="btn btn-accent">Add to Wish List</button>

            {/* {
                cart.map(cartItemId => <Cart
                    key={cartItemId}
                    cart={cart}
                    handleRemoveFromCart={handleRemoveFromCart}
                ></Cart>)
            } */}
            {/* <Cart
                cart={cart}
                handleRemoveFromCart={handleRemoveFromCart}
            ></Cart> */}
        </div>
    );
};

export default ProductDetail;