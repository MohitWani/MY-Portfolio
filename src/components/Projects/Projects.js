import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="ScholarQuery"
              description="ScholarQuery is solution for college students to get quick, accurate summaries and information from research papers, 
              significantly reducing the time required for literature review and it Leverage Advance Retrieval Augmented Generation (RAG)."
              ghLink="https://github.com/MohitWani/ScholarQuery"
              demoLink="https://github.com/MohitWani/ScholarQuery"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Q&A Evaluation Chat Bot."
              description="This was my first project created for my client to increase it's user experience and reduce the cost of Non-teching staff."
              ghLink="https://github.com/MohitWani/Q-A-Evaluation-Chat-Bot."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Fault Detection in VSI."
              description="This project is created to reduce the maintance cost and time of industrial VSI(Voltage Source Inverter). This is research based project and it is created under DR.R.B.Dhumale."
              ghLink="https://github.com/MohitWani/3-Phase-VSI-Fault-Detection"          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Diabetic Retinopathy Detection."
              description="This project detect a condition which happend because of Diabetes and a eye ball. Using this application can reduce the cost of testing Diabetic retinopathy condition."
              ghLink="https://github.com/MohitWani/Diabetic-Retinopathy-Detection"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
