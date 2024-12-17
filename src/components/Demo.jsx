import imageSrc from '../assets/chat.png'
import svgSrc from '../assets/icon-arrow.svg'

export default function Demo() {
    return (
        <main className="container max-w-full bg-regular pl-24 py-20 grid grid-cols-2 text-white font-sans gap-10 max-md:grid-cols-1 max-md:grid-rows-2 max-md:pl-0">
            <img src={imageSrc} alt="" className="m-auto max-md:w-4/5" />
            <div className="text-left m-auto max-md:text-center max-md:mx-auto">
                <h2 className="text-3xl font-semibold mb-5 max-lg:text-2xl">Stay productive wherever you are</h2>
                <p className="text-1xl w-4/5 mb-3 max-md:mx-auto">
                Never let location be an issue when you are accessing your files. Fylo has you covered for all of your files storage needs.
                <br />
                <br />
                Securely share files and folders with friends,family and colleagues for live collaboration. No email attachments required
                </p>
                <a href="/" className="underline text-demo-link hover:text-white">See how Fylo workers
               <img src={svgSrc} alt="" className="inline-flex hover:ml-2" />
                </a>
            </div>
        </main>
    )
}