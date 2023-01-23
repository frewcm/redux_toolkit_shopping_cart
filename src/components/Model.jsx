import { useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import { closeModel } from "../features/model/modelSlice";

function Model() {
  const dispatch = useDispatch();
  return (
    <div className="fixed inset-0 bg-opacity-30 bg-gray-900 flex items-center justify-center shadow">
      <div className=" rounded bg-white w-80 h-36 flex flex-col item-center justify-center">
        <p className="text-center">
          Remove All Items From Your <br /> Shopping Cart?
        </p>
        <div className="flex items-center justify-center mt-5 space-x-6">
          <button
            onClick={() => {
              dispatch(clearCart());
              dispatch(closeModel());
            }}
            className="px-3 py-1 border-2 border-purple-500 text-purple-500 text-sm rounded"
          >
            CONFIRM
          </button>
          <button
            onClick={() => dispatch(closeModel())}
            className="px-3 py-1 border-2 border-red-400 text-red-400 text-sm rounded"
          >
            CANCEL
          </button>
        </div>
      </div>
    </div>
  );
}

export default Model;
