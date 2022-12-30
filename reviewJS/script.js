// =========================== 01: const
// const menu = {
//     selector: '.main',
// }

// console.log(menu.selector.toUpperCase())

// =========================== 02: function:
// function upperName(name){
//     return name.toUpperCase();
// }
// console.log(upperName('thiago'));

// =========================== 02: Arrow Functions:
// const upperName = (name) => {
//     return name.toUpperCase();
// }
// console.log(upperName('thiago 2'))

// or more short:
// const upperName = (name) => name.toUpperCase();
// console.log(upperName('thiago 3'))


// ===========================: destructuring:
// function handleMouse(event){
//     const { clientX, clientY } = event;
//     console.log(clientX, clientY)
// }

// document.addEventListener('click', handleMouse)

// //or destructuring on params:
// function handleMouse({ clientX, clientY }){
//     // const { clientX, clientY } = event;
//     console.log(clientX, clientY)
// }

// document.addEventListener('click', handleMouse)


// ===========================: destructuring arrays:

// const fruits = ['Banana', 'Grape']
// const [f1, f2] = fruits
// //console.log(f1, f2)

// const useSquare = [4, function(side) {
//     return 4 * side;
// }]

// const [sides, perimeter] = useSquare;
// console.log(sides);
// console.log(perimeter(10));


// ===========================: Rest:
// function showList(company, ...customers) {
//     customers.forEach((customer) => {
//         console.log(customer, company)
//     });
// }

// showList('Google', ['Thiago', 'Eike', 'Pi'])

// ===========================: Spread:
// const numbers = [100, 5, 20, 500]
// // const major = Math.max(100, 5, 20);
// const major = Math.max(...numbers);
// console.log(major)

// const numbers2 = [...numbers, 1000, 9]
// console.log(numbers2)

// ===========================: ModulesJS:
// import randonNumber from "./randonNumber.js"
// import square  from "./square.js"

// console.log(square.squareArea(5))
// console.log(square.perimeter(2))
// console.log(randonNumber())


// ===========================: Fetch:
// fetch('https://dummyjson.com/products/2')
// .then(res => res.json())
// .then(json => console.log(json))

// async function fetchProducts(url){
//     const resposta = await fetch(url)
//     const json = await resposta.json()
//     console.log(json)
//     return resposta
// }

// const products = fetchProducts('https://dummyjson.com/products/2')
            
// ===========================: Map and Array Filter:
const prices = [
'Credit',
'R$ 200',
'R$ 400',
'Bills to Pay',
'R$ 300',
'R$ 400',
'My Datas',
]

// const filterPrices = prices.filter(function (price){
//     return price.includes('$');
// })

// console.log(filterPrices)
// or
const filterPrices = prices.filter((p) => p.includes('$'))
const numberPrices = filterPrices.map((price) => 
    Number(price.replace('R$ ', '')))
console.log(numberPrices)
console.log(prices)


























































































