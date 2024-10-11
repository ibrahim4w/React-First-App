
// import React from 'react'

function Footer() {
  return (
    <footer className="bg-[#2c3e50] text-white">
        <div className="container mx-auto text-center py-20">
        <div className="flex flex-wrap justify-center items-center">
            <div className="sm:w-1/3 w-full p-7">
                <h3 className="uppercase mb-3 font-medium text-[28px]">Location</h3>
                <p className="mb-3">2215 John Daniel Drive</p>
                <p className="mb-3">Clark, MO 65243</p>
            </div>
            <div className="sm:w-1/3 w-full p-7">
                <h3 className="uppercase mb-3 font-medium text-[28px]">AROUND THE WEB</h3>
                <div className="icon">
                <i className="fa-brands fa-facebook mx-2 border border-white rounded-full p-2"></i>
                <i className="fa-brands fa-twitter mx-2 border border-white rounded-full p-2"></i>
                <i className="fa-brands fa-linkedin-in mx-2 border border-white rounded-full p-2"></i>
                <i className="fa-solid fa-globe mx-2 border border-white rounded-full p-2"></i>
                </div>
            </div>
            <div className="sm:w-1/3 w-full p-7">
                <h3 className="uppercase mb-3 font-medium text-[28px]">ABOUT FREELANCER</h3>
                <p className="mb-3">Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            </div>
        </div>
        </div>
        <div className="py-5 bg-[#1a252f] text-center">
            <p>Copyright © Your Website 2021</p>
        </div>
    </footer>
  )
}

export default Footer