import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Harini N </span>
            from <span className="purple"> Chennai, India.</span>
            <br />
            I am currently pursuing my final year B.TECH IT.
            <br />
            Passionate about converging technology and creativity, I aim to contribute my skills in Full
            Stack Web Development and UI/UX Design to create cutting-edge solutions. 
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Harini N</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
