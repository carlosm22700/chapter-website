import { AboutBanner } from "../../components/AboutBanner";
import "./AboutPageStyles.css";

export const AboutPage = () => {
  return (
    <div>
      <section className="hero">
        <AboutBanner />
      </section>

      <section className="about-story">
        <h2>Our Story</h2>
        <p>
          {/* Brief narrative about the organization's history and mission */}
        </p>
      </section>

      <section className="facts-milestones">
        <h2>Quick Facts & Milestones</h2>
        {/* List of key details, achievements, and notable milestones */}
      </section>

      <section className="pillars-values">
        <h2>Our Core Values</h2>
        {/* Detailed information on the organization's core principles, values, or initiatives */}
      </section>

      <section className="awards-recognitions">
        <h2>Awards & Recognitions</h2>
        {/* List of awards and accolades received by the organization */}
      </section>

      <section className="founding-history">
        <h2>Founding History</h2>
        <p>
          {/* Detailed story on the establishment and foundation of the organization */}
        </p>
      </section>

      <section className="faq">
        <h2>Frequently Asked Questions</h2>
        {/* List of questions and answers, possibly in an accordion format */}
      </section>
    </div>
  );
};
