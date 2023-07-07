import Button from 'react-bootstrap/Button';

export const HeroButton = () => {
  return (
    <>
      <div className="mb-2">
        <Button className='hero-button' variant="primary" size="lg">
          About Us
        </Button>{' '}
      </div>
    </>
  );
}
