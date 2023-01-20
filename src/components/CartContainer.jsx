import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import CartItem from "./CartItem";

function CartContainer() {
  const dispatch = useDispatch();
  const { cartItems, amount, total } = useSelector((store) => store.cart);
  return (
    <div className="flex flex-col items-center justify-center w-3/5 h-3/5 mt-8">
      <p className="text-4xl font-bold">Your Bag</p>
      {amount < 1 ? (
        <p className="mt-10 text-gray-500">your bag is empty...</p>
      ) : (
        <div className="flex flex-col w-full mt-10 items-center">
          {cartItems.map((item) => {
            return <CartItem key={item.id} {...item} />;
          })}
          <hr className="text-black border w-4/5 mt-5 " />
          <div className="flex w-4/5 justify-between px-12">
            <p>Total</p>
            <p>$ {total.toFixed(2)}</p>
          </div>
          <button
            onClick={() => dispatch(clearCart())}
            className="w-36 p-2 mt-10 border-purple-500 border-2 text-purple-500"
          >
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
}

export default CartContainer;
