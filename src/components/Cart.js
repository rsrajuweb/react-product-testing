import React, { useEffect, useState } from 'react';

const Cart = ({setPrice}) => {

    const [small, setSmall] = useState("");
    const [medium, setMedium] = useState("");
    const [large, setLarge] = useState("");

    const [selected1,setSelected1] = useState(false)
    const [selected2,setSelected2] = useState(false)
    const [selected3,setSelected3] = useState(false)
   
    const [price1,setprice1] = useState('')
    const [price2,setprice2] = useState('')
    const [price3,setprice3] = useState('')

    const onChangeValue1 = (e) => {
        if(e === "small"){
            
            if(!selected1){
              setprice1(11.99)
              setSmall("10'' pizza for one person") 
            } 
            if(selected1){
             setprice1("")
             setSmall("") 
            }
            setSelected1(selected1 => !selected1)
        }
    }

    
    const onChangeValue2 = (e) => {
        if(e === "medium"){

             if(!selected2){
                setprice2(15.99)
                setMedium("12'' Pizza for two persons") 
              } 
              if(selected2){
               setprice2("")
               setMedium("") 
              }
            setSelected2(selected2 => !selected2)
        }
    }
    

    
    const onChangeValue3 = (e) => {
        
        if(e === "large"){

            if(!selected3){
                setprice3(21.99)
                setLarge("15'' Pizza for four persons ") 
              } 
              if(selected3){
               setprice3("")
               setLarge("") 
              }
            setSelected3(selected3 => !selected3)
        }
    }
    
    

    const onChangePrice = (e) => {
        setQuantity(e.target.value)        
    }
    const [quantity,setQuantity] = useState(0)

    const totalPrice = price1 * quantity + price2 * quantity + price3 * quantity
    useEffect(() => {
        setPrice(totalPrice)
    },[totalPrice])

  return (
    <div> 
      <div className="container w-25 float-start">
        <div className="row">
          <div className="col">
            
            
         <div className='d-flex'>
         <button onClick={() => onChangeValue1('small')} 
         className={selected1 ? "btn btn-light" :'btn btn-primary w-25'}   >S</button> 
         <br />
         <button onClick={() => onChangeValue2('medium')} 
         className={selected2 ? "btn btn-light" : 'btn btn-warning '}>M</button>
         <br />
         <button onClick={() => onChangeValue3('large')} 
         className={selected3 ? "btn btn-light" : 'btn btn-danger'}
         >L</button>
         </div>
          </div>

          <div className="col">
            <select 
            onChange={(e) => onChangePrice(e)}
            className="form-select" aria-label="Default select example">
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
        </div>

        <div className="float-start">

          <h4>Description: {small}{medium} {large}</h4>
          <h4>Retail Price: ${totalPrice}</h4>
        </div>
      </div>
    </div>
  );
};

export default Cart;
