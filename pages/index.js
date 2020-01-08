import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Container, Row, Col, Card, CardBody, Button } from "reactstrap";

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Container>
      <Row className="align-items-center my-5">
        <Col lg={7}>
          <img
            className="img-fluid rounded mb-4 mb-lg-0"
            src="/prmlogo.png"
            alt="Penny-riot Mage"
          />
        </Col>
        <Col lg={5}>
          <h1 className="font-weight-light">Ego Entry In Map</h1>
          <p>Desire to feel less outside your head?</p>
          <p>Enter! Enter here instead!</p>
          <p>Step inside mine, it's dead.</p>
          <p>Inner sanctum, creating soul bread.</p>
          <p>Re-imagine the time as a thread.</p>
          <p>Ever be aloof, there be landmines, careful in your stead.</p>
          <Link href="/poems">
            <a className="btn btn-primary">More Poetry!</a>
          </Link>
        </Col>
      </Row>

      <Card className="text-white bg-secondary my-5 py-4 text-center">
        <CardBody>
          <p className="text-white m-0">
            This site is a work in progress! Just like my ego.
          </p>
        </CardBody>
      </Card>
    </Container>
  </div>
);

export default Home;
