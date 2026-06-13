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
}

const removeFromLS = id => {
    const cart = getStoredCart();
    // remove all id
    const remaining = cart.filter(idx => idx !== id);
    saveCartToLS(remaining);
}

const addToLS = id => {
    const cart = getStoredCart();
    cart.push(id);
    // save to local storage
    saveCartToLS(cart);
}

export { addToLS, getStoredCart, removeFromLS }