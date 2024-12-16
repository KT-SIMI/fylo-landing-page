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
        flexDirection: "center"
        }}
        className="container max-w-full px-32 pb-20 pt-20 bg-footer flex font-sans text-white z-0">
            <a href="/">
            <img src={logo} alt="" className="block" />
            </a>
      
      <p className="text-left text-1xl w-1/5 ml-40 mt-16">
        <img src={location} alt="" className="inline-flex mr-3" />
        1000, St. John's Blʌd, Off 31st Street, Brooklyn, New York, USA
      </p>
      <div className="text-left mt-16 ml-10">
        <p className="text-1xl mb-4">
          <img src={phone} alt="" className="inline-flex mr-3" />
          +1-234-567-890
        </p>
        <p className="text-1xl">
          <img src={mail} alt="" className="inline-flex mr-3" />
          example@fylo.com
        </p>
      </div>
      <div className="text-center flex flex-col mt-16 ml-10">
        <a href="/" className="text-1xl mb-2">
          About Us
        </a>
        <a href="/" className="text-1xl mb-2">
          Jobs
        </a>
        <a href="/" className="text-1xl mb-2">
          Press
        </a>
        <a href="/" className="text-1xl">
          Blog
        </a>
      </div>
      <div className="text-center flex flex-col mt-16 ml-10">
        <a href="/" className="text-1xl mb-2">
          Contact Us
        </a>
        <a href="/" className="text-1xl mb-2">
          Terms
        </a>
        <a href="/" className="text-1xl">
          Privacy
        </a>
      </div>
      <div className="text-center flex flex-col mt-16 ml-10">
                <a href="/" className="text-1xl mb-3"><img src={facebook} alt="" /></a>
                <a href="/" className="text-1xl mb-3"><img src={twitter} alt="" /></a>
                <a href="/" className="text-1xl"><img src={instagram} alt="" /></a>
      </div>
    </footer>
  );
}
