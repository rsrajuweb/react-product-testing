import { useState } from 'react';
import './App.css';
import Cart from './components/Cart';

function App() {

  
  
  const [price,setPrice] = useState(0)


  return (
    <div className="App">
      <header>

        
      <div className="">
        <h1>Product Checkout</h1>
      </div>

        <Cart  
        price={price}
        setPrice={setPrice} 
        />
        <br />
        <h3 >Output: Total ${price}</h3>
      </header>
    </div>
  );
}

export default App;
