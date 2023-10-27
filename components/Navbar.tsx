import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [, setScrollPosition] = useState(0);

  const scrollToSection = (sectionId: string, offset: number) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Calculate the scroll position with the offset
      const offsetPosition = element.offsetTop - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="nav-container">
      <div className="logo"></div>
      <Link href="/">Yasmins Portfolio</Link>
      {/* <a
        href="https://docs.google.com/document/d/10ZosQ38Z3804KYPcb_aZp9bceoXK-q3GrkHjYshqIRE/edit?usp=sharing"
        className="cta-btn"
      >
        Resume
      </a> */}
      <div className="nav-links">
        <Link href="/" onClick={goToTop}>
          Home
        </Link>
        <Link
          href="#about"
          onClick={() => scrollToSection("about-container", 250)}
        >
          About
        </Link>
        <Link
          href="#projects"
          onClick={() => scrollToSection("projects-container", 250)}
        >
          Projects
        </Link>
        <Link
          href="#contact"
          onClick={() => scrollToSection("contact-container", 0)}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
