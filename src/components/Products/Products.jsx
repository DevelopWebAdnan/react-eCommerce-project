import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { addToLS, getStoredCart, removeFromLS } from "../../utilities/localStorage";
import Cart from "../Cart/Cart";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('/beautyStore.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }, [])

    // load cart from local storage
    useEffect(() => {
        console.log('called the useEffect', products.length);
        if (products.length) {
            const getCart = getStoredCart();
            console.log(getCart, products);
            const savedCart = [];
            for (const id of getCart) {
                console.log(id);
                const product = products.find(product => product.id === id);
                if (product) {
                    savedCart.push(product);
                }
            }
            console.log(savedCart);
            setCart(savedCart);
        }
    }, [products])

    const handleAddToCart = product => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToLS(product.id);
    }

    const handleRemoveFromCart = id => {
        // visual cart remove
        const remainingCart = cart.filter(product => product.id !== id);
        setCart(remainingCart);
        // remove from LS
        removeFromLS(id);
    }

    return (
        <div className="my-10">
            <div className="divider py-6">
                <h2 className="font-bold text-xl">FEATURED PRODUCTS: {products.length}</h2>
            </div>

            <Cart
                cart={cart}
                handleRemoveFromCart={handleRemoveFromCart}
            ></Cart>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
                {
                    products.map(product => <ProductCard
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></ProductCard>)
                }
            </div>
        </div>
    );
};

export default Products;