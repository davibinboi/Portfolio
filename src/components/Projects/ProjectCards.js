import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsYoutube } from "react-icons/bs";

function ProjectCards(props) {
  // Detect "Services Used" section inside description
  const renderDescription = () => {
    const text = props.description;

    const match = text.match(
      /(Google Cloud Platform Services Used:|AWS Services Used:)/
    );

    if (!match) {
      return <div style={{ whiteSpace: "pre-line" }}>{text}</div>;
    }

    const index = match.index;
    const bullets = text.slice(0, index).trim();
    const servicesTitle = match[0];
    const servicesList = text.slice(index + servicesTitle.length).trim();

    return (
      <>
        {/* Regular bullet points */}
        <div style={{ whiteSpace: "pre-line" }}>{bullets}</div>

        {/* Services Box */}
        <div className="services-box">
          <div className="services-title">{servicesTitle}</div>
          {servicesList}
        </div>
      </>
    );
  };

  return (
    <Card
      className="project-card-view"
      style={{
        paddingTop: "15px",
        paddingBottom: "15px",
        paddingLeft: "50px",
        paddingRight: "50px",
      }}
    >
      {/* Optional image */}
      {props.imgPath && (
        <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      )}

      <Card.Body>
        <Card.Title
          style={{
            whiteSpace: "pre-line",
            textAlign: "left",
            lineHeight: "1.8rem",
          }}
        >
          {props.title}
        </Card.Title>
        
        {/* Date */}
        {props.date && (
          <div
            style={{
              fontSize: "0.9rem",
              color: "#eee4e4ff",
              marginBottom: "10px",
              textAlign: "left",
            }}
          >
            {props.date}
          </div>
        )}

        <Card.Text style={{ textAlign: "left", lineHeight: "1.8rem" }}>
          {renderDescription()}
        </Card.Text>

        {/* GitHub / Learn More button */}
        {props.ghLink && (
          <Button variant="primary" href={props.ghLink} target="_blank">
            {props.isBlog ? "Blog" : "Learn More"}
          </Button>
        )}

        {/* Demo button */}
        {props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: props.ghLink ? "10px" : "0px" }}
          >
            <CgWebsite /> &nbsp; Demo
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
