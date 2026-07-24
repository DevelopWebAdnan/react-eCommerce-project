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

// const saveCartToLS = cart => {
//     const cartStringified = JSON.stringify(cart);
//     localStorage.setItem('cart', cartStringified);
//     toast("This product has been added to your cart!");
// }

const removeFromLS = id => {
    console.log('From removeFromLS => remove product of id: ', id);
    const cart = getStoredCart();
    // remove all id
    // const remaining = cart.filter(idx => idx !== id);
    const remaining = cart.filter(product => product.productId !== id);
    console.log('remaining in LS: ', remaining);
    // saveCartToLS(remaining);
    const cartStringified = JSON.stringify(remaining);
    localStorage.setItem('cart', cartStringified);
    toast("A product has been removed from your cart!");
}

const addToLS = cartItem => {
    console.log('cartItem to be added to cart: ', cartItem);
    const cart = getStoredCart();
    console.log('cart: ', cart);
    // if (cart.includes(id)) {
    // if (cart) {
    // for (const item of cart) {
    const emailIds = cart.map(product => product.email);
    console.log('emailIds: ', emailIds);
    const productIds = cart.map(product => product.productId);
    console.log('productIds: ', productIds);
    const emailMatchingProducts = cart.filter(product => product.email === cartItem.email);
    console.log('emailMatchingProducts: ', emailMatchingProducts);
    const emailMatchingProductIds = emailMatchingProducts.map(emailMatchingProduct => emailMatchingProduct.productId);
    console.log('emailMatchingProductIds: ', emailMatchingProductIds);
    // const idAndEmailMatchingProductIds = emailMatchingProductIds.filter(emailMatchingProductId => emailMatchingProductId.includes(cartItem.productId));
    const idAndEmailMatchingProductId = emailMatchingProductIds.find(emailMatchingProductId => emailMatchingProductId === cartItem.productId);
    console.log('idAndEmailMatchingProductId: ', idAndEmailMatchingProductId);
    // console.log('item.productId: ', item.productId);
    // if (item.productId === cartItem.productId) {
    // if (productIds.includes(cartItem.productId)) {
    // if (idAndEmailMatchingProductId.includes(cartItem.productId)) {
    if (idAndEmailMatchingProductId) {
        // already exists, do not add it
        // return toast.error('This product already exists in the cart!');
        toast.error('This product already exists in the cart!');
    }
    else {
        // cart.push(id);
        cart.push(cartItem);
        // save to local storage
        // saveCartToLS(cart);
        const cartStringified = JSON.stringify(cart);
        localStorage.setItem('cart', cartStringified);
        // return toast("This product has been added to your cart!");
        toast("This product has been added to your cart!");
    }
    // }
    // }
    // else {
    //     console.log('Cart is empty. Now, inserting 1st cartItem: ', cartItem);
    //     cart.push(cartItem);
    //     // save to local storage
    //     // saveCartToLS(cart);
    //     const cartStringified = JSON.stringify(cart);
    //     localStorage.setItem('cart', cartStringified);
    //     toast("Your 1st product has been added to your cart!");
    // }
}

export { addToLS, getStoredCart, removeFromLS }