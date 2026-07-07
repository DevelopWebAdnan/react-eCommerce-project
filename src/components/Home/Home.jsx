
import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Categories from "../Categories";
import Heading from "../Heading";

const Home = () => {
    const products = useLoaderData();
    console.log(products);
    const productCategories = products.map(product => product.category);
    console.log('productCategories: ', productCategories);
    return (
        <div>
            <Banner></Banner>
            <div className="my-10 ">
                <Heading title="Browse products by category"
                    subtitle="Choose your desired product from the available products."
                ></Heading>
                <Categories categories={productCategories}></Categories>
                <Outlet></Outlet>
            </div>
            {/* <Products></Products> */}
        </div>
    );
};

export default Home;