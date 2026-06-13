

const Cart = ({ cart, handleRemoveFromCart }) => {
    return (
        <div>
            <h3 className="text-lg">Cart: {cart.length}</h3>
            {
                cart.map(product =>
                    <div
                        key={product.id}
                        className="mb-4"
                    >
                        <img
                            className="w-24 sm:w-28 md:w-32 lg:w-36 xl:w-40"
                            src={product.img}></img>

                        <button onClick={() => handleRemoveFromCart(product.id)} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">Remove</button>
                    </div>
                )
            }
        </div>
    );
};

export default Cart;