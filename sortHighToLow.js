function sortHighToLow(arr) {
    return arr.sort((a, b) => b.price - a.price)
}

console.log(sortHighToLow([
    {id: 1, price: 50},
    {id: 1, price: 20},
    {id: 1, price: -500},
    {id: 1, price: 500},
]));