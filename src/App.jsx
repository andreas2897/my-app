import React from 'react';
import './App.css';
import TableProduct from './views/component/TableProduct'
import CounterScreen from './views/screens/CounterScreen'
import ProductCard from './views/component/ProductCard';
import handmaid from './views/Images/handmaid.png';
import crazy from './views/Images/crazyRich.png';
import educated from './views/Images/educated.png';
import brave from './views/Images/brave.png';
import './bootstrap.css';

function App() {
 
// let arrProduct = [
//   {
//     nama : 'sepatu',
//     harga : 10000,
//     desc : 'sepasang cuy'
//   },
//   {
//     nama : 'sepatu1',
//     harga : 11000,
//     desc : 'sebelah cuy'
//   }
// ]

let arrBooks = [
  {
    author: "Margaret Atwood",
    title: "The handmaid's tale",
    review: 4,
    desc: `This novel can be interpreted as a double narrative, Offred's tale and the handmaids' tales. The night...`,
    price: 18.99,
    discount: 60,
    image: handmaid,
    stock: 7,
  },
  {
    author: "Kevin Kwan",
    title: "Crazy rich asians",
    review: 5,
    desc: `the outrageously funny debut novel about three super-rich, pedigreed Chinese families and the gossip...`,
    price: 24.12,
    discount: 80,
    image: crazy,
    stock: 0,
  },
  {
    author: "Aldous Huxley",
    title: "Brave new world",
    review: 3,
    desc: `dystopian novel written in 1931 by English author Aldous Huxley, and published in 1932. Largely set in...`,
    price: 18.99,
    discount: 60,
    image: brave,
    stock: 3,
  },
  {
    author: "Tara Westover",
    title: "Educated",
    review: 4.5,
    desc: `It is a tale of fierce family loyalty and of the grief that comes with severing the closest of ties. With...`,
    price: 34.21,
    discount: 0,
    image: educated,
    stock: 3,
  },
];

const renderBuku = () => {
  return (
    arrBooks.map(val => {
      return <ProductCard productData={val}/>
  })
  )
}

return (
  <div className="app">
    <h1 className='text-center mt-5 mb-5'>Hello world!</h1> 
    <div className="row">
        {renderBuku()}
    </div>
  </div>
)

// const renderProduct = () => {
//   return (
//     arrProduct.map((val) => {
//       return <ProductCard productData={val} />
//     })
//   )
// }

// return(
//   <div>
//     <ProductCard/>

//   </div>
// )
  ;
}


// let arr = ["tokyo", "bandung", "jakarta"]
// return (
//   <div className="app">
//     <CounterScreen kota={val} />
//   </div>
// )

export default App;