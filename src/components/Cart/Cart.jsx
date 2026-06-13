

const Cart = ({ cart, handleRemoveFromCart }) => {
    return (
        <div className="bg-slate-300 p-3">
        <h3 className="text-xl font-bold text-center my-3">Cart: {cart.length}</h3>
            {
                cart.map(product =>
                    <div
                        key={product.id}
                        className="flex flex-col mb-3"
                    >
                        <img
                            className="w-full"
                            src={product.img}></img>

                        <button onClick={() => handleRemoveFromCart(product.id)} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">Remove</button>
                    </div>
                )
            }
        </div>
    );
};

export default Cart;