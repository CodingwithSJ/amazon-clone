import React from 'react'
import './CartTotal.css'
import numeral from "numeral";

function CartTotal(props) {

    const getCount = ()=> {
        // init count with 0
        // loop thoruh all the items 
        // add quantity to count
        // return it
        let count = 0;
        props.cartItems.forEach(item => {
            count += parseInt(item.cartItem.quantity)
        });
        return count;
    }
    

     const getTotalPrice = () => {
         let total = 0;
         props.cartItems.forEach((item)=>{
              total += (item.cartItem.price * item.cartItem.quantity)
         })
    return total;
     }

 

    return (
        <div className="CartTotal">
            <h3>Subtotal ({getCount()} items): {numeral(getTotalPrice()).format("$0,0.00")} </h3>
            <button>Proceed to checkout</button>
        </div>
    )
}

export default CartTotal
