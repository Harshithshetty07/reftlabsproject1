import React from 'react'
import {BiSearch} from 'react-icons/bi'
import {MdOutlineNotificationAdd} from 'react-icons/md'
import {RiArrowDropDownLine} from 'react-icons/ri'
import profile4 from "../assets/profile4.jpg"
import profile3 from "../assets/profile3.jpeg"



const Dashboardview = () => {
  return (
    <div className='bg-[#fff] items-center justify-between flex h-[85px] shadow-lg px-[25px] '>
          
          {/* This code is utilized to Create a Teams Message */}

     <div className='flex items-center ' >
       <div className='border-t-[6px] border-[#9c4ddd] rounded-[50%] w-[50px] h-[50px]'>
       <img src={profile3} alt=''/>
       </div>
        <div className='flex items-center text-[30px] leading-[20px] font-bold text-3xl'>
        Good Evening Team!
        <div className='flex items-center absolute text-xs mt-12 pt-4 font-normal font-serif leading-[20px] gap-[20px]'>
          Have an in-depth look at all the metrics within your dashboard
        </div>
        </div>
     </div>
     
        {/* This code is utilized to Create a Search and Notification icons */}
       
         <div className='flex items-center gap-[35px] pl-20 pt-7 relative '>
       <div className='flex items-center justify-center rounded-[50%]
        h-[40px] w-[40px] bg-gray-300'>
        <BiSearch size={23}/>
        </div> 
       <div className='flex items-center justify-between rounded-[50%] 
       '>
        <MdOutlineNotificationAdd size={25} />
        </div> 
       
        </div>


        {/* This code is utilized to Create a Profile */}
         
         <div className=' flex items-center gap-6 pt-7'>
       <div className='bg-[#fff] font-semibold h-[53px] shadow-lg 
       rounded-[25px] w-[200px] flex items-center '>
        <div className='flex items-center px-3 justify-center gap-[10px] '>
           <div className='w-[40px] h-[40px] rounded-[50%]  '> 
           <img src={profile4} alt=''/>
           </div>

        </div>
        <div className='flex gap-[15px] px-2 '>
            <ul>
                <li>Jhontosan </li>
                
            </ul>
            </div>
        <div className=' justify-center gap-5 items-center '>
        <RiArrowDropDownLine size={30}/>
        </div>
      
       </div>
       </div>
    </div>

  )
}

export default Dashboardview