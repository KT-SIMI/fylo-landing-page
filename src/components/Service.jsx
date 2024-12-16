export default function Service({imageSrc, heading, paragraph}) {
    return (
        <div className="text-center font-sans m-auto w-4/5">
            <img src={imageSrc} alt="" className="mt-5 mx-auto" />
            <h2 className="font-bold mt-5">{heading}</h2>
            <p className="text-1xl">{paragraph}</p>
        </div>
    )
}