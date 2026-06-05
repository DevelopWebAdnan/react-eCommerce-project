import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('/beautyStore.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }, [])

    return (
        <div>
            <h2 className="text-3xl font-bold">Beauty Products: {products.length}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {
                products.map(product => <ProductCard
                    key={product.id}
                    product={product}
                ></ProductCard>)
            }
            </div>
        </div>
    );
};

export default Products;