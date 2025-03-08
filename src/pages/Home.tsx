import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Button } from "@/components/ui/button";

export default function Home() {
    const [theme, setTheme] = useState("dark");

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return (
        <div className="flex flex-col items-center pt-12 h-screen bg-black text-white text-center p-5">
            <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-5xl font-bold mb-4"
            >
                Welcome to My Portfolio
            </motion.h1>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="text-xl"
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
                className="mt-6 flex space-x-4"
            >
                <Button className="bg-white text-black px-6 py-3 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300">
                    Hire Me
                </Button>
                <Button className="bg-gray-800 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300">
                    View Projects
                </Button>
            </motion.div>
        </div>
    );
}
