import React, {useContext, useEffect, useState} from 'react';
import {SidebarContext} from '../contexts/SidebarContext'
import {CartContext} from '../contexts/CartContext'
import { BsBag } from 'react-icons/bs'
import Logo from '../assets/img/logo2.png'
import {Link} from 'react-router-dom'

const Header = () => {
  //header state
  const [isActive, setIsActive] = useState(false)
  //sidebar state
  const {isOpen, setIsOpen} = useContext(SidebarContext)

  const {itemAmount} = useContext(CartContext)

  //event listener
  useEffect (()=>{
      window.addEventListener("scroll", ()=>{
        window.scrollY > 60 ? setIsActive(true) : setIsActive(false)
      })
  })
  return (
  <header 
    className={`${
      isActive ? 'bg-white py-3 shadow-md' : 'bg-red py-3'} 
      fixed w-full z-10 transition-all`}>

      <div className='px-[6%] flex items-center 
      justify-between h-full'>
        {/* logo */}
        <Link to={'/'}>
            <div className='text-pink-500 font-bold'>
              <img src={Logo} alt="" className='w-10 h-10' />
              ShopMall™
            </div>
        </Link>   
        {/* cart */}
        <div onClick={()=>setIsOpen(!isOpen)} 
          className='cursor-pointer flex relative'>
          <BsBag className='text-2xl'/>

          <div className='bg-red-500 absolute left-4 bottom-[-6px]
            border-2 text-[14px] w-[20px] h-[20px] pt-2 pb-2 text-white 
            rounded-full flex justify-center items-center'>
              {itemAmount}
          </div>
        </div>
      </div>
      
  </header>
  )
};

export default Header;
