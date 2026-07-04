export function noDuplicate(array) {
    console.log('array: ', array);
    const unique = [];
    for(const category of array) {
        if(unique.includes(category) === false) {
            unique.push(category);
        }
    }
    console.log('unique: ', unique);
    return unique;
}

// export noDuplicate();