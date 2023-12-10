import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className='bg-[#EDE3DA] flex items-center justify-between px-16 py-10'>
      <div className='text-xl text-gray-700'>فروشگاه</div>

      <ul className='text-lg text-gray-700 space-x-10 space-x-reverse flex items-center'>
        <li className=''>
          <NavLink to='/'>
            <span className=''>صفحه اصلی</span>
          </NavLink>
        </li>
        <li className=''>
          <NavLink to='/products'>
            <span className=''>محصولات</span>
          </NavLink>
        </li>
        <li className=''>
          <NavLink to='/cart'>
            <span className=''>سبد خرید</span>
          </NavLink>
        </li>
        <li className=''>
          <NavLink to='/search'>
            <span className=''>جستجو</span>
          </NavLink>
        </li>
      </ul>
      <div className='flex items-center text-lg text-gray-700 space-x-6 space-x-reverse'>
        <div>ورود</div>
        <div className='bg-[#742062] px-5 text-white py-2 rounded-lg'>
          ثبت نام
        </div>
      </div>
    </div>
  );
};

export default Header;
