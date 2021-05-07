import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../Styles/Home.scss';

export default function Home() {
  return(
    <>
      <div className='background background--color-map'>
        <Container className='body-container'>
          <h1 className='fade-in'>Welcome</h1>
          <Button className='background--color-map mt-5 text-color' variant='outline-dark' size='lg'>Browse Layouts</Button>
        </Container>
      </div>
    </>
  )
}
