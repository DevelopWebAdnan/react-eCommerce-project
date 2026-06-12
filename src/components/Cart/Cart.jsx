

const Cart = ({cart}) => {
    return (
        <div>
            <h3 className="text-lg">Cart: {cart.length}</h3>
            {
                cart.map(product => <img 
                    className="w-24"
                    src={product.img}></img>)
            }
        </div>
    );
};

export default Cart;