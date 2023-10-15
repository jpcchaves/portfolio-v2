import React from "react";

import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion.js";
import { styles } from "../styles.js";
import { motion } from "framer-motion";
import { technologies } from "../constants/index.js";
import Tilt from "react-tilt";
import ImageShadow from "react-image-shadow";

const TechCard = ({ name, icon }) => {
  return (
    <Tilt>
      <div className={"d-flex justify-center items-center"}>
        <ImageShadow
          width={100}
          shadowBlur={30}
          src={icon}
          alt="web-development"
          className={"mb-1 cursor-pointer"}
        />
      </div>

      <p className="text-white text-lg font-bold text-center select-none">
        {name}
      </p>
    </Tilt>
  );
};

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Technologies I love to work with
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Technologies.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-wrap justify-center gap-10">
        {technologies.map(({ icon, name }) => (
          <TechCard icon={icon} name={name} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "skills");
