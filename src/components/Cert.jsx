import React from 'react'

import { SectionWrapper } from '../hoc'
import { certs } from '../constants'
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';

const CertCard = ({ index, icon }) => {
    return (
    <Tilt 
        className='bg-transparent rounded-2xl sm:w-[100px] sm:h-[100px] h-[200px] w-full gap-20'>
      <motion.div 
        className='xs:w-[250px] w-full h-full' 
        variants={fadeIn("up", "spring", index * 0.5, 0.75)}>

        <div 
            options={{
                max: 45,
                scale: 1, 
                speed: 450
            }}    
          className='relative w-[100px] h-[100px]'>

            <img
              src={icon}
              alt='project_image'
              className='w-full h-full object-cover rounded-5xl scale-150'
            />
          </div>
       
      </motion.div>
    </Tilt>
    )
  }
const Cert = () => {
  return (
    <>
        <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My collection</p>
        <h2 className={styles.sectionHeadText}>Certifications.</h2>
        </motion.div>

        <div className='w-full flex'>
        <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className='mb-20 mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
            The following certifications are a just a small list of what I have achieved over 
            the last few years. There are a lot more that I did not list as they have expired.
            But they do include certifications from the EC-Council for ethical hacking, Splunk 
            for security monitoring, Dell/EMC for data science, and Cisco Systems for networking.
        </motion.p>

        </div>
            <div className='pr-30 flex flex-wrap justify-center gap-10'>
                {certs.map((certification) => (
                <div className='w-28 h-28' key={certification.name}>
                <CertCard icon={certification.icon} />
            </div>
        ))}
        </div>

    </>
    )
}

export default SectionWrapper (Cert, "") 