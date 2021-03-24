function rokket(a) {
    return (b) => {
        return (c) => {
            return a * b * c // 
        }
    }
}
console.log(rokket(2)(5)(3)) // 30
console.log(rokket(4)(2)(2)) // 16
console.log(rokket(8)(2)(1)) // 16