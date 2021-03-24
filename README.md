# Algorithm-and-Data-Structure-Questions
Prueba de desarollo 
## Composite function
en el primer ejercicio tenemos que usar currying que es el proceso de convertir una función que múltiples argumentos  a varias funciones anidadas que toman a su vez un argumento. 

```javascript
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


``` 

## Longest string
en el segundo tenemos que crear una función que   recorra un arreglo y retorna el string más largo para esto implementamos el método reduce 

```javascript
const list = ['best', 'company', 'ever',]
function rokket(list){
    return LongestString = list.reduce((result,el)=>{
    if (result.length < el.length) { // comparamos el tamaño de los string
        result = el   // asignar  el valor si es mayor
    }
    return result
})
}
console.log(rokket(list)) // out: company


``` 
## String repetition
Creamos una función rokket  utilizamos el método repeat() que devuelve un string que contiene el string original concatenados con el número de copias que se le indiquen  


```javascript
function rokket(palabra, x){
   const result = palabra.repeat(x) // usamos el metodo repeat
    return result
}
console.log(rokket('node',5))// out : nodenodenodenodenode
console.log(rokket('abc',2))// out: abcabc

``` 

##  Only last names 

Utilizamos el método map  crea un nuevo array con los resultados de la llamada a la función en la cual llamamos a lastName,  lo cual nos va a retornar una arreglo con todos los lastName del primer arreglo.


```javascript
const contacts = [
    { firstName: 'Juanito', lastName: 'Rokket' },
    { firstName: 'James', lastName: 'Bond' },
    { firstName: 'Harry', lastName: 'Potter' }
    ]

function rokket(contacts){
    const lastName = contacts.map(x=> x.lastName) // creamos un arrelgo que solo contenga los apellidos 
    return lastName // devolvemos el arreglo
}
console.log(rokket(contacts))// out: [ 'Rokket', 'Bond', 'Potter' ]

``` 

##  Unique numbers  

Esta función recibe dos arreglos y debe retornar lo números únicos de la la intersección de dichos arreglos, para esto primero utilizamos concat para crear un solo arreglo, luego utilizamos set para quedarnos con los valores únicos.


```javascript

function rokket(array1,array2){
    const concatarray = array1.concat(array2); // concatenamos los dos arrelgos 
    const uniquearray = [...new Set(concatarray)]// con set nos quedamos con los elementos unicos 
    return uniquearray
}
console.log(rokket([1, 2, 5],[2, 1, 6]))// out: [ 1, 2, 5, 6 ]
console.log(rokket([1, 2, 3],[4, 5, 6]))// out: [ 1, 2, 3, 4, 5, 6 ]

``` 

