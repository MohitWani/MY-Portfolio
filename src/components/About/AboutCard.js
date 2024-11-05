import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mohit Wani </span>
            from <span className="purple"> Pune, India.</span>
            <br />
            <br />
            I have work experience as a AI Engineer at Rudra Research and Analytics and Machine Learning Engineer at Feynn Labs.
            <br />
            I am also part of 2022-23 Google Developers Student Club as Machine Learning Lead.
            <br />
            I have completed Bachelor's of Engineering in Artificial Intelligence and Data Science at AISSMS Institute of Information Technology,
            Pune.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Research Papers.
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Create a Products for making World as better place!"{" "}
          </p>
          <footer className="blockquote-footer">Mohit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
