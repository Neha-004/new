import React from 'react'
import Header from '@/components/Header' 
import Featuredcard from '@/components/Featuredcard'
import Card1 from '@/components/Card1'
import Footer from '@/components/Footer'


const index = () => {
  return (
    <div className='h-screen bg-white  w-full'>
      <Header/>
      <Featuredcard/>
      <div className='text-center font-serif text-xl text-black mt-5 font-bold'> MY POST </div>
      <div className='grid grid-cols-1 bg-orange-700 ml-[10%] h-[80%] rounded-2xl w-[25%] mt-8'> 
      
      <Card1/>
      </div>
      
      
      
      <Footer/>
 
    </div>
    
  )
}

export default index
