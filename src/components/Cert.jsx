import React from 'react'

import { BallCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { certs } from '../constants'
import { motion } from "framer-motion";

import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';

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
            className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
            The following certifications are a just a small list of what I have achieved over 
            the last few years. There are a lot more that I did not list as they have expired.
            But they do include certifications from the EC-Council for ethical hacking, Splunk 
            for security monitoring, Dell/EMC for data science, and Cisco Systems for networking.
        </motion.p>

        </div>
            <div className='mt-20 flex flex-row flex-wrap justify-center gap-10'>
                {certs.map((certification) => (
                <div className='w-28 h-28' key={certification.name}>
                <BallCanvas icon={certification.icon} />
            </div>
        ))}
        </div>

    </>
    )
}

export default SectionWrapper (Cert, "") 