import { CiShoppingCart } from "react-icons/ci";
import { useLoaderData, useParams } from "react-router-dom";
import { addToLS } from "../../utilities/localStorage";

const ProductDetail = () => {

    const data = useLoaderData();
    const { id } = useParams();
    const productId = parseInt(id);

    const product = data.find(product => product.id === productId);
    // console.log(data, typeof(product.id), typeof(id), typeof(productId));
    console.log(product);

    const { id: currentId, img } = product;

    // const handleAddToCart = product => {
    const handleAddToCart = productId => {
        // const newCart = [...cart, product];
        // setCart(newCart);
        addToLS(productId);
    }

    return (
        <div className="my-12">
            <h2>Book Details: {id}</h2>
            <img className="w-2xs" src={img} alt="image of product" />
            <br />
            <button
                onClick={() => handleAddToCart(id)}
                className="btn btn-primary mr-4"
            ><CiShoppingCart
                className="text-2xl"
            ></CiShoppingCart> Add to Cart
            </button>
            {/* <button className="btn btn-accent btn-outline mr-4">Add To Cart</button> */}

            <button className="btn btn-accent">Add to Wish List</button>
        </div>
    );
};

export default ProductDetail;