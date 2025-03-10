import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import About from "./About";
import Projects from "@/components/Projects";

export default function Home() {
    const navigate = useNavigate();

    return (
        <div className="bg-black min-h-screen p-6 md:p-10">
            <About />
            <div className="flex flex-col items-center text-white text-center space-y-6">
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-4xl md:text-5xl font-bold"
                >
                    Welcome to My Portfolio
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="text-lg md:text-xl"
                >
                    I'm a{" "}
                    <Typewriter
                        words={["Frontend Developer", "React Enthusiast", "UI/UX Designer"]}
                        loop={true}
                        cursor
                        cursorStyle="|"
                        typeSpeed={100}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 w-full md:w-auto"
                >
                    {/* <Button className="bg-white text-black px-6 py-3 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300 w-full md:w-auto">
                        Hire Me
                    </Button>
                    <Button
                        onClick={() => navigate("/projects")}
                        className="bg-gray-800 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300 w-full md:w-auto"
                    >
                        View Projects
                    </Button> */}
                </motion.div>
            </div>
            <Projects />
        </div>
    );
}
