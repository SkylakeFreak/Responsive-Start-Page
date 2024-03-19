"use client";
import React, { useState } from 'react'
import Image from 'next/image'
import img1 from "../src/og.jpg"
import icon from "../src/new.png"
import giff from "../src/giff.gif"
import AnimatedCursor from "react-animated-cursor"
import img2 from "../src/img111.png"
import {Aclonica, Amita, Averia_Sans_Libre, Averia_Serif_Libre, Goldman, Henny_Penny, Jockey_One, La_Belle_Aurore, Luckiest_Guy, Nerko_One, Pacifico, Prompt, Reggae_One, Rock_Salt, Rubik_Broken_Fax, Rubik_Maps, Sacramento, Send_Flowers, Sunflower, Ubuntu, Unica_One} from "@next/font/google";
import { useTypewriter } from 'react-simple-typewriter';

const roboto12=Reggae_One({
  subsets:["latin"],
  weight:'400'
})
const roboto=Ubuntu({
    subsets:["latin"],
    weight:'400'
  })
  const roboto3=Rubik_Broken_Fax({
    subsets:["latin"],
    weight:'400'
  })
  const roboto4=Goldman({
    subsets:["latin"],
    weight:'400'
  })

function Front() {
    const [text, count] = useTypewriter({
        words: ["17 JAN 23'", "@ MIDNIGHT 12 ", "#Kinetic"],
        loop: true,
        delaySpeed: 2000,
        typeSpeed:100,
        
    });
    const [size,setsize]=useState(false);
    const click=()=>{
      setsize(!size)
    }
  return (
    <div className='h-screen'>
      <AnimatedCursor 
      color='244, 246, 247'
      />
        
        <Image  className='object-cover h-screen absolute w-screen' src={img1} alt="front"></Image>
        <div className='h-20 bg-black top-0 left-0 rounded-sm outline-double relative'>
            <div className='flex'>
            {/* <Image src={img2} className='p-4 h-40 w-40 rounded-2xl ' alt=""></Image> */}
        <div className='flex text-white items-center h-20 justify-center gap-10 text-lg lg:text-xl xl:text-2xl lg:hidden'>
          <div onMouseEnter={click}  onMouseLeave={click} className='ml-auto mb-5 flex h-20 w-20'>
             
          <p  className='mt-3 cursor-pointer  items-center inline'><Image onClick={click} className={`transition-all ${size ? 'transform rotate-90' : ''}   `} src={icon} alt=""></Image>
          {size&&<div style={roboto4.style} className='h-screen fixed bg-black w-40 md:w-60 animate-slide-in-from-left z-10 '>
          <Image src={giff} className='opacity-60 h-full absolute z-0' alt=""></Image>
            <ol className='relative text-md lg:text-2xl z-10'><ul className='h-10 mt-10 hover:bg-white hover:text-black flex items-center justify-center transition-all'>HOME</ul>
            <ul className='h-10 mt-10 hover:bg-white hover:text-black flex items-center justify-center'>ABOUT</ul>
            <ul className='h-10 mt-10 hover:bg-white hover:text-black flex items-center justify-center'>PRICING</ul>
            <ul className='h-10 mt-10 hover:bg-white hover:text-black flex items-center justify-center'>SCHEDULE</ul>
            <ul className='h-10 mt-10 hover:bg-white hover:text-black flex items-center justify-center'>SPEAKERS</ul>
            <ul className='h-10 mt-10 hover:bg-white hover:text-black flex items-center justify-center'>BLOG</ul>
            <ul className='h-10 mt-10 hover:bg-white hover:text-black flex items-center justify-center'>CONTACT</ul></ol>
            </div>}
          {false&&<div className='relative z-10 opacity-70'>
            <ol style={roboto4.style} className='bg-gray-500 xt-black text-center p-1'>
              <ul className='hover:bg-gray-400 p-1 outline outline-1 text-white hover:text-2xl transition-all'>HOME</ul>
              <ul className='hover:bg-gray-400 p-1 outline outline-1 hover:text-xl transition-all'>ABOUT</ul>
              <ul className='hover:bg-gray-400 p-1 outline outline-1 hover:text-xl transition-all'>PRICING</ul>
              <ul className='hover:bg-gray-400 p-1 outline outline-1 hover:text-lg transition-all'>SCHEDULE</ul>
              <ul className='hover:bg-gray-400 p-1 outline outline-1 hover:text-xl transition-all'>BLOG</ul>
              <ul className='hover:bg-gray-400 p-1 outline outline-1 hover:text-xl transition-all'>CONTACT</ul>
              </ol></div>}
</p></div>
         
          </div>    
        <div style={roboto12.style} className=' hidden lg:flex text-white items-center h-20 justify-center gap-10 text-lg lg:text-xl xl:text-2xl w-screen'><p className='hover:animate-pulse cursor-pointer hover:text-3xl hover:text-red-500 transition-all'>HOME</p>

        <p className='hover:animate-pulse cursor-pointer hover:text-3xl hover:text-red-500 transition-all'>ABOUT</p>
        <p className='hover:animate-pulse cursor-pointer hover:text-3xl hover:text-red-500 transition-all'>PRICING</p>
        <p className='hover:animate-pulse cursor-pointer hover:text-3xl hover:text-red-500 transition-all'>SCHEDULE</p>
        <p className='hover:animate-pulse cursor-pointer hover:text-3xl hover:text-red-500 transition-all'>SPEAKERS</p>
        <p className='hover:animate-pulse cursor-pointer hover:text-3xl hover:text-red-500 transition-all'>BLOG</p>
        <p className='hover:animate-pulse cursor-pointer hover:text-3xl hover:text-red-500 transition-all'>CONTACT</p>
        </div>
            </div>
            
        
            
        </div>
        <p style={roboto3.style} className='text-white text-5xl  lg:text-6xl xl:text-8xl relative font-sans flex items-center justify-center mt-20 z-0'>ELECTRO FEST</p>
        <p style={roboto4.style} className='text-white text-5xl  lg:text-6xl xl:text-8xl relative font-sans flex items-center justify-center mt-40 h-10'>{text}</p>
        <p style={roboto4.style} className='text-black text-2xl  lg:text-6xl xl:text-8xl font-sans mt-40 flex relative items-center justify-center'>RACE COURSE PARK</p>
        
        

        
    </div>
  )
}

export default Front