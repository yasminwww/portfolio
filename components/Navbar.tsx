import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="nav-container">
      <div className="logo">
        <Link href="/">Yasmins Portfolio</Link>
      </div>
      {/* <a
        href="https://docs.google.com/document/d/10ZosQ38Z3804KYPcb_aZp9bceoXK-q3GrkHjYshqIRE/edit?usp=sharing"
        className="cta-btn"
      >
        Resume
      </a> */}

      <Link href="/">Home</Link>
      <Link href="#about">About</Link>
      <Link href="#projects">Projects</Link>
      <Link href="#contact">Contact</Link>
    </nav>
  );
};

export default Navbar;
