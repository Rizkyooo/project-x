import { motion } from "framer-motion";
export default function MainContent() {
  return (
    <motion.div
    initial={{ height:0, x: 0 , opacity:0}}
      animate={{  opacity:1}}
      transition={{
        ease: "easeIn",
        duration: 0.5,
        x: 1,
      }}
      exit={{opacity:1}}
    >
      <div className="h-screen bg-blue-900"></div>
    </motion.div>
  );
}
