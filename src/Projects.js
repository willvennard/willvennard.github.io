import React from "react";
import Thumbnail from "./Thumbnail.js"; // Import the Thumbnail component
import "./App.css";
import snakeThumbnail from "./images/snake-project.png";
import d3PlotThumbnail from "./images/gradient-one-plot.png";
import d3CalThumbnail from "./images/gradient-one-cal.png";
import planitThumbnail from "./images/planit-thumbnail.png";
import idealThumbnail from "./images/ideal-pancakes-thumbnail.png";
import eftThumbnail from "./images/eft-thumbnail.png";

let backgroundStyle = {
  //backgroundImage: `linear-gradient(to bottom right, red, yellow)`,
  // backgroundImage: `url(${Background})`,
  // backgroundAttachment: 'fixed',
  // backgroundRepeat: `no-repeat, repeat`,
  // backgroundSize: `100%`,
  // background:`#2A9D8F`
};

function Projects(props) {
  const projectData = [
    {
      link: "https://www.idealpancakes.com",
      sourceLink: "",
      image: idealThumbnail,
      title: "Ideal Pancakes",
      externalLink: "true",
      tools: ["React", "Bootstrap", "JS"],
      description: "An online recipe sharing community.",
      descriptionLong:
        "Led the development of a recipe-sharing platform, employing React, TypeScript, and Bootstrap for the dynamic front-end. This was seamlessly integrated with a robust Python-based server-side API featuring optimized data structures for peak efficiency. The platform is securely hosted on AWS, leveraging AWS Amplify for authentication.",
      roll: "co-creator",
    },
    {
      link: "",
      sourceLink: "",
      image: eftThumbnail,
      title: "USDA - Engineering Field Tools",
      externalLink: "true",
      tools: ["React", "Bootstrap", "JS", "Jest"],
      description:
        "Suite of engineering tools for commercial hydrology and general farming practices.",
      descriptionLong:
        "Directed the development of Engineering Field Tools (EFT), a comprehensive suite of engineering tools tailored for commercial hydrology and general farming practices. EFT encompasses advanced hydrology analysis capabilities, enabling precise assessments of flood potential on a given land profile. Additionally, the suite includes sophisticated tools for drainage pit design, offering practical solutions for effective water management in agricultural settings. This project involved the seamless integration of cutting-edge technologies to empower users with accurate and efficient engineering solutions for hydrological challenges in diverse environments.",
      roll: "tech lead & developer",
    },
    {
      link: "",
      sourceLink: "",
      image: d3PlotThumbnail,
      title: "Interactive Plot for GradientOne",
      externalLink: "true",
      tools: ["D3", "Angular", "JS"],
      description:
        "Real Oscilloscope data plotted using D3. Features include dynamic zoom, auto reduction, markers, and much more.",
      descriptionLong:
        "These plots are a key feature of GradientOne which allows users to remotely fetch data from their lab equipment and interact with it in the web UI.",
      roll: "front-end developer",
    },
    {
      link: "",
      sourceLink: "",
      image: d3CalThumbnail,
      title: "Calendar App for GradientOne",
      externalLink: "true",
      tools: ["Angular", "JS"],
      description:
        "A calendar application designed to allow reservation and utilization tracking for assets.",
      descriptionLong:
        "This product allows lab technicians and test engineers to reserve specific instruments connected to the GradientOne platform.",
      roll: "front-end developer",
    },
    {
      link: "/planit",
      sourceLink: "",
      image: planitThumbnail,
      title: "Maps Project",
      externalLink: "false",
      tools: ["Google Maps", "React", "JS"],
      description:
        "Basic application demonstrating react-google-maps and the Google Maps API.",
      descriptionLong:
        "I started this project to get familiar with using APIs and with the ultimate goal of building a full blown travel planning application. I had fun incorporating a bit of graphic design and marketing to make the product seem more real.",
      roll: "creator",
    },
    {
      link: "/snake",
      sourceLink: "",
      image: snakeThumbnail,
      title: "Snake",
      externalLink: "false",
      tools: ["D3", "JS"],
      description: "The classic arcade game you know and love. Plus bombs!",
      descriptionLong:
        "This game was created using only JS and D3. It was a fun coding challenge to try to recreate one of my favorite childhood arcade games. You can really get creative with the added features.",
      roll: "creator",
    },
  ];

  return (
    <div className="container-fluid project-container" style={backgroundStyle}>
      <div
        style={{
          padding: `0.5em 1em 0em`,
          background: `#2A9D8F`,
          borderBottom: `solid 2px #201b24`,
        }}
        className="row"
      >
        <h2>Recent Projects</h2>
      </div>
      <div className="row">
        {projectData.map((item, index) => (
          <div className="col-12 projects-row">
            <Thumbnail
              link={item.link}
              sourceLink={item.sourceLink}
              image={item.image}
              title={item.title}
              externalLink={item.externalLink}
              tools={item.tools}
              description={item.description}
              descriptionLong={item.descriptionLong}
              roll={item.roll}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
