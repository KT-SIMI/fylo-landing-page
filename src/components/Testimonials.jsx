import column from "../assets/bg-quotes.png";
import profileImg1 from "../assets/profile-1.jpg";
import profileImg2 from "../assets/profile-2.jpg";
import profileImg3 from "../assets/profile-3.jpg";
import Testimonial from "./Testimonial";

const profiles = {
  profile1: {
    imageSrc: profileImg1,
    name: "Satish Patel",
    qualification: "Founder and CEO Muddle",
  },

  profile2: {
    imageSrc: profileImg2,
    name: "Bruce McKenzie",
    qualification: "Founder and CEO Bloomberg",
  },

  profile3: {
    imageSrc: profileImg3,
    name: "Iva Boyd",
    qualification: "CTO and Co-Founder, Snooze",
  },
};

export default function Testimonials() {
  return (
    <main className="bg-regular max-w-full py-20">
      <img src={column} alt="" className="ml-48 max-2xl:ml-20 max-md:mb-5" />
      <div className="container grid grid-cols-3 w-3/5 mx-auto gap-10 max-2xl:w-3/4 max-lg:w-4/5 max-md:w-1/2 max-md:grid-cols-1 max-md:grid-rows-3">
        <Testimonial
          imageSrc={profiles.profile1.imageSrc}
          name={profiles.profile1.name}
          qualification={profiles.profile1.qualification}
        />

        <Testimonial
          imageSrc={profiles.profile2.imageSrc}
          name={profiles.profile2.name}
          qualification={profiles.profile2.qualification}
        />

        <Testimonial
          imageSrc={profiles.profile3.imageSrc}
          name={profiles.profile3.name}
          qualification={profiles.profile3.qualification}
        />
      </div>
    </main>
  );
}
