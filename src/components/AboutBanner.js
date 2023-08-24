import { useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import {
  Arrow90degLeft,
  Arrow90degRight,
  ArrowBarRight,
  ArrowDownCircle,
  ArrowRightCircle,
} from "react-bootstrap-icons";
import headerImg from "../assets/images/logo2.png";

import "./AboutBannerStyles.css";

export const AboutBanner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Academics", "Culture", "Brotherhood", "Service"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updateText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updateText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updateText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updateText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <div>
          <span className="tagline">About Us</span>
          <h1>
            {`La Unidad Latina`} <br />
            <span className="wrap">{text}</span>
          </h1>
          {/* <p>
                {" "}
                I'm a detail-oriented software engineer with a passion for
                front-end development and data analysis. I enjoy creating
                intuitive, effective digital solutions for complex problems,
                utilizing languages like JavaScript, React, Python, and various
                back-end technologies. Always excited for the next challenge, I
                am continuously improving my skills to stay on the cutting edge
                of technology. Feel free to browse my projects and get in touch!
              </p> */}
          <a className="contact-link" href="/contact">
            <button
              className="contact-button"
              onClick={() => console.log("connect")}
            >
              Contact Us <ArrowRightCircle size={25} />
            </button>
          </a>
        </div>
        {/* <img
          src={headerImg}
          alt="Header Img"
          className="about-banner-img"
          style={{ width: "400px", height: "auto" }}
        /> */}
      </Container>
    </section>
  );
};
