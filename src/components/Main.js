import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import MiniCalendar from  'react-calendar';
import {AiOutlinePlus} from 'react-icons/ai'
import {RiArrowDropDownLine} from 'react-icons/ri'
import {AiOutlineArrowRight} from 'react-icons/ai'
import {IoTimeOutline} from 'react-icons/io5'
import {BsLaptopFill} from 'react-icons/bs'
import {PiVideoCameraThin} from 'react-icons/pi'
import {GiBlackBook, GiSpellBook} from 'react-icons/gi'
import profile4 from "../assets/profile4.jpg"
import PieComponent from '../components/PieComponent'




const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];



  
      

const Main = () => {
  return (
    <div className='pt-[20px] px-[25px] bg-[#fff]'>

      {/* This code is utilized to Shows a Montly Revenue */}

        <div className=' mt-[20px]  flex ml-5'>
           <div className=' h-[150px] grid grid-cols-3 basis-[75%] justify-between items-center rounded-[20px] bg-indigo-500 '>
            <div>
                <h2 className='text-[15px] leading-[15px] flex text-white items-center justify-center '>Montly Revenue </h2>
                <h1 className='text-[20px] font-bold mt-3 flex text-white  items-center gap-1 ml-2 justify-center'>$3.500
                <h1 className='w-[60px] h-[28px] rounded-[15px] text-[15px] flex items-center justify-center text-indigo-500 bg-white  '>+2.4%</h1> </h1>
                <h2 className=' flex items-center justify-center text-white'>Previous month $1.7k</h2>
            </div>
            <div>
                
                <h2 className='text-[15px] leading-[15px] flex text-white items-center justify-center '>Montly Revenue </h2>
                <h1 className='text-[20px] font-bold mt-3 flex text-white items-center gap-1 ml-2 justify-center'>$3.500
                <h1 className='w-[60px] h-[28px] rounded-[15px] text-[15px] flex items-center justify-center text-indigo-500 bg-white  '>+2.4%</h1> </h1>
                <h2 className=' flex items-center  px-2 justify-center text-white'>Previous month 
                <h2 className='flex absolute ml-40 text-white'>$1.7k</h2></h2>
            </div>
            <div>
                
                <h2 className='text-[15px] leading-[15px] flex text-white items-center justify-center '>Montly Revenue </h2>
                <h1 className='text-[20px] font-bold mt-3 flex text-white items-center gap-1 ml-2 justify-center'>$3.500
                <h1 className='w-[60px] h-[28px] rounded-[15px] text-[15px] flex items-center justify-center text-indigo-500 bg-white  '>+2.4%</h1> </h1>
                <h2 className=' flex items-center justify-center text-white font-semibold'>Previous month $1.7k</h2>
            </div>
           </div>

           {/* This code is utilized to Create a Messages and Creative controls */}

           <div className='basis-[25%] ml-14 flex rounded-[5px]'>
                <div>
                    <p className='flex text-indigo-500'>Premium Access</p>
                    <h2 className=' font-bold text-[25px] w-[180px]'>Take Back Your Creative Control</h2>
                    <div className='flex justify-end items-center mt-[-30px] ml-[120px]'>
                    <button class="z-10 w-[50px] h-[50px] flex rounded-[50%] justify-center items-center bg-pink-300 ml-[-20px]">
                    <img src={profile4} alt=''/></button>
                    <button class="z-20 w-[50px] h-[50px] flex rounded-[50%] justify-center items-center bg-sky-300 ml-[-20px]">02</button>
                    <button class="z-30 w-[50px] h-[50px] flex rounded-[50%] justify-center items-center bg-orange-300 ml-[-20px]">03</button>
                    <button class="z-40 w-[50px] h-[50px] flex rounded-[50%] justify-center items-center text-white bg-black ml-[-20px]">+10</button>
                    </div>
                   
                </div>
                </div>
        </div>


             {/* This code is utilized to Create a Total Sales & Cost and Analytic chart */}

            
            <div className='basis-[60%] w-full mt-4  justify-end flex items-center'>
            <div className='flex mt-[20px] gap-[30px] h-[250px] border-[3px] shadow-md rounded-[20px] ml-5 '>
         <div className=' mt-[20px] grid grid-cols-2 justify-between rounded-[20px]'>
           <div className=' '>
            <div>
                <h2 className='text-[30px] w-[600px] font-bold flex items-center ml-14 leading-[20px] gap-[20px]'>Total Sales & Cost </h2>
                <div className='flex items-center mt-3 absolute text-[16px] ml-14 font-serif leading-[25px] gap-[20px]'>Last 60 days</div>
                
                
                <h1 className='text-[55px] font-sans font-bold mt-20 ml-14 flex leading-[20px] gap-[18px] w-[400px] text-indigo-500  items-center '>$956.82k
                <h1 className='w-[90px] h-[35px] rounded-[25px] text-[15px] text-lime-600 ml-3 bg-lime-300 flex justify-center items-center  '>+5.4%</h1> </h1>
                <h2 className='text-[18px] font-light ml-14 mt-3 flex leading-[20px] gap-[5px] w-[400px]  items-center'>
                    <div className='flex mt-1 font-semibold text-lime-400'><AiOutlinePlus size={15} className='flex mt-1' />8.20k</div> vs prev. 60 days</h2>
            </div>
            </div>
            </div>
            
             <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" stackId="a" fill="#8884d8" />
          <Bar dataKey="amt" stackId="a" fill="#8884d8" />
          <Bar dataKey="uv" fill="#ffc658" />
        </BarChart>
      </ResponsiveContainer>
            </div>


            {/* This code is utilized to Create a Upgrade Profesional Platform */}

            <div className='basis-[40%] h-[250px] ml-10 flex rounded-[5px]'>
                <div>
                <h2 className='flex mt-2 gap-3 opacity-40'>The Profesional Platform <RiArrowDropDownLine size={25}/></h2>
                <button className='h-[60px] w-[300px] justify-between gap-[15px] px-5 mt-10 b-[2px] border-[black] 
                items-center flex shadow-lg rounded-[15px]  '>Upgrade Now
                <AiOutlineArrowRight size={20}/> </button>
                <div className=' border-b-[1px] border-[#b3b2b2] pt-7 flex  '> </div>
               <div className='flex mt-6 w-[300px] justify-center items-center'>
                <button className='flex rounded-[50%] justify-center items-center font-semibold font-sans text-sm leading-[25px] opacity-80 '><MiniCalendar/></button>
                </div>
                   

                   {/* This code is utilized to Create a Meeting links */}

                <div className='grid grid-cols-3 w-[310px] mt-2 gap-2 border-b-[1px] border-[#c9c5c5] py-4'>
                    <div className='flex w-[50px] h-[50px] bg-gray-300 rounded-[50%] mt-5  justify-center items-center  '><BsLaptopFill size={20}/></div>
                    <h2 className='text-[14px] w-[200px] font-bold flex items-center leading-[20px] gap-[4px] ml-[-30px]'>Meeting with Client
                    <h2 className='flex items-center absolute w-[200px] text-[12px] font-light mt-12 leading-[15px] gap-[4px]'><PiVideoCameraThin/>Google Meet</h2></h2>
                    <h2 className='flex mt-10 justify-end items-center text-xs gap-1 ml-1 w-[100px] '><IoTimeOutline/>03 pm</h2>
                </div>
                <div className='grid grid-cols-3 w-[310px] mt-2 gap-2 border-b-[1px] border-[#c9c5c5] py-4'>
                    <div className='flex w-[50px] h-[50px] bg-gray-300 rounded-[50%] mt-5  justify-center items-center  '><GiSpellBook size={20} color='green'/></div>
                    <h2 className='text-[14px] w-[200px] font-bold flex items-center leading-[20px] ml-[-30px]'>Meeting with Client
                    <h2 className='flex items-center absolute w-[200px] text-[12px] font-light mt-12 leading-[15px] gap-[8px]'><PiVideoCameraThin/>Google Meet</h2></h2>
                    <h2 className='flex mt-10 justify-end items-center text-xs gap-1 ml-1 w-[100px] '><IoTimeOutline/>03 pm</h2>
                </div>
                <div className='grid grid-cols-3 w-[310px] mt-2 gap-2 border-b-[1px] border-[#c9c5c5] py-4'>
                    <div className='flex w-[50px] h-[50px] bg-gray-300 rounded-[50%] mt-5  justify-center items-center  '><GiBlackBook size={20} color='red'/></div>
                    <h2 className='text-[14px] w-[200px] font-bold flex items-center leading-[20px] ml-[-30px]'>Meeting with Client
                    <h2 className='flex items-center absolute w-[200px] text-[12px] font-light mt-12 leading-[15px] gap-[8px]'><PiVideoCameraThin/>Google Meet</h2></h2>
                    <h2 className='flex mt-10 justify-end items-center text-xs gap-1 ml-1 w-[100px] '><IoTimeOutline/>03 pm</h2>
                </div>

                </div>
            </div>
            
            </div>
            <div><PieComponent/></div>

    </div>
  )
}

export default Main