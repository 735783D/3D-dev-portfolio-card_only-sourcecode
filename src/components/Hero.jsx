import React from 'react'
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { Tilt } from "react-tilt";
import { fadeIn, textVariant } from "../utils/motion";

const CompCard = ({ index }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
          options={{
            max: 45,
            scale: 1.05, 
            speed: 450
          }}
          className='bg-transparent rounded-2xl sm:w-[800px] sm:h-[200px] w-full'>
        <div className='relative w-full h-[250px]'>
          <img
            src={"./public/iconics/main_images/computer_div_image.png"}
            alt='project_image'
            className='w-full h-full object-cover rounded-5xl scale-150'
          />
        </div>
      </Tilt>
    </motion.div>
  )
}
const Hero = () => {
  return (
    <section className='relative w-full h-[1000px] mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#915eff]'>Jason</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop 3D visuals, user <br className='sm:block hidden'/> interfaces, web applications 
            <br className='sm:block hidden'/> and do cybersecurity
          </p>
        </div>
      </div>

      <div className='absolute xs:bottom-30 bottom-32 w-full flex justify-center items-center'>
        <div className='sm:h-[200px] flex flex-wrap scale-150'>
            <CompCard  />
        </div>
      </div>
    </section>
  )
}
export default Hero