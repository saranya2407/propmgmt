
import Prod1 from "../ecom/images/Prod1.jpg"
import Prod2 from "../ecom/images/Prod2.jpg";
import Prod5 from "../ecom/images/Prod5.jpg";
import Prod4 from "../ecom/images/Prod4.jpg";
// import product5 from "./assets/products/5.png";
// import product6 from "./assets/products/6.webp";
// import product7 from "./assets/products/7.webp";
// import product8 from "./assets/products/8.webp";

export const PRODUCTS = [
  {
    id: 1,
    productName: "IPhone",
    price: 999.0,
    productImage: Prod1,
  },
  {
    id: 2,
    productName: "Samsung Galaxy",
    price: 1999.0,
    productImage: Prod2,
  },
  {
    id: 3,
    productName: "Google Pixel",
    price: 699.0,
    productImage: Prod5,
  },
  {
    id: 4,
    productName: "Sony",
    price: 228.0,
    productImage: Prod4,
  },
//   {
//     id: 5,
//     productName: "LED Light Strips",
//     price: 19.99,
//     productImage: product5,
//   },
//   {
//     id: 6,
//     productName: "SPECTRUM LS TEE",
//     price: 68.0,
//     productImage: product6,
//   },
//   {
//     id: 7,
//     productName: "AUTO SERVICE SHIRT by GOLF WANG",
//     price: 120.0,
//     productImage: product7,
//   },
//   {
//     id: 8,
//     productName: "DON'T TRIP UNSTRUCTURED HAT",
//     price: 40.0,
//     productImage: product8,
//   },
];

// import "./App.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Navbar } from "./ecom/navbar";
// import { Shop } from "./ecom/shop";
// import { Contact } from "./ecom/contact";
// import { Cart } from "./ecom/cart";
// import { ShopContextProvider } from "./ecom/shop-context";

// function App() {
//   return (
//     <div className="App">
//       <ShopContextProvider>
//         <Router>
//           <Navbar />
//           <Routes>
//             <Route path="/" element={<Shop />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/cart" element={<Cart />} />
//           </Routes>
//         </Router>
//       </ShopContextProvider>
//     </div>
//   );
// }

// export default App;