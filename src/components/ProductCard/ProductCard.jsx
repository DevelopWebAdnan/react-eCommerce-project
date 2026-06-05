import { CiShoppingCart } from "react-icons/ci";

const ProductCard = ({ product }) => {
    const { name, img, price, ratings, ratingsCount } = product;

    return (
        <div>
            <div className="card bg-base-100 shadow-sm">
                <figure className="h-[300px]">
                    <img
                        className="w-full h-full"
                        src={img}
                        alt="product image" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <div className="flex justify-between gap-5">
                        <div className="badge badge-secondary">{ratings}</div>
                        <div className="rating">
                            <input type="radio" name="rating-1" className="mask mask-star" aria-label="1 star" />
                            <input type="radio" name="rating-1" className="mask mask-star" aria-label="2 star" defaultChecked />
                            <input type="radio" name="rating-1" className="mask mask-star" aria-label="3 star" />
                            <input type="radio" name="rating-1" className="mask mask-star" aria-label="4 star" />
                            <input type="radio" name="rating-1" className="mask mask-star" aria-label="5 star" />
                        </div>
                        <p>{ratingsCount}</p>
                    </div>
                    <span className="text-xl font-semibold">${price}.00</span>
                    <div className="card-actions">
                        <button className="btn btn-primary"><CiShoppingCart></CiShoppingCart> ADD TO CART</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;