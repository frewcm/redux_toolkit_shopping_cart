import { useSelector } from "react-redux";
import { FaCartArrowDown } from "react-icons/fa";

function NavBar() {
  const { amount, total } = useSelector((state) => state.cart);
  return (
    <div className=" w-full h-14 bg-purple-500 flex items-center justify-center text-white">
      <div className="w-3/5 flex items-center justify-between">
        <div className="ml-10">
          <p className=" font-bold">Redux Toolkit</p>
        </div>
        <div className="mr-10 flex -space-x-1 -space-y-2">
          <FaCartArrowDown size={25} />
          <p className="bg-purple-700 p-2 rounded-full h-5 w-5 flex items-center justify-center">
            {amount}
          </p>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
