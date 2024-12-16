import service1__image from '../assets/icon-access-anywhere.svg'
import service2__image from '../assets/icon-security.svg'
import service3__image from '../assets/icon-collaboration.svg'
import service4__image from '../assets/icon-any-file.svg'
import Service from './Service'

const services = {
    service1: {
        imageSrc: service1__image,
        header: "Access your files everywhere",
        paragraph: "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere"
    },

    service2: {
        imageSrc: service2__image,
        header: "Security you can trust",
        paragraph: "2-factor authentication and user controlled encryption are just a couple of the security features we allow to secure your files"
    },

    service3: {
        imageSrc: service3__image,
        header: "Real-time colaboration",
        paragraph: "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachment required"
    },

    service4: {
        imageSrc: service4__image,
        header: "Store any type of file",
        paragraph: "Whether you are sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared"
    },
}

export default function Main() {
    return (
        <main className="container max-w-full pb-20 bg-regular text-white font-sans">
            <div className="container w-3/5 m-auto grid grid-cols-2 grid-rows-2 gap-6">
                <Service
                imageSrc={services.service1.imageSrc}
                heading={services.service1.header}
                paragraph={services.service1.paragraph}
                />
                  <Service
                imageSrc={services.service2.imageSrc}
                heading={services.service2.header}
                paragraph={services.service2.paragraph}
                />
                  <Service
                imageSrc={services.service3.imageSrc}
                heading={services.service3.header}
                paragraph={services.service3.paragraph}
                />
                  <Service
                imageSrc={services.service4.imageSrc}
                heading={services.service4.header}
                paragraph={services.service4.paragraph}
                />
            </div>
        </main>
    )
}