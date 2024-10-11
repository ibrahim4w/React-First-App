
// import React from 'react'
import avatar from "./../../assets/imgs/avataaars.png"

function Home() {
  return (
    <div className="text-center mx-auto mt-20 py-12 text-white bg-[#1abc9c]">
        <img src={avatar} className="mx-auto" alt="Avatar"/>
        <div className="py-4">
            <h2 className="font-bold text-[40px] py-2">START FRAMEWORK</h2>
            <div className="flex flex-wrap justify-center items-center">
                <div className="w-20 h-1 bg-white me-3"></div>
                <i className="fa-solid fa-star"></i>
                <div className="w-20 h-1 bg-white ms-3"></div>
            </div>
        </div>
        <div className="">Graphic Artist - Web Designer - Illustrator - Wep Developer</div>
    </div>
  )
}

export default Home