import React from 'react';
import './Home.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

export default function Home() {
  return (
    <Container className='hero'>
      <h1 className='hero-text'>Everyone deserves reliable transportation</h1>
      <p>
        <Button className='border border-white border-2' href='/shops' Style='primary' size='lg'>
          Find yourself a bike!
        </Button>
      </p>
    </Container>
  );
}

Home.propTypes = {};
