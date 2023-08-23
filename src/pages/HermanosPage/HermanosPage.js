import { ListGroup, Card, Col, Row, Container } from "react-bootstrap";
import headshot from "../../assets/images/headshot.jpg";
import hermanosImage from "../../assets/images/hermanos.jpg";
import "./HermanosPageStyles.css";
import alphaImg from "../../assets/images/Alpha.png";
import betaImg from "../../assets/images/Beta.png";

const ALPHA = [
  {
    lineDesignation: "Alpha",
    lineName: "Las Nuevas Raízes Del Amanecer Dorado",
    season: "SPRING 2023",
    shieldImg: alphaImg,
    hermanos: [
      {
        firstName: "Carlos",
        lastName: "Gomez",
        hermanoName: "Gomezki",
        lineNumber: 1,
        undergraduate: false,
      },
      {
        firstName: "Rene",
        lastName: "Calzadilla",
        hermanoName: "Gomezki",
        lineNumber: 2,
        undergraduate: false,
      },
      {
        firstName: "Carlos",
        lastName: "Martinez",
        hermanoName: "Sagaz",
        lineNumber: 3,
        undergraduate: false,
      },
      {
        firstName: "Carlos",
        lastName: "Gomez",
        hermanoName: "Gomezki",
        lineNumber: 4,
        undergraduate: false,
      },
      {
        firstName: "Carlos",
        lastName: "Gomez",
        hermanoName: "Gomezki",
        lineNumber: 5,
        undergraduate: false,
      },
      {
        firstName: "Carlos",
        lastName: "Gomez",
        hermanoName: "Gomezki",
        lineNumber: 6,
        undergraduate: false,
      },
      {
        firstName: "Carlos",
        lastName: "Gomez",
        hermanoName: "Gomezki",
        lineNumber: 7,
        undergraduate: false,
      },
      {
        firstName: "Carlos",
        lastName: "Gomez",
        hermanoName: "Gomezki",
        lineNumber: 8,
        undergraduate: false,
      },
      {
        firstName: "Carlos",
        lastName: "Gomez",
        hermanoName: "Gomezki",
        lineNumber: 9,
        undergraduate: false,
      },
      {
        firstName: "Carlos",
        lastName: "Gomez",
        hermanoName: "Gomezki",
        lineNumber: 10,
        undergraduate: false,
      },
    ],
  },
];
const BETA = [
  {
    lineDesignation: "Beta",
    lineName: "THE COOLEST BOYS ON THE BLOCK",
    season: "SPRING 2023",
    shieldImg: betaImg,
    hermanos: [
      {
        firstName: "Lefter",
        lastName: "Mendoza",
        hermanoName: "Gomezki",
        lineNumber: 1,
        undergraduate: false,
      },
      {
        firstName: "Javier",
        lastName: "Jauregui",
        hermanoName: "Inactivo",
        lineNumber: 2,
        undergraduate: true,
        src: headshot,
      },
      {
        firstName: "Assael",
        lastName: "Mendez",
        hermanoName: "Gomezki",
        lineNumber: 3,
        undergraduate: true,
        src: headshot,
      },
      {
        firstName: "Jonathan",
        lastName: "Teach",
        hermanoName: "Gomezki",
        lineNumber: 4,
        undergraduate: false,
      },
      {
        firstName: "Manuel",
        lastName: "Gutierrez",
        hermanoName: "Gomezki",
        lineNumber: 5,
        undergraduate: false,
      },
      {
        firstName: "Luis",
        lastName: "Dripperton",
        hermanoName: "BigHead",
        lineNumber: 6,
        undergraduate: true,
        src: headshot,
      },
    ],
  },
];

const lines = [...ALPHA, ...BETA];

const HermanosGrid = ({ hermanos }) => (
  <Row className="mb-5">
    {hermanos.map((hermano, index) => (
      <Col key={index} md={4} className="text-center">
        <div className="undergrad-container">
          <div className="undergrad-circle">
            <img
              src={hermano.src || headshot}
              alt={`${hermano.firstName} ${hermano.lastName}`}
              className="img-fluid"
            />
          </div>
          <div className="undergrad-info">
            <div className="undergrad-name">
              {`${hermano.firstName} ${hermano.lastName}`}
            </div>
            <div className="join-date">{hermano.joinDate}</div>
          </div>
        </div>
      </Col>
    ))}
  </Row>
);

export const HermanosPage = () => {
  const undergrads = lines.flatMap((line) =>
    line.hermanos
      .filter((hermano) => hermano.undergraduate)
      .map((hermano) => ({
        ...hermano,
        joinDate: line.season,
      }))
  );

  return (
    <main>
      <Container>
        {/* Hero Section */}
        <section>
          <Container fluid className="hero-section">
            <Row noGutters className="h-100">
              <Col md={6} className="definition-section">
                <div className="definition-content">
                  <h1 className="main-title">Hermanos</h1>
                  <p className="pronunciation">
                    <strong>/er-ma-nos/</strong>
                  </p>
                  <p className="definition">
                    Spanish term for <strong>Brother</strong>. La Unidad
                    Latina’s greatest strength is its Hermanos. Hermanos serve
                    as a beacon of <strong>academic</strong>,{" "}
                    <strong>social</strong>, and{" "}
                    <strong>professional excellence</strong> on campus. Bound by
                    shared values that drive mentorship and support across
                    generations, chapters, and regions. Our brotherhood
                    leverages its collective resources and network to{" "}
                    <strong>thrive in competitive spaces</strong>, be it
                    academia, community service, or professional .
                  </p>
                </div>
              </Col>
              <Col md={6} className="image-section">
                <img
                  className="hero-image"
                  src={hermanosImage}
                  alt="Group Picture"
                />
              </Col>
            </Row>
          </Container>
        </section>

        {/* Undergraduate Section */}
        <section>
          <h2 className="centered-title">Undergraduates</h2>
          <HermanosGrid hermanos={undergrads} />
        </section>

        {/* Hermano History Section */}
        <section>
          <h2 className="history-title">Hermano History</h2>
          {lines.map((line, idx) => (
            <div key={idx} className="line-section">
              <div className="line-header">
                <img
                  src={line.shieldImg}
                  alt={`${line.lineDesignation} Shield`}
                  className="shield-img"
                />
                <div className="line-title-section">
                  <h3 className="line-title">
                    {line.lineDesignation} | {line.season}
                  </h3>
                  <p className="line-name">"{line.lineName}"</p>
                </div>
              </div>
              <ul className="hermano-list">
                {line.hermanos.map((hermano, hIdx) => (
                  <li key={hIdx}>
                    {hIdx + 1}. {hermano.firstName} {hermano.lastName}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      </Container>
    </main>
  );
};
