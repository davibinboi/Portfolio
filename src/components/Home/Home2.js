import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import mystuff from "../../Assets/headshot-modified.png";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              A Little <span className="purple"> About </span> Me
            </h1>
            <p className="home-about-body" style={{ lineHeight: "1.8" }}>
              Hi! I’m Shrikar Seshadri, a junior Computer Science major at{" "}
              <b className="purple">{" Georgia Tech "}</b> with a 4.0 GPA.
              Here’s more about me:
              <br />
              <br />
              <ul className="home-about-bullets">
                <li>
                  <b className="purple">{" International Top 10 "}</b>
                  in the 2024 <b className="purple">{" Google Student Developer Challenge "}</b> as the only
                  team from North America.
                </li>

                <li>
                  Previously cofounder of VigilTech, an{" "}
                  <b className="purple">{" AI startup "}</b>
                  that auto-drafted incident reports from police bodycam
                  footage. Raised
                  <b className="purple">{" $150K "}</b> in pre-seed funding.
                </li>

                <li>
                  Previous SWE Intern at
                  <b className="purple">{" MathWorks "}</b>: optimized
                  Computational Finance testbeds with weighted decision trees,
                  reducing costs by
                  <b className="purple">{" 30% "}</b>.
                </li>

                <li>
                  Previous SWE Intern at
                  <b className="purple">{" The Home Depot "}</b>:
                  <ul>
                    <li>
                      built and deployed{" "}
                      <b className="purple">{" Graph Neural Network "}</b>
                      based agent using GCP Agent Development Kit
                    </li>
                    <li>
                      built{" "}
                      <b className="purple">
                        {" graph-based recommendation algorithms "}
                      </b>
                    </li>
                    <li>
                      deployed <b className="purple">{" deep learning "}</b>{" "}
                      models on Vertex AI, boosting accuracy by{" "}
                      <b className="purple">{" 400% "}</b> while cutting costs
                      <b className="purple">{" 30% "}</b>
                    </li>
                  </ul>
                </li>
              </ul>
              <br />
              I’m proficient in
              <i>
                <b className="purple">
                  {" "}
                  Python, Java, JavaScript/TypeScript, C/C++, SQL, and Node.js{" "}
                </b>
              </i>
              — and I enjoy working across backend, ML pipelines, and
              interactive frontends.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              {/* <img src={myImg} className="img-fluid" alt="avatar" /> */}
              <img
                src={mystuff}
                className="img-fluid"
                alt="avatar"
                style={{ width: "15rem", height: "auto"}}
              />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
