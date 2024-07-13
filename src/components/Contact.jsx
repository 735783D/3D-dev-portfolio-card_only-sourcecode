import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { github, linkedin } from "../assets";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({});

    return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          className='mt-12 flex flex-col gap-8'
        >
          
          <div>
          <div className='relative inset-0 flex justify-left m-3 gap-10 card-img_hover'>
            <div onClick={() => window.open("https://www.linkedin.com/in/jason-whitby-mscsia-12x-aws-certified", "_blank")} 
              className="black-gradient w-15 h-15 rounded-full flex justify-center items-center cursor-pointer">
              <img
                src={linkedin}
                alt="icon"
                className='w-3/4 h-3/4 object-contain'
              />
            </div>
            <div onClick={() => window.open("https://github.com/735783D", "_blank")} 
              className="black-gradient w-15 h-15 rounded-full flex justify-center items-center cursor-pointer">
              <img
                src={github}
                alt="icon"
                className='w-3/4 h-3/4 object-contain'
              />
            </div>
          </div>
        </div>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");