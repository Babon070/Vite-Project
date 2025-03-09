import ProfilePhoto from '../assets/image.jpg'
import { motion } from "framer-motion";

const About = () => {
    return (
        <section className="w-full bg-black text-white py-16">
            <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 w-full max-w-[90%] mx-auto">
                {/* Rasm qismi */}
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="w-48 h-48 md:w-72 md:h-72 rounded-full overflow-hidden shadow-lg"
                >
                    <img src={ProfilePhoto} alt="My Photo" className="w-full h-full object-cover" />
                </motion.div>

                {/* Matn qismi */}
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="text-center md:text-left max-w-sm md:max-w-md"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        About Me
                    </h2>
                    <p className="text-base md:text-lg text-gray-400 leading-relaxed">
                        I'm a passionate <strong>Frontend Developer</strong> with experience in React, TypeScript, and UI libraries like ShadCN and Tailwind CSS.
                        Additionally, I have backend experience with <strong>PHP Symfony</strong>, building robust and scalable applications.
                    </p>

                    <div className="mt-6">
                        <button className="px-5 py-2 md:px-6 md:py-3 bg-blue-500 rounded-lg hover:bg-blue-700 transition">
                            Contact Me
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default About;
