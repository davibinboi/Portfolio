import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />

      <Container>
        {/* ------------------------- MAIN HEADER ------------------------- */}
        <h1 className="project-heading">
          My <strong className="purple">Experience</strong> & Projects
        </h1>

        {/* ----------------------- PROJECTS / LEADERSHIP ----------------------- */}
        <h2 className="project-subheading" style={{ marginTop: 30 }}>
          <strong className="purple">Projects / Leadership</strong>
        </h2>

        <Row style={{ justifyContent: "center" }}>
          {/* ---------------------- THERAPUTE ---------------------- */}
          <Col md={8} className="project-card">
            <ProjectCard
              title={
                <>
                  Therapute — International Top 10, Google Student <br />
                  Developer Challenge
                </>
              }
              date="Jan 2024 – Present"
              description={`
                • Built MERN app for real-time pose correction during at-home physical therapy exercises.
• Leveraged dynamic time warping and static vector analysis to compare exercise form; applied Neural Radiance fields to tailor pose correction by adapting ideal form to the user’s body type.
• Designed therapist dashboard to review LLM-generated exercise summaries, assess patient videos,leave feedback, and assign personalized exercises between sessions using captured metrics.

Google Cloud Platform Services Used:
Cloud Run, Firebase, MediaPipe, Artifact Registry,
Secret Manager, Gemini`}
              imgPath={null}
              ghLink="https://www.youtube.com/watch?v=vTc8DXPVvUc"
            />
          </Col>

          {/* ---------------------- VIGILAI ---------------------- */}
          <Col md={8} className="project-card" style={{ marginBottom: 20 }}>
            <ProjectCard
              title="VigilAI — AI-Assisted Police Report Generation"
              date="Jan 2024 – May 2025"
              description={`• Built AI pipeline to analyze police bodycam footage and auto-generate incident reports.
• Demoed product to police departments across the U.S. to validate workflows.
• Raised $150K pre-seed funding led by Fusen World Ventures.

AWS Services Used:
AWS GovCloud, SageMaker, Textract, Rekognition,
Lambda, DynamoDB, API Gateway`}
              imgPath={null}
              ghLink="https://vigilai.co/"
            />
          </Col>
        </Row>

        {/* --------------------------- EXPERIENCE --------------------------- */}
        <h2 className="project-subheading" style={{ marginTop: 50 }}>
          <strong className="purple">Experience</strong>
        </h2>

        <Row style={{ justifyContent: "center" }}>
          {/* ---------------------- Home Depot ---------------------- */}
          <Col md={8} className="project-card">
            <ProjectCard
              title="Machine Learning Intern — The Home Depot"
              date="Aug – Dec 2025"
              description={`• Constructed large-scale weighted product graph and trained HeteroSAGE Graph Neural Network with custom message-sharing layer; applied postprocessing filters to generate product-bundling recommendations on HomeDepot.com.
• Added Sentence-Transformer text embeddings to enrich vertex features.
• Integrated model as sub-agent using GCP Agent Development Kit.

Google Cloud Platform Services Used:
Agent Develpoment Kit, BigQuery, Cloud Storage
`}
              imgPath={null}
            />
          </Col>

          {/* ---------------------- MATHWORKS ---------------------- */}
          <Col md={8} className="project-card">
            <ProjectCard
              title="Software Engineer Intern — MathWorks"
              date="May – Aug 2025"
              description={`• Optimized Computational Finance testbed using weighted decision trees (30% cost reduction).
• Analyzed distribution patterns using violin/KDE plots to guide normalization.
• Iteratively refined model with Quality Engineering team feedback.`}
              imgPath={null}
            />
          </Col>

          {/* ---------------------- THE HOME DEPOT (SPRING 2025) ---------------------- */}
          <Col md={8} className="project-card">
            <ProjectCard
              title="Software Engineer Intern — The Home Depot"
              date="Jan – May 2025"
              description={`• Built graph-based collaborative filtering model for HomeDepot.com recommendations; deployed as a Cloud Run API.
• Prototyped Chrome extension to compare performance vs legacy models.
• Halved storage by flattening graph into Redis-based NoSQL tables.

Google Cloud Platform Services Used:
Vertex AI, BigQuery, Cloud Storage`}
              imgPath={null}
            />
          </Col>

          {/* ---------------------- THE HOME DEPOT (FALL 2024) ---------------------- */}
          <Col md={8} className="project-card">
            <ProjectCard
              title="Data Science Intern — The Home Depot"
              date="Aug – Dec 2024"
              description={`• Optimized Next Bay Cloud SQL selection logic; doubled forecasting accuracy.
• Trained ARIMA, SARIMAX & DeepAR models with BigQuery feature pipelines.
• Deployed DeepAR LSTM model to Vertex AI (400% accuracy improvement).

Google Cloud Platform Services Used:
Vertex AI, BigQuery, Cloud Storage, Cloud SQL`}
              imgPath={null}
            />
          </Col>

          {/* ---------------------- MFACTOR CONSULTANCY ---------------------- */}
          <Col md={8} className="project-card">
            <ProjectCard
              title="Software Engineer Intern — MFactor Consultancy"
              date="May – Aug 2024"
              description={`• Authored 20-page comparative report on 8 dashboard frameworks and 4 libraries.
• Built React + D3.js signal visualization dashboard using S3/PostgreSQL/Cognito.
• Shipped BI dashboard saving 20 hours/week in sales workflow.

AWS Services Used:
S3, Cognito, RDS (PostgreSQL), Amplify`}
              imgPath={null}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
