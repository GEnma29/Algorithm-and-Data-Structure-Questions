const list = ['best', 'company', 'ever',]
function rokket(list){
    return LongestString = list.reduce((result,el)=>{
    if (result.length < el.length) { // comparamos el tamaño de los string
        result = el   // asignar  el valor si es mayor
    }
    return result
})
}
console.log(rokket(list))