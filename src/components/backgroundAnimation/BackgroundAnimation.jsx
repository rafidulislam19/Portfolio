import { motion } from "framer-motion";
import "./background.css";

const particles = Array.from({ length: 20 });

const BackgroundAnimation = () => {
  return (
    <div className="bg-particles">
      {particles.map((_, i) => (
        <motion.span
          key={i}
          className="particle"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0,
          }}
          animate={{
            y: ["0%", "-120%"],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 18 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundAnimation;