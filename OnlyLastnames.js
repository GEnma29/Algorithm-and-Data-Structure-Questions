const contacts = [
    { firstName: 'Juanito', lastName: 'Rokket' },
    { firstName: 'James', lastName: 'Bond' },
    { firstName: 'Harry', lastName: 'Potter' }
    ]

function rokket(contacts){
    const lastName = contacts.map(x=> x.lastName) // creamos un arrelgo que solo contenga los apellidos 
    return lastName // devolvemos el arreglo
}
console.log(rokket(contacts))