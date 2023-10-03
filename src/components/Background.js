import React from "react";
//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";
// Vertical Timeline
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

//experiences data
import { experiences } from "../constants";

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    className="vertical-timeline-element--work extra-class "
    contentStyle={{
      background: "#6c5ecf",
      color: "#fff",
      width: "80%",
      borderRadius: "10px",
    }}
    contentArrowStyle={{
      borderRight: `7px solid linear-gradient(92.23deg, #406aff 21.43%, #3bace2 50.63%, #b936ee 100%, #ff56f6 117.04%)`, // Gradient border
      marginTop: "-10px",
    }}
    iconStyle={{
      background:
        "linear-gradient(92.23deg, #406aff 21.43%, #3bace2 50.63%, #b936ee 100%, #ff56f6 117.04%)",
      color: "#fff",
    }}
    date={experience.date}
    position="right"
  >
    <h3
      style={{
        fontSize: "1.5rem",
        fontWeight: "bold",
        marginBottom: "0.5rem",
        color: "#fff", // Utilisation de texte blanc pour mettre en évidence
      }}
    >
      {experience.title}
    </h3>
    <h4
      style={{
        fontSize: "1.25rem",
        marginBottom: "1rem",
        color: "#e0d6f7", // Couleur légèrement plus claire proche du fond violet
      }}
    >
      {experience.company_name}
    </h4>
    <ul>
      {experience.points.map((point, index) => (
        <li key={index}>{point}</li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

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
            {/* Timeline */}
            {/* className="w-full h-full" */}
            <div>
              <VerticalTimeline
                layout="1-column-left"
                lineColor="linear-gradient(92.23deg, #406aff 21.43%, #3bace2 50.63%, #b936ee 100%, #ff56f6 117.04%)"
              >
                {experiences.map((experience, index) => (
                  <ExperienceCard key={index} experience={experience} />
                ))}
              </VerticalTimeline>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Background;
