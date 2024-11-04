"use client"


import { IoPersonCircleOutline } from "react-icons/io5";
import Link from 'next/link';
import Image from 'next/image';
import { RiFacebookCircleLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";



const Nav = () => {
  return (
    <nav 
    className="pb-2 mt-2 px-[12%] font-sans font-thin duration-300 transition-all border-b-[2.5px] border-solid border-[#e3e3e3] items-center justify-between flex flex-row"
    >
      <div className="container flex justify-between gap-8 items-center">
        <a href="/">
        <Image
        src="/img/logo.png"
        width="200"
        height="0"
        className="hover:scale-105 duration-300 ease-in hover:cursor-pointer"
        />
        </a>
        <ul className="flex space-x-4 justify-start items-center w-full mt-4 gap-4 tracking-normal h-full">
          <li>
            <Link href="/">
              <p className="text-[#9c0004] text-sm font-semibold duration-150 ease-in-out border-b-[#9c0004] border-solid border-b-2 h-full ">Para sua casa</p>
            </Link>
          </li>
          <li>
            <Link href="/">
              <p className="text-[#808080] text-sm font-semibold duration-150 ease-in-out">Para sua empresa</p>
            </Link>
          </li>
        </ul>
        </div>
        <div id="buttons" className="flex w-80 items-center justify-between "><div className="flex items-center justify-start gap-3">
        <button className="p-2 bg-[#9c0004] inline-block rounded-full text-xs font-medium uppercase leading-normal shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg hover:scale-105">
          <FaInstagram className="relative" color={"white"} size={20}/>
          </button>
        <button className="p-2 bg-[#9c0004] inline-block rounded-full text-xs font-medium uppercase leading-normal shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg hover:scale-105">
          <RiFacebookCircleLine className="relative" color={"white"} size={20}/>
          </button>
      </div>
          <div className="max-w-0.5 min-h-8 mx-4 bg-[#e3e3e3] p-[0.8px]"></div>
          <button onClick={()=> window.location.href ="https://minhaconta.predialnet.com.br/"} className= "flex text-right items-center justify-end gap-2 flex-row text-sm rounded-lg text-black font-bold font-sans mt-4">
          <img src="/img/icone_profile.png" className="max-w-5 object-contain justify-end" alt="" /> <p className="">Já sou cliente</p>
          </button>
        </div>
      
    </nav>
  );
};

export default Nav;
