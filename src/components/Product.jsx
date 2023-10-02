import React, {useContext} from 'react';
import {Link} from 'react-router-dom'
import {BsPlus} from 'react-icons/bs'
import {CartContext} from '../contexts/CartContext'

const Product = ({product}) => {
  const {addToCart} = useContext(CartContext)
  //destructure products
   const {id, image,category, title, price} = product;
  
   return (
    <div>
        <div className='border border-[#e4e4e4] h-[300px] mb-4 
            relative overflow-hidden group transition'>
            <div className='w-full h-full flex justify-center items-center'>
                <div className="w-[200px] mx-auto flex justify-center items-center">
                    <img className='max-h-[150px] 
                    transition duration-300' src={image} alt="" />
                </div>
            </div>
            <div className='absolute top-0 right- 
                p-2 flex gap-x-2'> 
                <button onClick={()=> addToCart(product, id)}>
                  <div className='flex justify-center items-center 
                  text-white w-10 h-10 bg-[#e68b9a] hover:h-11 
                    hover:w-11 transition-all duration-300'>
                    <BsPlus className='text-3xl'/>
                  </div>
                </button>
                <Link 
                  to={`/product/${id}`} 
                  className='w-15 h-10 bg-white text-pink-900 flex justify-center 
                    items-center font-bold drop-shadow-xl p-2 hover:text-[17px] 
                    transition-all duration-400'>
                  View Cart
                  {/* <BsEyeFill/> */}
                </Link>
            </div>
        </div>
        {/* category, title, price */}
        <div>
          <div className='text-sm capitalize text-gray-500 mb-1'>
            {category}
          </div>
            <Link 
              to={`/product/${id}`} >
              <h2 className='font-semibold mb-1'>{title}</h2>
            </Link>
          <div className='font-semibold'>{price}</div>
        </div>
    </div>
  )
};

export default Product;

