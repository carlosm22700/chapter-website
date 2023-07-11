import { ListGroup, Card } from "react-bootstrap";
import headshot from "../../assets/images/headshot.jpg";
import { Col, Row, Container } from "react-bootstrap";
import "./HermanosPageStyles.css";

export const HermanosPage = () => {
  const members = [
    {
      lineName: "Alpha Line",
      members: [
        "Lorem Ipsum",
        "Lorem Ipsum",
        // Add more names here.
      ],
    },
    {
      lineName: "Beta Line",
      members: [
        "Lorem Ipsum",
        "Lorem Ipsum",
        // Add more names here.
      ],
    },
    // Add more lines here.
  ];

  const undergrads = [
    {
      src: headshot,
      caption: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      src: headshot,
      caption: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      src: headshot,
      caption: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
  ];
  return (
    <main>
      <Container>
        <h1>Hermanos Page</h1>
        <div className="undergrads-section">
          <h2>Undergraduate Hermanos</h2>
          <Row>
            {undergrads.map((undergrad, index) => (
              <Col key={index}>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={undergrad.src} />
                  <Card.Body>
                    <Card.Text>{undergrad.caption}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
        <h2>Member History</h2>
        {members.map((line, index) => (
          <div className="members-section" key={index}>
            <h3>{line.lineName}</h3>
            <ListGroup>
              {line.members.map((member, index) => (
                <ListGroup.Item key={index}>{member}</ListGroup.Item>
              ))}
            </ListGroup>
          </div>
        ))}
      </Container>
    </main>
  );
};
