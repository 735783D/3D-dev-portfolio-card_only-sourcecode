import React from 'react'

import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';

const TechCard = ({ index, icon }) => {
    return (
      <motion.div 
        className='pr-200' 
        variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
        <Tilt
            options={{
              max: 45,
              scale: 1, 
              speed: 450
            }}
            className='bg-transparent rounded-2xl sm:w-[100px] sm:h-[100px] h-[200px] w-full'>
          <div className='relative w-[100px] h-[100px]'>
            <img
              src={icon}
              alt='project_image'
              className='w-full h-full object-cover rounded-5xl scale-150'
            />
          </div>
        </Tilt>
      </motion.div>
    )
  }
const Tech = () => {
  return (
    <>
        <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My learnings</p>
        <h2 className={styles.sectionHeadText}>Technologies.</h2>
        </motion.div>

        <div className='w-full flex'>
        <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className='mb-20 mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
            I have experience working with the following technologies and tools. 
            I have gained a deep understanding of them
            not only in my personal projects, but also in my work. I find them extremely 
            useful when it comes to doing projects that I am passionate about.
        </motion.p>

        </div>
            <div className='pr-30 flex flex-row flex-wrap justify-center gap-20'>   {/* //changes where the gap is */}
                {technologies.map((technology) => (
                <div className='w-28 h-28' key={technology.name}>
                <TechCard icon={technology.icon} />
            </div>
        ))}
        </div>

    </>
    )
}

export default SectionWrapper (Tech, "") 