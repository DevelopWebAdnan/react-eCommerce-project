import { useLoaderData } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import { Helmet } from "react-helmet-async";

const AllProducts = () => {
    const allProducts = useLoaderData();
    console.log('allProducts:', allProducts);

    return (
        <div className="mb-10 p-3">
            <Helmet>
                <title>For Our Beauty | AllProducts</title>
            </Helmet>
            <div className="divider py-6">
                <h3>ALL FEATURED PRODUCTS: {allProducts.length}</h3>
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