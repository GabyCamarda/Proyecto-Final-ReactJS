import React, { useContext } from 'react';
import { AreaContext } from '../AreaContext/AreaContext';
import Cart from '../Cart/Cart';

const CartList = () => {

    const [cart, setCart] = useContext(AreaContext);
    
      return (
        <div>

          <h2>Lista de Productos:</h2>  
            {cart.map((car) => {
              return (          
                        <Cart data={car}/>

             )} 
            
          )}                                 
              
        </div>              
                  
    )}

export default CartList;