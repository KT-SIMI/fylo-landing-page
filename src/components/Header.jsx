import headerImage from "../assets/header.png"

export default function Header() {
    return (
        <header className="bg-regular text-center max-w-full font-sans text-white h-screen max-md:h-auto max-md:pb-20">
            <img src={headerImage} alt="" className="mx-auto pt-20 max-md:w-3/5 max-sm:w-3/4" />
            <h2 className="font-semibold mt-5 text-3xl max-md:text-2xl max-md:w-4/5 mx-auto">
                All your files in one location, accessible anywhere
            </h2>
            <p className="font-normal text-1xl mt-3 max-md:text-base max-md:w-4/5 mx-auto">
            Fylo stores all your important file in one secure location. Access them whenever you need, share and collaborate with friends, family and co-workers                
            </p>
            <button className="bg-head-btn rounded-3xl w-64 py-2 mt-3 max-md:w-3/4 hover:bg-demo-link">Get Started</button>
        </header>
    )
}