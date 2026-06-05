
const ProductCard = ({product}) => {
    const { name, img} = product;

    return (
        <div>
            <div className="max-w-3xs">
            <img src={img} alt="product image" />
            <h3 className="text-2xl font-bold">{name}</h3>
            </div>
        </div>
    );
};

export default ProductCard;