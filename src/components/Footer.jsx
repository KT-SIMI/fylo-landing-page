import logo from "../assets/logo.svg";
import location from "../assets/icon-location.svg";
import phone from "../assets/icon-phone.svg";
import mail from "../assets/icon-email.svg";
import facebook from '../assets/icon-facebook.svg'
import twitter from '../assets/icon-twitter.svg'
import instagram from '../assets/icon-instagram.svg'

export default function Footer() {
  return (
    <footer 
    style={{ 
        marginTop: "-100px", 
        }}
        className="container max-w-full pb-20 pt-20 bg-footer flex font-sans text-white z-0 max-2xl:px-0 max-xl:pt-28 max-lg:block">
            <a href="/" className="ml-20 max-xl:ml-10 max-lg:mx-auto text-center hover:opacity-60">
            <img src={logo} alt="" className="max-lg:mx-auto" />
            </a>
      <div className="mt-20 flex px-10% w-full max-md:grid max-md:grid-rows-4 max-md:w-3/4 max-md:gap-5 max-md:mx-auto">
      <p className="text-left text-1xl w-1/5 max-md:w-3/4 max-md:text-center max-md:mx-auto hover:opacity-60">
        <img src={location} alt="" className="inline-flex mr-3" />
        1000, St. John's Blʌd, Off 31st Street, Brooklyn, New York, USA
      </p>
      <div className="text-left ml-10 max-md:w-3/4 max-md:text-center max-md:mx-auto">
        <p className="text-1xl mb-4 hover:opacity-60">
          <img src={phone} alt="" className="inline-flex mr-3" />
          +1-234-567-890
        </p>
        <p className="text-1xl hover:opacity-60">
          <img src={mail} alt="" className="inline-flex mr-3" />
          example@fylo.com
        </p>
      </div>
      <div className="text-center flex flex-col ml-10 max-md:w-3/4 max-md:text-center max-md:mx-auto">
        <a href="/" className="text-1xl mb-2 hover:opacity-60">
          About Us
        </a>
        <a href="/" className="text-1xl mb-2 hover:opacity-60">
          Jobs
        </a>
        <a href="/" className="text-1xl mb-2 hover:opacity-60">
          Press
        </a>
        <a href="/" className="text-1xl mb-3 hover:opacity-60">
          Blog
        </a>
      </div>
      <div className="text-center flex flex-col ml-10 max-md:w-3/4 max-md:text-center max-md:mx-auto">
        <a href="/" className="text-1xl mb-2 hover:opacity-60">
          Contact Us
        </a>
        <a href="/" className="text-1xl mb-2 hover:opacity-60">
          Terms
        </a>
        <a href="/" className="text-1xl hover:opacity-60">
          Privacy
        </a>
      </div>
      <div className="text-center flex flex-row ml-10 max-md:w-3/4 max-md:mx-auto max-md:text-center max-md:justify-center">
                <a href="/" className="text-1xl mr-5  max-md:inline-flex hover:opacity-75"><img src={facebook} alt="" /></a>
                <a href="/" className="text-1xl mr-5  max-md:inline-flex hover:opacity-75"><img src={twitter} alt="" /></a>
                <a href="/" className="text-1xl  max-md:inline-flex hover:opacity-75"><img src={instagram} alt="" /></a>
      </div>
      </div>
    </footer>
  );
}
