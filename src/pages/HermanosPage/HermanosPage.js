import Figure from 'react-bootstrap/Figure';
import headshot from '../../assets/images/headshot.jpg'
import { Col, Row, Container } from 'react-bootstrap';

export const HermanosPage = () => {
    return (
        <main>
            <h1>Hermanos Page</h1>
            <div className="undergrads-section">
                <h2>Undergraduate Hermanos</h2>
                <Container>
                <Row>
                    <Col>
                        <Figure>
                            <Figure.Image
                                width={171}
                                height={180}
                                alt="171x180"
                                src={headshot}
                            />
                            <Figure.Caption>
                                Nulla vitae elit libero, a pharetra augue mollis interdum.
                            </Figure.Caption>
                        </Figure>
                    </Col>
                    <Col>
                        <Figure>
                            <Figure.Image
                                width={171}
                                height={180}
                                alt="171x180"
                                src={headshot}
                            />
                            <Figure.Caption>
                                Nulla vitae elit libero, a pharetra augue mollis interdum.
                            </Figure.Caption>
                        </Figure>
                    </Col>
                    <Col>
                        <Figure>
                            <Figure.Image
                                width={171}
                                height={180}
                                alt="171x180"
                                src={headshot}
                            />
                            <Figure.Caption>
                                Nulla vitae elit libero, a pharetra augue mollis interdum.
                            </Figure.Caption>
                        </Figure>
                    </Col>
                </Row>
                </Container>
            </div>
            <div className="members-section">
                <h2>Chapter Members</h2>
                <h3>Alpha Line</h3>
                    <ul>
                        <p>Carlos Gomez Guzman</p>
                        <p>Rene Emanuel Calzadilla</p>
                        <p>Carlos Steven Martinez</p>
                        <p>Douglas Alberto Moreno</p>
                        <p>Alejandro Salas-Villa</p>
                        <p>Carlos Lionel Torres</p>
                        <p>Rogelio Ambriz</p>
                        <p>Abraham Josue Martinez</p>
                        <p>Daniel Alvarado</p>
                        <p>Marcelooooooo</p>
                    </ul>
                <h3>Beta Line</h3>
                    <ul>
                        <p>Lefter</p>
                        <p>Javier</p>
                        <p>Assael</p>
                        <p>Jonathan</p>
                        <p>Manuel</p>
                        <p>Luis</p>
                    </ul>
            </div>
        </main>
    )
}

/*
TODO:

-use premade components like maybe React-Bootstrap's Figure component or something to dynamically display a list of active members. Maybe I can have it loop through a dictionary, array, obj. of members
- I would probably need to put these into grid components as well.


-Implement Grid system
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AutoLayoutExample() {
  return (
    <Container>
      <Row>
        <Col>1 of 2</Col>
        <Col>2 of 2</Col>
      </Row>
      <Row>
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
    </Container>
  );
}

export default AutoLayoutExample;
*/