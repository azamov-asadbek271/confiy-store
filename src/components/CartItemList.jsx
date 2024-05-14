import { useSelector } from "react-redux"
import CartItem from "./CartItem"

function CartItemList() {
    const cartItem = useSelector((state) => state.cartState.cartItem)
    
  return (
    <div>{cartItem.map((item) => {
        return <CartItem key={item.cartID} cartItem={item}/>
    })}
        </div> 
  )
}

export default CartItemList