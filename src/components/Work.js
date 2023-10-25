import React from 'react';
// motion 
import { motion } from 'framer-motion';
// variants 
import { fadeIn } from '../variants';
// img
import Img2 from "../assets/portfolio-img2.png";
// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
// import icons
import { FaGithub } from "react-icons/fa";
// constants
import { projects } from "../constants";
// Components 
import WorkCard from './WorkCard';


const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 mb-12 lg:mb-0 flex flex-col justify-center px-4 lg:px-0"
          >
            {/* text */}
            <div className="max-w-lg mx-auto lg:mx-0">
              <h2 className="h2 leading-tight text-accent">
                My Latest <br />
                Work
              </h2>
              <p className="max-w-sm mb-16">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi,
                nam in? Tempora sapiente neque enim. Animi sint eaque
                perferendis
              </p>
              <button className="btn btn-sm" data-text="View all projects" />
            </div>
          </motion.div>

          <div className="flex-1 w-full h-full px-4 lg:px-0">
            <motion.div
              variants={fadeIn("left", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="flex-1 mb-12 lg:mb-0 flex flex-col justify-center px-4 lg:px-0"
            >
              <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                className="mx-auto max-w-lg"
                cardsEffect={{
                  slideShadows: false,
                }}
              >
                {projects.map((project, index) => (
                  <SwiperSlide
                    key={`project-${index}`}
                    className="w-full p-4 max-w-lg"
                  >
                    <WorkCard
                      image={project.image.Img2}
                      title={project.name}
                      description={project.description}
                      techStack={project.tags}
                      githubUrl={project.source_code_link}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
