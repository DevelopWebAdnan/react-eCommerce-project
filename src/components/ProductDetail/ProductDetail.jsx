import { CiShoppingCart } from "react-icons/ci";
import { useLoaderData, useParams } from "react-router-dom";

const ProductDetail = () => {

    const data = useLoaderData();
    const { id } = useParams();
    const productId = parseInt(id);

    const product = data.find(product => product.id === productId);
    // console.log(data, typeof(product.id), typeof(id), typeof(productId));
    console.log(product);

    const { id: currentId, img } = product;

    return (
        <div className="my-12">
            <h2>Book Details: {id}</h2>
            <img className="w-2xs" src={img} alt="image of product" />
            <br />
            <button
                // onClick={() => handleAddToCart(product)}
                className="btn btn-primary"
            ><CiShoppingCart
                className="text-2xl"
            ></CiShoppingCart> ADD TO CART
            </button>
            {/* <button className="btn btn-accent btn-outline mr-4">Add To Cart</button> */}

            <button className="btn btn-accent">Wishlist</button>
        </div>
    );
};

export default ProductDetail;