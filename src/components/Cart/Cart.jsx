import { useEffect, useState } from "react";
import { getStoredCart, removeFromLS } from "../../utilities/localStorage";
import { useLoaderData } from "react-router-dom";
import Heading from "../Heading";
import { Helmet } from "react-helmet-async";


// const Cart = ({ cart, handleRemoveFromCart }) => {
const Cart = () => {

    const loadedProducts = useLoaderData();
    console.log('Loaded products:', loadedProducts);

    const [cart, setCart] = useState([]);
    const [sort, setSort] = useState('');

    // load cart from local storage
    useEffect(() => {
        // console.log('called the useEffect', loadedProducts.length);
        // if (loadedProducts.length) {
        const getCart = getStoredCart();
        console.log('getCart:', getCart);
        // const savedCart = [];
        // for (const cartProductId of getCart) {
        // console.log('cartProductId:', cartProductId);
        // const productsToBeAddedToCart = loadedProducts.find(loadedProduct => loadedProduct.id === cartProductId);
        const productsToBeAddedToCart = loadedProducts.filter(loadedProduct => getCart.includes(loadedProduct.id));
        // console.log('productsToBeAddedToCart: ', productsToBeAddedToCart);
        // if (productsToBeAddedToCart) {
        //     savedCart.push(productsToBeAddedToCart);
        // }
        // }
        // console.log('savedCart:', savedCart);
        console.log('productsToBeAddedToCart:', productsToBeAddedToCart);
        setCart(productsToBeAddedToCart);

    }, [loadedProducts])

    console.log('cart', cart);

    const handleSort = sortType => {
        setSort(sortType);
        if (sortType === "Price") {
            const sortedCartProducts = [...cart].sort((a, b) => a.price - b.price);
            setCart(sortedCartProducts);
        }

        if (sortType === "Ratings") {
            const sortedCartProducts = [...cart].sort((a, b) => a.ratings - b.ratings);
            setCart(sortedCartProducts);
        }
    }

    const handleRemoveFromCart = id => {
        // visual cart remove
        const remainingCart = cart.filter(product => product.id !== id);
        setCart(remainingCart);
        // remove from LS
        removeFromLS(id);
    }

    return (


        < div className="bg-blue-300 p-3">
            <Helmet>
                <title>For Our Beauty | Cart</title>
            </Helmet>
            <Heading
                title="Welcome to Dashboard"
                subtitle="You can manage your previously added products to cart by removing the ones you wish to"
            ></Heading>

            <div className="divider py-6">
                <h3>Cart PRODUCTS: {cart?.length}</h3>
            </div>

            <details className="dropdown">
                <summary className="btn m-1">
                    {
                        sort ? `Sort by: ${sort}` : 'Sort by'
                    }
                </summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li onClick={() => handleSort("Price")}><a>Price</a></li>
                    <li onClick={() => handleSort("Ratings")}><a>Ratings</a></li>
                </ul>
            </details>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                {
                    cart.map(product =>
                        <div
                            key={product?.id}
                            className="flex flex-col mb-3"
                        >
                            <div className="card bg-blue-100 shadow-sm">
                                <figure className="h-64">
                                    {/* <figure> */}
                                    <img
                                        className="h-full w-full object-cover"
                                        src={product?.img}
                                        alt="product image" />
                                    {/* <img className="w-2xs" src={img} alt="image of product" /> */}
                                    {/* <img
                                        className="w-full"
                                        src={product?.img}></img> */}
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">{product?.name}</h2>
                                    <div className="flex justify-between gap-5">
                                        <div className="badge badge-secondary">{product?.ratings}</div>
                                        <div className="rating">
                                            <input type="radio" name="rating-1" className="mask mask-star" aria-label="1 star" />
                                            <input type="radio" name="rating-1" className="mask mask-star" aria-label="2 star" defaultChecked />
                                            <input type="radio" name="rating-1" className="mask mask-star" aria-label="3 star" />
                                            <input type="radio" name="rating-1" className="mask mask-star" aria-label="4 star" />
                                            <input type="radio" name="rating-1" className="mask mask-star" aria-label="5 star" />
                                        </div>
                                        <p>{product?.ratingsCount}</p>
                                    </div>
                                    <span className="text-xl font-semibold">${product?.price}.00k</span>
                                    <div className="card-actions">
                                        <button onClick={() => handleRemoveFromCart(product?.id)} className="btn btn-warning btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">Remove</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div >
    );
};

export default Cart;