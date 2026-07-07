import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { useNavigate, useParams } from "react-router-dom";

const Products = () => {
    const [products, setProducts] = useState([]);
    // const [cart, setCart] = useState([]);
    const { category } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch('/beautyStore.json')
            .then(res => res.json())
            .then(data => {
                // setProducts(data);
                if (category) {
                    const filteredByCategory = [...data].filter(product => product.category === category);
                    console.log('fileteredByCategory:', filteredByCategory);
                    setProducts(filteredByCategory);
                }
                else {
                    setProducts(data.slice(0, 6));
                }
            })
    }, [category])

    // load cart from local storage
    // useEffect(() => {
    //     console.log('called the useEffect', products.length);
    //     if (products.length) {
    //         // //         // const getCart = getStoredCart();
    //         // //         // console.log(getCart, products);
    //         // //         // const savedCart = [];
    //         // //         // for (const id of getCart) {
    //         // //         //     console.log(id);
    //         // //         //     const product = products.find(product => product.id === id);
    //         // //         //     if (product) {
    //         // //         //         savedCart.push(product);
    //         // //         //     }
    //         // //         // }
    //         // //         // console.log(savedCart);
    //         // //         // setCart(savedCart);
    //         // const filteredByCategory = [...products].filter(product => product.category === category);
    //         // console.log('fileteredByCategory:', filteredByCategory);
    //         // setProducts(filteredByCategory);
    //     }

    //     // const filteredByCategory = [...products].filter(product => product.category === category);
    //     // console.log('fileteredByCategory:', filteredByCategory);
    //     //     // setProducts(filteredByCategory);
    // }, [products.length])

    // const filteredByCategory = [...products].filter(product => product.category === category);
    //     setProducts(filteredByCategory);

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
        <div className="p-3">

            <div className="divider py-6">
                <h3>FEATURED {category} PRODUCTS: {products.length}</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    products.map(product => <ProductCard
                        key={product.id}
                        product={product}
                    // handleAddToCart={handleAddToCart}
                    ></ProductCard>)
                }
            </div>

            <div className="text-center mt-4">
                <button
                    onClick={() => navigate('/allProducts')}
                    className="btn btn-warning"
                >View All</button>
            </div>

        </div>
    );
};

export default Products;