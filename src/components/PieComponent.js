import React from 'react'
import {PiCalendarBlankLight} from 'react-icons/pi'
import {RiArrowDropDownLine} from 'react-icons/ri'
import {GiStarShuriken} from 'react-icons/gi'
import {BsLaptopFill} from 'react-icons/bs'
import {BiSolidCircle} from 'react-icons/bi'


function PieComponent() {
  return (
    <div className=' pl-[25px]'>

      {/* This code is utilized to Create a Transation History */}

        <div className='grid grid-cols-2 gap-10 mt-3'>
            <h1 className='flex font-bold text-[35px] font-sans'>Transation History</h1>
            <div className='flex  items-center px-3'>
                <button className='flex justify-center items-center rounded-[15px] gap-2 text-[16px] font-semibold bg-white shadow-lg 
                 border-[3px] w-[180px] h-[60px] ml-10'><PiCalendarBlankLight size={30}/>Month<RiArrowDropDownLine size={30}/></button>
                </div>

            <div className='grid grid-cols-3 gap-1 justify-between items-center mt-[-20px]'>
                <button className='flex w-[150px] h-[40px] justify-center items-center bg-slate-200 
                rounded-[10px] boder-[3px] shadow-md '>Recepient<RiArrowDropDownLine size={20}/></button>
                <button className='flex w-[130px] h-[40px] justify-center items-center bg-slate-200 
                rounded-[10px] boder-[3px] shadow-md '>Amount<RiArrowDropDownLine size={20}/></button>
                <button className='flex w-[115px] h-[40px] justify-center items-center bg-slate-200 
                rounded-[10px] boder-[3px] shadow-md ml-[-30px] '>Status<RiArrowDropDownLine size={20}/></button>
            </div>
        </div>
              
              {/* This code is utilized to Create a Tables */}
        <div className='pt-[30px] border-b-[1px] border-[#c9c5c5] opacity-50 w-[850px] py-6'>
          <div className='grid grid-cols-5  '>
            <div className='flex justify-center items-center ml-[400px] '>
            <h1 className='flex'>Customer</h1>
            <h1 className='flex justify-between items-center ml-[250px]'>Status</h1>
            <h1 className='flex ml-[100px]'>Date</h1>
            <h1 className='flex justify-between items-center ml-[100px]'>Invoice</h1>
            <h1 className='flex justify-end items-center ml-[110px]'>People</h1>
            </div>
          </div>
        </div>
              
              {/* This code is utilized to Create a Complete profiles */}
        <div className='pt-5 '>
          <div className='grid grid-cols-5'>
            <div className='flex justify-center items-center'>
            <div className='grid grid-cols-2 w-[100px] mt-2  ml-[-180px]'>
                    <div className='flex w-[60px] h-[60px] bg-gray-300 rounded-[50%] mt-3  justify-center items-center'><BsLaptopFill size={22}/>
                    <div className='flex mt-5 ml-8 absolute w-[19px] h-[19px] rounded-[50%] bg-black text-amber-500 
                    justify-center items-center  '><GiStarShuriken/></div>
                    </div>
                    <h2 className='text-[14px] w-[200px] font-bold flex items-center leading-[20px] ml-[20px]'>Fload Jhontosan
                    <h2 className='flex items-center absolute w-[200px] text-[12px] font-light mt-10 leading-[15px] gap-[1px]'>jhontosan@gmail.com</h2></h2>
                    </div>
                    </div>
              <div className='flex  items-center justify-center mt-5 ml-[25px] w-[120px] h-[40px] rounded-[20px] border-[1px] shadow-md bg-white'>
              <button className='flex justify-center items-center '><BiSolidCircle size={10} color='green' className='flex absolute gap-3 ml-[-85px]'/>Success</button>
              </div>
              <h2 className='flex justify-center items-center w-[400px]  font-semibold ml-[-180px]'>Nav 02, 2021</h2>
              <h2 className='flex justify-center items-center w-[50px]  font-semibold ml-[-125px]'>$100,00</h2>
              <div className='flex justify-start items-center ml-[-205px]  '>
                    
                    <button class="z-10 w-[30px] h-[30px] flex rounded-[50%] text-[10px] justify-center items-center bg-sky-300 ml-[-10px]">02</button>
                    <button class="z-20 w-[30px] h-[30px] flex rounded-[50%] text-[10px] justify-center items-center bg-orange-300 ml-[-10px]">03</button>
                    <button class="z-30 w-[30px] h-[30px] flex rounded-[50%] text-[10px] justify-center items-center text-white bg-black ml-[-10px]">+10</button>
                    </div>
            
          </div>
                <div className=' border-b-[1px] border-[#b3b2b2] opacity-50 w-[850px] pt-5 flex  '> </div>

          <div className='grid grid-cols-5'>
            <div className='flex justify-center items-center'>
            <div className='grid grid-cols-2 w-[100px] mt-2  ml-[-180px]'>
                    <div className='flex w-[60px] h-[60px] bg-gray-300 rounded-[50%] mt-3  justify-center items-center'><BsLaptopFill size={22}/>
                    <div className='flex mt-5 ml-8 absolute w-[19px] h-[19px] rounded-[50%] bg-black text-amber-500 
                    justify-center items-center  '><GiStarShuriken/></div>
                    </div>
                    <h2 className='text-[14px] w-[200px] font-bold flex items-center leading-[20px] ml-[20px]'>Fload Jhontosan
                    <h2 className='flex items-center absolute w-[200px] text-[12px] font-light mt-10 leading-[15px] gap-[1px]'>jhontosan@gmail.com</h2></h2>
                    </div>
                    </div>
              <div className='flex  items-center justify-center mt-5 ml-[25px] w-[120px] h-[40px] rounded-[20px] border-[1px] shadow-md bg-white'>
              <button className='flex justify-center items-center'><BiSolidCircle size={10} color='orange' className='flex absolute gap-3 ml-[-85px]'/>Pending</button>
              </div>
              <h2 className='flex justify-center items-center w-[400px] font-semibold ml-[-180px]'>Nav 02, 2021</h2>
              <h2 className='flex justify-center items-center w-[50px] font-semibold ml-[-125px]'>$100,00</h2>
              <div className='flex justify-start items-center ml-[-205px]  '>
                    
                    <button class="z-10 w-[30px] h-[30px] flex rounded-[50%] text-[10px] justify-center items-center bg-sky-300 ml-[-10px]">02</button>
                    <button class="z-20 w-[30px] h-[30px] flex rounded-[50%] text-[10px] justify-center items-center bg-orange-300 ml-[-10px]">03</button>
                    <button class="z-30 w-[30px] h-[30px] flex rounded-[50%] text-[10px] justify-center items-center text-white bg-black ml-[-10px]">+10</button>
                    
                    </div>
                    
          </div>
          <div className=' border-b-[1px] border-[#b3b2b2] opacity-50 w-[850px] pt-5 flex  '> </div>
          
        </div>
    </div>
  )
}

export default PieComponent