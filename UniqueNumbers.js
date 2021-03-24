
function rokket(array1,array2){
    const concatarray = array1.concat(array2); // concatenamos los dos arrelgos 
    const uniquearray = [...new Set(concatarray)]// con set nos quedamos con los elementos unicos 
    return uniquearray
}
console.log(rokket([1, 2, 5],[2, 1, 6]))// out: [ 1, 2, 5, 6 ]
console.log(rokket([1, 2, 3],[4, 5, 6]))// out: [ 1, 2, 3, 4, 5, 6 ]