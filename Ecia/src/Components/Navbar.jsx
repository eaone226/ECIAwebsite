import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-[#0367fc] px-[120px] h-[62px] w-full fixed top-0 left-0  z-50">
      <div className="flex justify-between items-center h-full">   
       {/* Image Container */}
      <div className="relative w-[100px] h-[64px] cursor-pointer">
  {/* White logo (default) */}
  <img
    src="Ecialogo-white.png"
    alt="Ecialogo"
    className="absolute inset-0 w-[100px] h-[64px] transition-opacity duration-300 opacity-100 hover:opacity-0"
  />

  {/* Yellow logo (shows on hover) */}
  <img
    src="Ecialogo-yellow.png"
    alt="Ecialogo"
    className="absolute inset-0 w-[100px] h-[64px] opacity-0 hover:opacity-100 transition-opacity duration-300"
  />
</div>

        {/* Links */}
        <div className="flex items-center space-x-[22px]">
          <a href="#" className="text-[#F7F7F7] font-bold hover:text-[#d2f801] text-[16px]">Courses</a>
          <a href="#" className="text-[#F7F7F7] font-bold hover:text-[#d2f801] text-[16px]">Sevices</a>
          <a href="#" className="text-[#F7F7F7] font-bold hover:text-[#d2f801] text-[16px]">About</a>
          <a href="#" className="text-[#F7F7F7] font-bold hover:text-[#d2f801] text-[16px]">Contact</a>

          {/* Button */}

          <button className="
          font-bold border 
          border-[#f7f7f7] 
          rounded-[4px] text-[20px] 
          h-[34px] w-[157px] 
          hover:bg-[#f7f7f7] 
          hover:text-[#0367fc] h-[34]
           flex items-center justify-center 
           text-[#f7f7f7] cursor-pointer">For Business</button>
        </div>
      </div>  
    </nav>
  )
}

export default Navbar;
