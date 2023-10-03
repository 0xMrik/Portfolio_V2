import React from "react";
//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";
// Cards
import Tilt from "react-parallax-tilt";

//experiences data
import { experiences } from "../constants";

const ServiceCard = ({ experience }) => {
  return (
    <Tilt
      className="xs:w-[250px] w-full mb-10"
      glareEnable={true}
      glareMaxOpacity={0.2}
      scale={1.1}
      glarePosition="all"
    >
      <div
        className="p-1 rounded-2xl shadow-lg"
        style={{
          background: "rgba(255, 255, 255, 0.10)",
          borderRadius: "16px",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(7.2px)",
          WebkitBackdropFilter: "blur(7.2px)",
          border: "2px solid rgba(255, 255, 255, 0.3)",
          borderImageSource:
            "linear-gradient(92.23deg, #406aff 21.43%, #3bace2 50.63%, #b936ee 100%, #ff56f6 117.04%)",
          borderImageSlice: 1,
        }}
      >
        <div className="card-content p-4">
          <div className="bg-white p-1 rounded-full mb-4 inline-block">
            <img
              alt={experience.title}
              src={experience.icon}
              className="w-16 h-16 object-contain"
            />
          </div>
          <h3 className="text-white text-[20px] font-bold text-center">
            {experience.title}
          </h3>
          <p className="text-gray-300 text-center mb-2">
            {experience.company_name}
          </p>
          <p className="text-gray-300 text-center mb-4">{experience.date}</p>
          <ul className="text-gray-300 text-sm space-y-1">
            {experience.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </Tilt>
  );
};

const Background = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text & images */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 mb-12 lg:mb-0 flex flex-col justify-center"
          >
            <h2 className="h2 text-accent mb-6">My Background</h2>
            <h3 className="h3 max-w-[455px] mb-16">What i've learned</h3>
          </motion.div>
          {/* Timeline */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 w-full h-full"
          >
            {/* Cards */}
            <div style={{ margin: "20px" }}>
              {experiences.map((experience, index) => (
                <ServiceCard
                  key={experience.title}
                  experience={experience}
                  index={index}
                  {...experience}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Background;
