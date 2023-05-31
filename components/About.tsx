import Image from "next/image";
// import image from "../assets/images/";

import styles from "./About.module.scss";

const About = () => {
  return (
    <div className={styles.About}>
      <h2>About Me</h2>
      <div className="flex-about">
        <div className="about-text">
          <p>
            As a developer, I have always been passionate about creating elegant
            and effective solutions to complex problems. I have a strong
            foundation in software development, with a focus on web technologies
            such as HTML, CSS, and JavaScript.
          </p>
          <p>
            Throughout my career, I have worked on a wide range of projects,
            from simple static websites to complex enterprise-level
            applications. I am experienced in working with a variety of
            development tools and frameworks, including React, Angular, Vue.js,
            Node.js, and Laravel. I am always eager to learn and explore new
            technologies, and I am constantly seeking out opportunities to
            improve my skills and knowledge.
          </p>
        </div>
        <div className="about-img">
          <Image
            src="/images/about.jpeg"
            className="profile-img"
            alt="Yasmin"
            width={300}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
