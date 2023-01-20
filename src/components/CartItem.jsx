import React from "react";
import { useDispatch } from "react-redux";
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";
import { removeItem, increase, decrease } from "../features/cart/cartSlice";

function CartItem({ id, img, title, price, amount }) {
  const dispatch = useDispatch();
  return (
    <div className="w-full h-full m-2">
      <div className="flex items-center justify-center">
        <div className="w-1/12 mr-3">
          <img className="w-20" src={img} alt="" />
        </div>
        <div className="flex items-start flex-col w-7/12 space-y-1">
          <p className="text-sm text-gray-500">{title}</p>
          <p className="text-sm text-gray-500">{price}</p>
          <button
            onClick={() => dispatch(removeItem(id))}
            className=" text-sm  text-purple-900"
          >
            remove
          </button>
        </div>
        <div className="flex flex-col items-center w-2/12">
          <button onClick={() => dispatch(increase({ id }))}>
            <AiFillCaretUp />
          </button>
          <p>{amount}</p>
          <button
            onClick={() => {
              if (amount === 1) {
                dispatch(removeItem(id));
              } else {
                dispatch(decrease({ id }));
              }
            }}
          >
            <AiFillCaretDown />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
