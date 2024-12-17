const testimonialText = "Fylo has increased our teams productivity by an order of magnitude. Since makiing the switch, our team has become a well-oiled collaboration machine"

export default function Testimonial({imageSrc, name, qualification}) {
    return (
        <div className="conainer px-5 py-8 font-sans text-white bg-testimonial max-md:w-3/4 max-md:mx-auto max-sm:w-4/5">
            <p className="text-left text-1xl">{testimonialText}</p>
            <img style={{borderRadius: '50%'}}
            src={imageSrc} alt="" className="mr-2 w-10 h-10 mt-3 inline-flex" />
            <p className="text-xs inline-flex">
                {name}
                <br />
                {qualification}
            </p>
        </div>
    )
}