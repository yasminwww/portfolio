import Image from "next/image";
import headshot from "../assets/images/yasminsv.jpg";

const Hero = () => {
  return (
    <div className="hero-container">
      <section className="gradient-bg">
        <div
          data-w-id="4cd1b5f2-9d79-0946-28b2-89b46f675bde"
          className="bg-circle _1"
        ></div>
        <div
          data-w-id="4cd1b5f2-9d79-0946-28b2-89b46f675bdf"
          className="bg-circle _2"
        ></div>
        <div
          data-w-id="4cd1b5f2-9d79-0946-28b2-89b46f675be0"
          className="bg-circle _3"
        ></div>
        <div
          data-w-id="4cd1b5f2-9d79-0946-28b2-89b46f675be1"
          className="bg-circle _4"
        ></div>
        <div
          data-w-id="4cd1b5f2-9d79-0946-28b2-89b46f675be2"
          className="bg-circle _5"
        ></div>
        <div
          data-w-id="4cd1b5f2-9d79-0946-28b2-89b46f675be3"
          className="bg-circle _6"
        ></div>
      </section>
      <Image
        src={headshot}
        className="profile-img"
        width={300}
        height={300}
        alt="Yasmins personal headshot"
      />
      <div className="hero-text">
        <h1>Front-end Developer 👋</h1>
        <p>
          Im a software developer based in Stockholm, Sweden, specializing in
          creating exceptional websites and applications for businesses.
        </p>
        <div className="social-icons">
          <a
            href="https://github.com/ym222bs"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/yasmin-mushahdi-461bb7196/
            "
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
