import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  function menu() {
    setOpenMenu(!openMenu);
  }
  return (
    <div className="2xl:px-[200px] xl:px-[150px] lg:px-[100px] md:px-[50px] px-5 py-5 2xl:flex xl:flex lg:flex md:flex gap-2 justify-between items-center bg-[#259473] p-2 text-white fixed w-full z-50">
      <div>
        <p className="font-extrabold text-2xl">Gaspei Invoice</p>
      </div>

      <div>
        <ul className="2xl:flex xl:flex lg:flex md:flex hidden gap-5 items-center">
          <li className="hover:text-[#31bc92]">
            <Link to="#">Home</Link>
          </li>
          <li className="hover:text-[#31bc92]">
            <Link to="#">Product</Link>
          </li>
          <li className="hover:text-[#31bc92]">
            <Link to="#">Pricing</Link>
          </li>
        </ul>
      </div>

      <div className="2xl:flex xl:flex lg:flex md:flex hidden gap-5 items-center">
        <button className="bg-none rounded-full py-1 px-5 border-white border-2 text-sm hover:bg-white hover:text-black">
          Log In
        </button>
        <button className="bg-white px-5 py-1 rounded-full text-sm text-black border-2 border-white hover:bg-[#31bc92] hover:text-white font-[500]">
          Sign Up For Free
        </button>
      </div>
    </div>
  );
}

export default Header;
