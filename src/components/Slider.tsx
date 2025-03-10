import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaReact, FaJs, FaVuejs, FaPhp, FaSymfony, FaGithub } from "react-icons/fa";
import { SiNuxtdotjs } from "react-icons/si";
console.log(Slider);

const logos = [
    { icon: <FaReact size={60} className="text-blue-500" />, name: "React.js" },
    { icon: <FaJs size={60} className="text-yellow-400" />, name: "JavaScript" },
    { icon: <SiNuxtdotjs size={60} className="text-green-500" />, name: "Nuxt.js" },
    { icon: <FaVuejs size={60} className="text-green-400" />, name: "Vue.js" },
    { icon: <FaPhp size={60} className="text-indigo-500" />, name: "PHP" },
    { icon: <FaSymfony size={60} className="text-indigo-800" />, name: "Symfony" },
    { icon: <FaGithub size={60} className="text-white" />, name: "GitHub" },

];



const Featured = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 700,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3 } },
            { breakpoint: 768, settings: { slidesToShow: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 1 } },
        ],
    };

    return (
        <section className="w-full bg-black text-white py-12">
            <h2 className="text-center text-xl md:text-2xl font-bold mb-6 uppercase tracking-wide text-gray-300">
                As Featured In
            </h2>
            <div className="max-w-5xl mx-auto px-4">
                <Slider {...settings}>
                    {logos.map((logo, index) => (
                        <div key={index} className="flex flex-col items-center justify-center text-center gap-4">
                            <div className="text-6xl flex items-center justify-center">{logo.icon}</div>
                            <p className="text-gray-400 text-lg">{logo.name}</p>
                        </div>

                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default Featured;
