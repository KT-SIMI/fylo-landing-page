import { useState } from "react"

export default function Navbar() {
    const [isActive, setIsActive] = useState(false)
    return (
        <nav className="container bg-regular px-10 top-0 sticky items-center justify-center font-raleway max-w-full h-24 max-md:px-5">
            <div className="justify-between mx-auto z-40 py-4 max-md:h-10">
                <a href="/" className="text-white font-bold text-3xl flex items-center float-left hover:text-demo-link hover:ease-in-out hover:duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="#fff" d="m6 8l6 3l6-3l-6-3l-6 3Zm6.489-4.884l7.993 4.076c.486.248.661.81.391 1.257a.97.97 0 0 1-.39.359l-7.994 4.076a1.086 1.086 0 0 1-.978 0L3.518 8.808c-.486-.248-.661-.81-.391-1.257a.97.97 0 0 1 .39-.359l7.994-4.076c.304-.155.674-.155.978 0Zm0 13.766a1.07 1.07 0 0 1-.978 0l-7.993-4.147c-.486-.252-.661-.824-.391-1.278a.976.976 0 0 1 .39-.365a.818.818 0 0 1 .755 0l7.24 3.755c.303.158.673.158.977 0l7.239-3.755a.818.818 0 0 1 .754 0c.486.252.661.824.391 1.278a.976.976 0 0 1-.39.365l-7.994 4.147Zm0 4a1.07 1.07 0 0 1-.978 0l-7.993-4.147c-.486-.252-.661-.824-.391-1.278a.976.976 0 0 1 .39-.365a.818.818 0 0 1 .755 0l7.24 3.755c.303.158.673.158.977 0l7.239-3.755a.818.818 0 0 1 .754 0c.486.252.661.824.391 1.278a.976.976 0 0 1-.39.365l-7.994 4.147Z"/></svg>
                Fylo
                </a>
                <div 
                className={`md:hidden top-20% right-5% flex flex-col gap-1 float-right cursor-pointer ${isActive ? "is-active" : ""}`} onClick={() => setIsActive(!isActive)} id="mobile-menu">
                    <span style={{ width: "25px", height: "3px", marginTop: "5px"}} className={`bar mx-auto mb-0 transition-all duration-300 ease-in-out bg-white`}></span>
                    <span style={{ width: "25px", height: "3px", marginTop: "5px"}} className={`bar mx-auto mb-0 transition-all duration-300 ease-in-out bg-white`}></span>
                    <span style={{ width: "25px", height: "3px", marginTop: "5px"}} className={`bar mx-auto mb-0 transition-all duration-300 ease-in-out bg-white`}></span>
                </div>
                {isActive && (
                    <ul style={{ width: "90%", zIndex: "99", marginTop: "-20px" }} className="md:hidden grid grid-rows-3 mx-auto absolute transition-all ease-linear duration-500 h-36 bg-regular top-full">
                        <li className="text-base text-center">
                        <a href="/" className="text-white hover:text-demo-link">
                            Features
                        </a>
                    </li>
                    <li className="text-base text-center">
                        <a href="/" className="text-white hover:text-demo-link">
                            Prices
                        </a>
                    </li>
                    <li className="text-base text-center">
                        <a href="/" className="text-white hover:text-demo-link">
                            Signup
                        </a>
                    </li>
                    </ul>
                )}
          
                     <ul className="max-md:hidden flex items-center list-none text-center float-right">
                    <li className="text-base">
                        <a href="/" className="text-white flex justify-center px-2 h-full mr-9 hover:text-demo-link">
                            Features
                        </a>
                    </li>
                    <li className="text-base">
                        <a href="/" className="text-white flex justify-center px-2 h-full mr-9 hover:text-demo-link">
                            Prices
                        </a>
                    </li>
                    <li className="text-base">
                        <a href="/" className="text-white flex justify-center px-2 h-full mr-9 hover:text-demo-link">
                            Signup
                        </a>
                    </li>
                </ul>
                
            </div>
        </nav>
    )
}