import { ListGroup, Card, Col, Row, Container } from "react-bootstrap";
import headshot from "../../assets/images/headshot.jpg";
import hermanosImage from "../../assets/images/hermanos.jpg";
import "./HermanosPageStyles.css";

export const HermanosPage = () => {
  const ALPHA = [
    {
      lineDesignation: "Alpha",
      lineName: "Las Nuevas Raízes Del Amanecer Dorado",
      season: "SPRING 2023",
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

  //create array lines that spreads each LINE (ALPHA, BETA)
  const lines = [...ALPHA, ...BETA];

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
        <Container fluid className="hero-section">
          <Row noGutters className="h-100">
            <Col md={6} className="definition-section">
              <div className="definition-content">
                <h1 className="main-title">Hermanos</h1>
                <p className="pronunciation">
                  <strong>/er-ma-nos/</strong>
                </p>
                <p className="definition">
                  Brothers in the Spanish language. La Unidad Latina’s greatest
                  strength is its Hermanos...
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

        {/* Undergraduate Section */}
        <h2 className="centered-title">Undergraduates</h2>
        <Row>
          {undergrads.map((undergrad, index) => (
            <Col xs={12} md={4} key={index}>
              <Card className="undergrad-card">
                <Card.Img variant="top" src={undergrad.src || headshot} />
                <Card.Body>
                  <Card.Title>
                    {undergrad.firstName} {undergrad.lastName}
                  </Card.Title>
                  <Card.Text className="join-date">
                    {undergrad.joinDate}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Hermano History Section */}
        <h2 className="history-title">Hermano History</h2>
        {lines.map((line, idx) => (
          <div key={idx} className="line-section">
            <h3>
              {line.lineName} - {line.season}
            </h3>
            <Row>
              {line.hermanos.map((hermano, hIdx) => (
                <Col xs={12} md={3} key={hIdx}>
                  <Card className="hermano-card">
                    <Card.Body>
                      <Card.Title>
                        {hermano.firstName} {hermano.lastName}
                      </Card.Title>
                      <Card.Text className="line-number">
                        {hermano.lineNumber}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        ))}
      </Container>
    </main>
  );
};
