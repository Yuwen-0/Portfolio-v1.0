import "./Navbar.css";
import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
export default function Navbar({isModalOpen,makeCircleBigger,makeCircleSmaller}) {
  const lastScrollTop = useRef(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Hide the navbar if modal is open and store scroll position
    if (isModalOpen) {
      hideNavbar();
      lastScrollTop.current = document.documentElement.scrollTop;
    } else {
      // Show the navbar only if it was hidden due to modal opening
      if (document.querySelector(".navbar").style.top === "-100px") {
        showNavbar();
      }
    }
  }, [isModalOpen]);

  const handleScroll = () => {
    // Only handle scroll events if modal is not open
      const scrollTop = document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop.current) {
        hideNavbar();
      } else if (scrollTop < lastScrollTop.current && !isModalOpen) {
        showNavbar();
      }
      lastScrollTop.current = scrollTop <= 0 ? 0 : scrollTop;
  };

  const showNavbar = () => {
    const navbar = document.querySelector(".navbar");
    navbar.style.top = "0";
  };

  const hideNavbar = () => {
    const navbar = document.querySelector(".navbar");
    navbar.style.top = "-100px";
  };

    const listItems = ["Home", "About", "Projects", "Contact"];
    return (
        <>
            <div className="navbar">
                <div onMouseEnter={() => makeCircleBigger("60px","60px")} onMouseLeave={() => makeCircleSmaller()} className="navbar-logo">
                    <h1>Yuwen</h1>
                </div>
                <div> 
                    <ul className="navbar-menu">
                        {listItems.map((item) => (
                            <li key={item}><a onMouseEnter={() => makeCircleBigger("60px","60px")} onMouseLeave={() => makeCircleSmaller()} href={`#${item}`}>{item}</a></li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

Navbar.propTypes = {
    makeCircleBigger: PropTypes.func,
    makeCircleSmaller: PropTypes.func,
    isModalOpen: PropTypes.bool
}