import React from "react";

const Footer = () => {
  return (
    <>
      <h1 className=" bg-orange-200 pt-4 text-white font-bold text-3xl mb-4 pb-4 rounded mx-4 mt-24">
        Contact Info
      </h1>
      <div className="grid rounded bg-black p-24  mx-4 text-white md:grid-cols-4  gap-4 mb-24">
        <div className="mb-4 md:mb-4 md:space-y-4">
          <h2 className="text-3xl mb-12">MENU</h2>
          <h3>BreakFast Menu</h3>
          <h3>Happy Hour Menu</h3>
          <h3>Kids Menu</h3>
        </div>
        <div className="mb-4 md:space-y-4">
          <h2 className="text-3xl mb-12">CATERING</h2>
          <h3>Corporate Events</h3>
          <h3>Food Delivery</h3>
          <h3>Special Events</h3>
        </div>
        <div className="mb-4 md:space-y-4">
          <h2 className="text-3xl mb-12">CONTACTS</h2>
          <h3>info@example.com</h3>
          <h3>1 999 143 5932</h3>
        </div>
        <div className="mb-4 md:space-y-4">
          <h2 className="text-3xl mb-12">SOCIAL</h2>
          <h3>Facebook</h3>
          <h3>Instagram</h3>
          <h3>Twitter</h3>
        </div>
      </div>
    </>
  );
};

export default Footer;
