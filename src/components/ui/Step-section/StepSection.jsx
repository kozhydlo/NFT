import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

import "./step-section.css";

const STEP__DATA = [
  {
    title: "My Inspirations",
    desc: "Each NFT in my collection is inspired by special moments, journeys and ideas that have become a part of my life",
    icon: "ri-layout-masonry-line",
  },

  {
    title: "Unique Techniques",
    desc: "From digital painting to 3D modeling, I use a variety of techniques to create unique and exciting NFTs",
    icon: "ri-image-line",
  },

  {
    title: "Exclusive Ownership",
    desc: "When you buy my NFT, you get not only the artwork, but exclusive ownership of it.",
    icon: "ri-list-check",
  },
];

const StepSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-4">
            <h3 className="step__title">About My NFTs</h3>
          </Col>

          {STEP__DATA.map((item, index) => (
            <Col lg="3" md="4" sm="6" key={index} className="mb-4">
              <div className="single__step__item">
                <span>
                  <i class={item.icon}></i>
                </span>
                <div className="step__item__content">
                  <h5>
                    <Link to="/">{item.title}</Link>
                  </h5>
                  <p className="mb-0">{item.desc}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default StepSection;
