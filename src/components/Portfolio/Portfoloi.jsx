

import img1 from './../../assets/imgs/poert1.png'
import img2 from './../../assets/imgs/port2.png'
import img3 from './../../assets/imgs/port3.png'


function Portfoloi() {
  return (
    <div className="text-center mx-auto mt-20 py-10 text-[#2c3e50] bg-white">
        <div className="py-5">
            <h2 className="font-bold text-[40px] py-2">PORTFOLIO COMPONENT</h2>
            <div className="flex flex-wrap justify-center items-center">
                <div className="w-20 h-1 bg-[#2c3e50] me-3"></div>
                <i className="fa-solid fa-star"></i>
                <div className="w-20 h-1 bg-[#2c3e50] ms-3"></div>
            </div>
        </div>
        <div className="container md:flex md:flex-wrap mx-auto justify-center items-center">
            <div className="w-1/3 p-5 group cursor-pointer">
                <div className="inner relative">
                    <img src={img1} className="rounded-md" alt="Poert-1"/>
                    <div className="layer absolute rounded-md bg-[rgba(26,188,156,.8)] inset-0 opacity-0 duration-500 group-hover:opacity-100 group-hover:duration-500 flex items-center justify-center">
                    <i className="fa-solid fa-plus text-white fa-7x"></i>
                    </div>
                </div>
            </div>
            <div className="w-1/3 p-5 group cursor-pointer">
                <div className="inner relative">
                    <img src={img2} className="rounded-md" alt="Poert-1"/>
                    <div className="layer absolute rounded-md bg-[rgba(26,188,156,.8)] inset-0 opacity-0 duration-500 group-hover:opacity-100 group-hover:duration-500 flex items-center justify-center">
                    <i className="fa-solid fa-plus text-white fa-7x"></i>
                    </div>
                </div>
            </div>
            <div className="w-1/3 p-5 group cursor-pointer">
                <div className="inner relative">
                    <img src={img3} className="rounded-md" alt="Poert-1"/>
                    <div className="layer absolute rounded-md bg-[rgba(26,188,156,.8)] inset-0 opacity-0 duration-500 group-hover:opacity-100 group-hover:duration-500 flex items-center justify-center">
                    <i className="fa-solid fa-plus text-white fa-7x"></i>
                    </div>
                </div>
            </div>
            <div className="w-1/3 p-5 group cursor-pointer">
                <div className="inner relative">
                    <img src={img1} className="rounded-md" alt="Poert-1"/>
                    <div className="layer absolute rounded-md bg-[rgba(26,188,156,.8)] inset-0 opacity-0 duration-500 group-hover:opacity-100 group-hover:duration-500 flex items-center justify-center">
                    <i className="fa-solid fa-plus text-white fa-7x"></i>
                    </div>
                </div>
            </div>
            <div className="w-1/3 p-5 group cursor-pointer">
                <div className="inner relative">
                    <img src={img2} className="rounded-md" alt="Poert-1"/>
                    <div className="layer absolute rounded-md bg-[rgba(26,188,156,.8)] inset-0 opacity-0 duration-500 group-hover:opacity-100 group-hover:duration-500 flex items-center justify-center">
                    <i className="fa-solid fa-plus text-white fa-7x"></i>
                    </div>
                </div>
            </div>
            <div className="w-1/3 p-5 group cursor-pointer">
                <div className="inner relative">
                    <img src={img3} className="rounded-md" alt="Poert-1"/>
                    <div className="layer absolute rounded-md bg-[rgba(26,188,156,.8)] inset-0 opacity-0 duration-500 group-hover:opacity-100 group-hover:duration-500 flex items-center justify-center">
                    <i className="fa-solid fa-plus text-white fa-7x"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Portfoloi