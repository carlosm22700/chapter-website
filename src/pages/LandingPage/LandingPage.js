import { Container, Row, Col, Button } from 'react-bootstrap';
import heroImg from '../../assets/images/hero.jpg';
import logo from '../../assets/images/logo.png';
import logo2 from '../../assets/images/logo2.png';
import logo3 from '../../assets/images/logo3.png';
import clogo from '../../assets/images/clogo.png';
import clogo2 from '../../assets/images/clogo2.png';
import clogo3 from '../../assets/images/clogo3.png';
import './LandingPageStyles.css';

export const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="hero-section">
        <img src={heroImg} alt="HeroImg" className="hero-image" />
        <Container>
          <Row className='justify-content-center'>
            <Col xs={12} className='logo-container'>
              <img className="logo-image" src={clogo} alt='La Unidad Latina Logo'/>
            </Col>
          </Row>
        </Container>
      </div>
      <Container className="details-section">
        <Row className='justify-content-center'>
          <Col xs={10} md={8}>
            <h1 className="hero-title">Beta Psi Chapter</h1>
            <h2 className="details-title">The University of California, Los Angeles</h2>
            <p className="details-description">Est. 2021</p>
            <Button className="details-button" variant="primary" size="lg">Learn More</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};