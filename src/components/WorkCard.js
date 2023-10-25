// WorkCard.js
import React from "react";
import { FaGithub } from "react-icons/fa";
import Tilt from "react-parallax-tilt";

const WorkCard = ({ image, title, description, techStack, githubUrl }) => {
  return (
    <div className="w-full p-4 max-w-lg">
      <div className="bg-gradient-to-r from-purple-900 to-blue-900 p-5 rounded-2xl sm:w-[360px] w-full mb-12 mr-12">
        {/* En-tête */}
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <Tilt
              tiltEnable={false}
              scale={1.1}
              perspective={800}
              glareEnable={true}
              glareMaxOpacity={0.8}
            >
              <div
                onClick={() => window.open(githubUrl, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <FaGithub size={24} className="text-white" />
              </div>
            </Tilt>
          </div>
        </div>

        {/* Corps */}
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{title}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {techStack.map((tag, index) => (
            <p
              key={`${title}-${tag}-${index}`}
              className="text-[14px] text-white"
            >
              #{tag}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
