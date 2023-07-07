import { Container, Row, Col, Button } from 'react-bootstrap';
import heroImg from '../../assets/images/hero.jpg';
import './LandingPageStyles.css';

export const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="hero-section">
        <img src={heroImg} alt="HeroImg" className="hero-image" />
      </div>
      <Container>
        <Row>
          <Col className='hero-text'>
            <h1 className="hero-title">Beta Psi Chapter</h1>
            <h2 className="hero-subtitle">The University of California, Los Angeles</h2>
            <p className="hero-description">Est. 2021</p>
            <Button className="hero-button" variant="primary" size="lg">Learn More</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

