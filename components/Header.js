import React from 'react'

const Header = () => {
  return (
    <div className='w-full h-[15%] bg-black'>
        <div className='h-[40%] w-[8%] '>
        <img src='gif.1.png' alt='ADT' className='rounded-md  ml-6'/>
        </div>
        <input
                    type="home"
                    id="what are you searching for?"
                    className="w-[20%] px-4 py-2 border border-gray-500 rounded focus:outline-none mx-[30%] focus:border-blue-600"
                    placeholder="what are you searching for?"
               
                    onChange={(e) => setTitle(e.target.value)}
                />
    </div>
  )
}

export default Header
