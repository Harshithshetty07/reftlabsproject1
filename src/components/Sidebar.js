import React from 'react'
import {FaPhoenixSquadron} from 'react-icons/fa'
import {RiHomeLine} from 'react-icons/ri'
import {IoAnalyticsOutline} from 'react-icons/io5'
import {MdOutlineExplore} from 'react-icons/md'
import {LiaShoppingBagSolid} from 'react-icons/lia'
import {BiMessageRoundedDots} from 'react-icons/bi'
import {RiSettingsLine} from 'react-icons/ri'
import {FiHelpCircle} from 'react-icons/fi'
import {MdOutlineFolderOpen} from 'react-icons/md'
import {LuFolder} from 'react-icons/lu'



const Sidebar = () => {
  return (
         
    <div className='bg-[#fff] h-[100%] px-[20px] shadow-lg  border-r-[1px] border-[#e2e0e0]  '>
        <div className='px-[15px] py-[20px] flex items-center justify-center'>
            <h1 className='text-[20px] flex justify-center leading-[24px] gap-2 font-bold cursor-pointer'>
            <FaPhoenixSquadron className='flex mt-1 text-indigo-500'/>Omai</h1>
        </div>

            {/* This code is utilized to Create a Home */}

        <div className='flex items-center gap-[10px] py-[15px] m-[10px] justify-center 
         hover:bg-indigo-500 hover:text-white rounded-md ml-1 mr-1'><RiHomeLine size={23}/>
          <p className='text-[14px] leading-[20px] font-semibold'>Home</p>
        </div>
          
           {/* This code is utilized to Create a Analytic */}

          <div className='flex items-center gap-[10px] py-[10px] justify-center 
         hover:bg-indigo-500 hover:text-white rounded-md ml-1 mr-1'>
            <IoAnalyticsOutline size={23}/>
            <p className='text-[15px] leading-[20px] font-semibold'>Analytic</p>
          </div>

             {/* This code is utilized to Create a Explore */}

          <div className='flex items-center gap-[10px] py-[15px] justify-center 
         hover:bg-indigo-500 hover:text-white rounded-md ml-1 mr-1'>
            <MdOutlineExplore size={23}/>
            <p className='text-[15px] leading-[20px] font-semibold'>Explore</p>
          </div>
             
              {/* This code is utilized to Create a Shop */}

          <div className='flex items-center gap-[10px] py-[15px] justify-center 
         hover:bg-indigo-500 hover:text-white rounded-md ml-1 mr-1'>
            <LiaShoppingBagSolid size={23} className='ml-[-10px]'/>
            <p className='text-[15px] leading-[20px] font-semibold'>Shop</p>
          </div>
           
            {/* This code is utilized to Create a Inbox */}

          <div className='flex items-center gap-[10px] py-[18px] justify-center 
         hover:bg-indigo-500 hover:text-white rounded-md ml-1 mr-1'>
            <BiMessageRoundedDots size={23} className='ml-[-5px]'/>
            <p className='text-[15px] leading-[20px] font-semibold'>Inbox</p>
          </div>

                {/* This code is utilized to Create a Tools */}

            <div className='pt-[15px] ml-10'>
                <p className='text-[10px] font-extrabold leading-[16px] ml-2 text-black/[0.4] '>Tools</p>
            <div className='flex items-center gap-[10px] p-[15px] justify-center 
         hover:bg-indigo-500 hover:text-white rounded-md ml-[-1.5rem] mr-1'>
            <div className='flex items-center mt-2  gap-[10px]'>
                <RiSettingsLine size={20}/>
                <p className='text-[15px] leading-[20px] font-semibold'>Setting</p>
            </div>
                
            </div>
            <div className='flex items-center gap-[10px] p-[15px] justify-center 
         hover:bg-indigo-500 hover:text-white rounded-md ml-[-2.5rem] mr-1'>
            <div className='text-[15px] items-center justify-center gap-[10px] flex  '>
           <FiHelpCircle size={20}/>
           <p className='text-[15px] leading-[20px] flex  font-semibold'>Help</p>
           </div>
         </div>
            </div>

               {/* This code is utilized to Create a Projects */}

            <div className='pt-[15px] ml-10 '>
                <p className='text-[10px] font-extrabold leading-[16px] ml-2 text-black/[0.4] '>Projects</p>
            <div className='flex items-center gap-[10px] py-[20px] justify-center 
         hover:bg-indigo-500 hover:text-white rounded-md ml-[-3rem] mr-1'>
            <div className='flex items-center gap-[16px]'>
                <MdOutlineFolderOpen size={20}/>
                <p className='text-[15px] leading-[20px] font-semibold'>Amazon</p>
            </div>
            </div>
            <div className='flex items-center gap-[10px] py-[15px] justify-center 
         hover:bg-indigo-500 hover:text-white rounded-md ml-[-2rem] mr-1'>
            <div className='text-[15px] items-center justify-center gap-[14px] flex  '>
           <LuFolder size={18}/>
           <p className='text-[15px] leading-[16px] flex  font-semibold'>Invinity HQ</p>
           </div>
         </div>
            </div>
    </div>
  )
}

export default Sidebar