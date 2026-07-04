import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { useParams } from "react-router-dom";

const Products = () => {
    const [products, setProducts] = useState([]);
    // const [cart, setCart] = useState([]);
    const {category} = useParams();

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
            // const getCart = getStoredCart();
            // console.log(getCart, products);
            // const savedCart = [];
            // for (const id of getCart) {
            //     console.log(id);
            //     const product = products.find(product => product.id === id);
            //     if (product) {
            //         savedCart.push(product);
            //     }
            // }
            // console.log(savedCart);
            // setCart(savedCart);
        }
    }, [products])

    // const handleAddToCart = product => {
    //     const newCart = [...cart, product];
    //     setCart(newCart);
    //     addToLS(product.id);
    // }

    // const handleRemoveFromCart = id => {
    //     // visual cart remove
    //     const remainingCart = cart.filter(product => product.id !== id);
    //     setCart(remainingCart);
    //     // remove from LS
    //     removeFromLS(id);
    // }

    return (
        <div className="my-10">
            
            <div className="divider py-6">
                <h3>FEATURED PRODUCTS: {products.length}</h3>
            </div>

            <p>{category} from products</p>

            <div className="flex gap-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        products.map(product => <ProductCard
                            key={product.id}
                            product={product}
                        // handleAddToCart={handleAddToCart}
                        ></ProductCard>)
                    }
                </div>
                {/* <div className="w-1/4">
                    <Cart
                        cart={cart}
                        handleRemoveFromCart={handleRemoveFromCart}
                    ></Cart>
                </div> */}
            </div>

        </div>
    );
};

export default Products;