import { CiShoppingCart } from "react-icons/ci";
import { useLoaderData, useParams } from "react-router-dom";
import { addToLS } from "../../utilities/localStorage";
import { Helmet } from "react-helmet-async";
import Modal from "../Modal/Modal";

const ProductDetail = () => {

    const data = useLoaderData();
    const { id } = useParams();
    const productId = parseInt(id);

    const product = data.find(product => product.id === productId);
    // console.log(data, typeof(product.id), typeof(id), typeof(productId));
    console.log('Detail of:', product);

    const { id: currentId, category, name, img, seller, price, ratings, ratingsCount, stock, shipping } = product;

    // const [cart, setCart] = useState([]);

    // load cart from local storage
    // useEffect(() => {

    //     const getCart = getStoredCart();

    //     console.log('getCart:', getCart);

    // }, [])

    // console.log('cart', cart);

    // const handleAddToCart = product => {
    const handleAddToCart = productId => {
        // const newCart = [...cart, productId];
        // setCart(newCart);

        addToLS(productId);
    }

    return (
        <div className="my-12">
            <Helmet>
                <title>Product Details: {id}</title>
            </Helmet>
            <h2>Product Details: {id}</h2>

            <div className="card bg-blue-100 shadow-sm w-96 lg:w-2xl mx-auto">
                {/* <figure className="h-64"> */}
                <figure>
                    <img
                        className="w-full h-full object-cover"
                        src={img}
                        alt="product image" />
                    {/* <img className="w-2xs" src={img} alt="image of product" /> */}
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Category: {category}</p>
                    <p>Seller: {seller}</p>
                    <p>Stock: {stock}</p>
                    <div className="flex justify-between gap-5">
                        <div className="badge badge-secondary">{ratings}</div>
                        <div className="rating">
                            <input type="radio" name="rating-1" className="mask mask-star" aria-label="1 star" />
                            <input type="radio" name="rating-1" className="mask mask-star" aria-label="2 star" defaultChecked />
                            <input type="radio" name="rating-1" className="mask mask-star" aria-label="3 star" />
                            <input type="radio" name="rating-1" className="mask mask-star" aria-label="4 star" />
                            <input type="radio" name="rating-1" className="mask mask-star" aria-label="5 star" />
                        </div>
                    </div>
                    <p>Ratings count: {ratingsCount}</p>
                    <p>Shipping: {shipping}</p>
                    <span className="text-xl font-semibold">Price: ${price}.00</span>
                    <div className="card-actions">
                        {/* Open the modal using document.getElementById('ID').showModal() method */}
                        <button
                            className="btn"
                            onClick={() => document.getElementById('my_modal_5').showModal()}
                        >About me</button>
                        <Modal></Modal>
                        <button onClick={() => handleAddToCart(productId)} className="btn btn-primary"
                        ><CiShoppingCart
                            className="text-2xl"
                        ></CiShoppingCart> ADD TO CART</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;