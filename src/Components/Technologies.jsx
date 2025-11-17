import React, { useEffect } from "react";
import { motion } from "motion/react";
import { technologiesData } from "../Projects-data/technologiesData";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Technologies() {
  useEffect(() => {
    AOS.init({ duration: 600, offset: 80, once: false });
  }, []);

  return (
    <section className="w-full flex flex-col items-center justify-center bg-[var(--clt-dark)] py-15 px-10 gap-10">
      <h1 className="text-[var(--clr-accent)] text-center drop-shadow-md  mt-[30px] text-6xl">
        Technologies
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-6">
        {technologiesData.map((tech, index) => (
          <motion.code
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.5 }}
          >
            <img width="70" src={tech.src} alt={tech.alt} title={tech.title} />
          </motion.code>
        ))}
      </div>
    </section>
  );
}
