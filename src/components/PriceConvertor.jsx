import React, { useContext, useState } from "react";
import { CurrencyContext } from "../contexts/CurrencyContext";

const PriceConvertor = () => {

  const { handleChangeCurrency, currentCurrencyRate } = useContext(CurrencyContext)
  const [openContainer, setOpenContainer] = useState(false);

  const handleOpenContainer = () => {
    setOpenContainer((prev) => !prev);
  };

  const handleChange=(e)=>{
    let newCurrency = e.target.getAttribute('data-currency')
    handleChangeCurrency(newCurrency)
    setOpenContainer(false)
  }

  return (
    <div className="relative">
      <button
        data-popover-target="menu"
        onClick={handleOpenContainer}
        className="rounded-md bg-slate-800 py-2 px-2 border border-transparent text-center text-sm text-black transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
        type="button"
      >
        Currency: {currentCurrencyRate}
      </button>
      {openContainer && (
        <ul
          role="menu"
          data-popover="menu"
          onClick={handleChange}
          data-popover-placement="bottom"
          className="absolute z-10 w-fit overflow-auto rounded-lg border border-slate-200 bg-deep-purple-200 p-1.5 shadow-lg focus:outline-none"
        >
          <li
            role="menuitem"
            data-currency="USD"
            className="cursor-pointer  text-gray-800 flex w-full text-sm items-center rounded-md p-3 transition-all hover:bg-pink-50 focus:bg-pink-100 active:bg-pink-100"
          >
            USD
          </li>
          <li
            role="menuitem"
            data-currency="AUD"
            className="cursor-pointer  text-gray-800 flex w-full text-sm items-center rounded-md p-3 transition-all hover:bg-pink-50 focus:bg-pink-100 active:bg-pink-100"
          >
            AUD
          </li>
          <li
            role="menuitem"
            data-currency="INR"
            className="cursor-pointer text-gray-800 flex w-full text-sm items-center rounded-md p-3 transition-all hover:bg-pink-50 focus:bg-pink-100 active:bg-pink-100"
          >
            INR
          </li>
        </ul>
      )}
    </div>
  );
};

export default PriceConvertor;
