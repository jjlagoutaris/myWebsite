import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Creations.scss";

const Creations = () => {
  const [creations, setCreations] = useState([]);
  const [filterCreations, setFilterCreations] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    const query = '*[_type == "creations"]';

    client.fetch(query).then((data) => {
      setCreations(data);
      setFilterCreations(data);
    });
  }, []);

  const handleCreationsFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterCreations(creations);
      } else {
        setFilterCreations(
          creations.filter((creations) => creations.tags.includes(item))
        );
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">
        <span>Portfolio</span>
      </h2>

      <div className="app__creations-filter">
        {["Web App", "React JS", "Backend", "All"].map((item, index) => (
          <div
            key={index}
            onClick={() => handleCreationsFilter(item)}
            className={`app__creations-filter-item app__flex p-text ${
              activeFilter === item ? "item-active" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__creations-portfolio"
      >
        {filterCreations.map((creations, index) => (
          <div className="app__creations-item app__flex" key={index}>
            <div className="app__creations-img app__flex">
              <img src={urlFor(creations.imgUrl)} alt={creations.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__creations-hover app__flex"
              >
                <a
                  href={creations.projectLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={creations.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__creations-content app__flex">
              <h4 className="bold-text">{creations.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {creations.description}
              </p>

              <div className="app__creations-tag app__flex">
                <p className="p-text">{creations.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Creations, "app__creations"),
  "creations",
  "app__primarybg"
);
