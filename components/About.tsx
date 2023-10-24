import Image from "next/image";
import image from "../assets/images/about.jpg";

const About = () => {
  return (
    <div className="about-container">
      <h2>About Me</h2>
      <div className="flex-about">
        <div className="about-text">
          <p>
            As a developer, I have always been passionate about creating elegant
            and effective solutions to complex problems. I have a strong
            foundation in software development, with a focus on web technologies
            such as HTML, CSS, and JavaScript.
          </p>
          <span className="about-text-icon">
            <i className="fa-solid fa-terminal" />
          </span>
          <p>
            Throughout my career, I have handled a wide range of projects, from
            simple static websites to complex enterprise-level applications.
            With expertise in React, Git, Node, and Express, I eagerly explore
            new technologies and continuously strive for growth.
          </p>
        </div>
        <div className="about-img">
          <Image
            src={image}
            className="profile-img"
            alt="Yasmin"
            // width={200}
            // height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
