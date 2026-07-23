import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Modal = () => {
    const { user } = useContext(AuthContext);

    return (
        // {/* Open the modal using document.getElementById('ID').showModal() method */ }
        // < button className = "btn" onClick = {()=> document.getElementById('my_modal_5').showModal()}> open modal</button >
        // {
        // user ? <>

        // </>
        //  : "Please login to know about yourself."
        // }
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <figure>
                    <div className="avatar">
                        <div className="w-24 rounded">
                            <img
                                src={user?.photoURL}
                                alt="user photo" />
                        </div>
                    </div>
                </figure>
                <h3 className="font-bold text-lg">Hello {user?.displayName}!</h3>
                <p className="py-4">Email: {user?.email}</p>
                <div className="modal-action">
                    <form method="dialog">
                        {/* <button onClick={() => handleAddToCart(productId)} className="btn btn-primary"
                        ><CiShoppingCart
                            className="text-2xl"
                        ></CiShoppingCart> ADD TO CART</button> */}
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Close</button>
                    </form>
                </div>
            </div>
        </dialog>

    );
};

export default Modal;