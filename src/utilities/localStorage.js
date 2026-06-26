import { toast } from "react-toastify";

const getStoredCart = () => {
    const storedCartString = localStorage.getItem('cart');
    if (storedCartString) {
        return JSON.parse(storedCartString);
    }
    else {
        return [];
    }
}

const saveCartToLS = cart => {
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
    toast("This product has been added to your cart!");
}

const removeFromLS = id => {
    const cart = getStoredCart();
    // remove all id
    const remaining = cart.filter(idx => idx !== id);
    saveCartToLS(remaining);
}

const addToLS = id => {
    const cart = getStoredCart();
    if (cart.includes(id)) {
        // already exists, do not add it
        console.log(id, 'already exists in the cart');
    }
    else {
        cart.push(id);
        // save to local storage
        saveCartToLS(cart);
    }
}

export { addToLS, getStoredCart, removeFromLS }