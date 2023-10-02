import React, {useContext} from 'react';

import {Link} from 'react-router-dom';
import { IoMdArrowForward } from 'react-icons/io'
import { FiTrash2 } from 'react-icons/fi'
import CartItem from '../components/CartItem'
import {SidebarContext} from '../contexts/SidebarContext'
import {CartContext} from '../contexts/CartContext'


const Sidebar = () => {
  const {isOpen, handleClose} = useContext(SidebarContext)
  
  const {cart, clearCart, total, itemAmount} = useContext(CartContext)

  return (
    <div 
      className={`${
      isOpen ? 'right-0' : 'right-[-100%]'
    }
      w-full bg-white fixed top-0 h-full shadow-2xl 
      md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 
      z-20 px-4 lg:px-[35px]`}
      >
      
      <div className='flex items-center justify-between py-6 border-b'>
        <div className='uppercase text-sm font-semibold'>
          Shopping Bag ({itemAmount})
        </div>
        {/* icon */}
        <div onClick={handleClose} className='cursor-pointer w-8 h-8 flex justify-center items-center'>
          <IoMdArrowForward className='text-2xl'/>
        </div>
      </div>
      {/* display product in cart */}
      <div className='flex flex-col gap-y-2 h-[400px] 
        lg:h-[400px] overflow-y-auto overflow-x-hidden border-b'>
          {cart.map((item)=>{
          return (
              <CartItem item={item} key={item.id}/>
          )
          })}
      </div>
      <div className='flex flex-col gap-y-3 py-4 mt-1'>
        <div className='flex w-full justify-between items-center'>
          <div className='uppercase font-semibold'>
            <span className='mr-2'>Total:</span>$ {parseFloat(total).toFixed(2)}
          </div>
          <div onClick={clearCart} className='cursor-pointer py-3 bg-red-500 text-white 
          w-10 h-10 flex justify-center items-center text-xl'>
            <FiTrash2/>
          </div>
        </div>
        {/* checkout */}
       
          <Link to='/' className='bg-gray-200 flex p-2 justify-center 
            items-center text-black w-full font-medium rounded'>
            View Cart
          </Link>
          <Link to='/' className='bg-black flex p-2 justify-center 
            items-center text-white w-full font-medium rounded'>
            Checkout
          </Link>
        
      </div>
    </div>
    )
};

export default Sidebar;
