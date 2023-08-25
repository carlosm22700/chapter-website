import { AboutBanner } from "../../components/AboutBanner";
import "./AboutPageStyles.css";

export const AboutPage = () => {
  return (
    <div>
      <section className="hero">
        <AboutBanner />
      </section>

      <section className="about-story">
        <h2 className="story-title">Our Story</h2>
        <h2>The Birth of a Legacy: La Unidad Latina</h2>
        <p>
          In the snow-covered grounds of Ithaca, New York, a transformative idea
          took root. On Februaty 19, 1982, within the halls of Cornell
          University, La Unidad Latina, Lambda Upsilon Lambda Fraternity, Inc.
          came into existence. It's inception was not an accient; it was a
          calculated answer to a void—a need for representation and advocacy for
          Latino students in higher education.
        </p>
        <h2>A New Horizon: Beta Psi at UCLA</h2>
        <p>
          At the University of California, Los Angeles, where Latinos constitue
          less than 30% of the student body, the need for empowering communities
          and creating inclusive environments has never been more critical.
          Thus, in the Summer of 2018, like-minded individuals embarked on a
          journey. Their mission was to reach out to Latino males on campus,
          igniting conversations, sparking friendships, and most importantly,
          identifying allies. The notion to establish a chapter of La Unidad
          Latina, Lambda Upsilon Lambda Fraternity, Inc. at UCLA was fueld by
          more than ambition. It was propelled by the ongoing challenges and
          aspirations of Latino students on campus. After years of unwavering
          dedication, on May 9th, 2021, the Beta Psi chapter of La Unidad
          Latina, Lambda Upsilon Lambda Fraternity, Inc. was officially founded
          at UCLA. Ten pioneering Hermanos, driven by vision and guided by
          fraternity's legacy, made this aspiration a living reality.
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
