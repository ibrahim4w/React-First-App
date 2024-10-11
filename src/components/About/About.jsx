

// import React from 'react'

function About() {
  return (
    <div className="text-center mx-auto mt-20 py-32 text-white bg-[#1abc9c]">
        <div className="py-10">
            <h2 className="font-bold text-[40px] py-2">ABOUT COMPONENT</h2>
            <div className="flex flex-wrap justify-center items-center">
                <div className="w-20 h-1 bg-white me-3"></div>
                <i className="fa-solid fa-star"></i>
                <div className="w-20 h-1 bg-white ms-3"></div>
            </div>
        </div>
        <div className="container md:flex md:flex-wrap mx-auto justify-center items-center">
            <div className="w-1/2 py-3 mx-auto"><p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p></div>
            <div className="w-1/2 py-3 mx-auto"><p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p></div>
        </div>
    </div>
  )
}

export default About