import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/*.....Left Section....*/}
        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            soluta aperiam consectetur ipsa at accusantium?
          </p>
        </div>

        {/*.....center Section....*/}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Poilicy</li>
          </ul>
        </div>

        {/*.....Right Section....*/}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>9999999999</li>
            <li>hello@gmail.com</li>
          </ul>
        </div>
      </div>

      {/*.....copyright...*/}
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          copyright 2024@ -All rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
