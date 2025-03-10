import ProfilePhoto from '../assets/image.jpg'
import { motion } from "framer-motion";
import { FaGithub, FaTelegram, FaGlobe } from "react-icons/fa";

const About = () => {
    return (
        <section className="w-full text-white py-10 flex items-center flex-col">
            <div className="flex bg-black flex-col py-6 md:flex-row justify-center gap-8 md:gap-16 w-full max-w-5xl mx-auto">
                {/* Rasm qismi */}
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="w-40 h-40 md:w-60 md:h-60 lg:w-72 lg:h-72 rounded-full overflow-hidden shadow-lg"
                >
                    <img src={ProfilePhoto} alt="My Photo" className="w-full h-full object-cover" />
                </motion.div>

                {/* Matn qismi */}
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="text-center md:text-left max-w-xs sm:max-w-sm md:max-w-md"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                        My name is <strong>Bobomurod</strong>
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed">
                        I'm a passionate <strong>Frontend Developer</strong> with experience in React, TypeScript, and UI libraries like ShadCN and Tailwind CSS.
                        Additionally, I have backend experience with <strong>PHP Symfony</strong>, building robust and scalable applications.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mt-6">
                        <button className="px-4 py-2 sm:px-6 sm:py-3 bg-blue-500 rounded-lg hover:bg-blue-700 transition w-full sm:w-auto">
                            Contact Me
                        </button>

                        <div className="flex gap-3">
                            <a
                                href="https://github.com/Babon070"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition"
                            >
                                <FaGithub className="text-xl sm:text-2xl" />
                            </a>
                            <a
                                href="https://t.me/Frontend_dev070"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition"
                            >
                                <FaTelegram className="text-xl sm:text-2xl" />
                            </a>
                            <a
                                href="https://babon-dev.netlify.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition"
                            >
                                <FaGlobe className="text-xl sm:text-2xl" />
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
           
        </section>
    );
}

export default About;
