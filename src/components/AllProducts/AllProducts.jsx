import { useLoaderData } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";

const AllProducts = () => {
    const allProducts = useLoaderData();

    return (
        <div className="my-10">
             <div className="divider py-6">
                <h3>FEATURED PRODUCTS: {allProducts.length}</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        allProducts.map(product => <ProductCard
                            key={product.id}
                            product={product}
                        // handleAddToCart={handleAddToCart}
                        ></ProductCard>)
                    }
                </div>
        </div>
    );
};

export default AllProducts;