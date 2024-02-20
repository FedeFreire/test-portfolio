import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";

export const Projects = () => {
  
const projects = [
    {
      title: "Project 1",
      description: "Short description of project 1.",
      imgUrl: projImg1 ,
    },
    {
      title: "Project 2",
      description: "Short description of project 2.",
      imgUrl: projImg2,
    },
    {
      title: "Project 3",
      description: "Short description of project 3.",
      imgUrl: projImg3 ,
    },
    {
      title: "Project 4",
      description: "Short description of project 1.",
      imgUrl: projImg1 ,
    },
    {
      title: "Project 5",
      description: "Short description of project 2.",
      imgUrl:  projImg2 ,
    },
    {
      title: "Project 6",
      description: "Short description of project 3.",
      imgUrl:  projImg3 ,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              euismod, quam ut aliquet tincidunt, mauris nunc tincidunt nunc,
              nec aliquam nisl nunc id nunc. Nulla facilisi. Nullam auctor, nunc
              id aliquam tincidunt, mauris sem lacinia mauris, id tincidunt nunc
              nunc ac nunc. Sed euismod, quam ut aliquet tincidunt, mauris nunc
              tincidunt nunc, nec aliquam nisl nunc id nunc. Nulla facilisi.
              Nullam auctor, nunc id aliquam tincidunt, mauris sem lacinia
              mauris, id tincidunt nunc nunc ac nunc.
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab 3</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                   {
                        projects.map((project, index) => {
                        return (
                            <ProjectCard
                            key={index}
                            {...project}
                            />
                        );
                        })
                   }
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  Loren Ipsum
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  Loren Ipsum
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  );
};
