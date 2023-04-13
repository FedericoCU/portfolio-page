import { Container, Row, Col, Tab, Nav, TabContainer } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from '../assets/img/color-sharp2.png';
import projImg1 from '../assets/img/project-img1.png';
import projImg2 from '../assets/img/project-img2.png';
import projImg3 from '../assets/img/project-img3.png';


export const Projects = () => {

    const projects = [
        {
            title: "Gym website",
            description: "Design & Development",
            imgUrl: projImg1,
            link: "https://federicocu.github.io/gym-web/"
        },
        {
            title: "Cocktail DB website",
            description: "Design & Development",
            imgUrl: projImg2,
            link: "https://federicocu.github.io/cocktail-db/"
        },
        {
            title: "Video platform website",
            description: "Design & Development",
            imgUrl: projImg3,
            link: "https://federicocu.github.io/Video-app-page/"
        }
    ];


    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Explore my portfolio of web development projects!
                            with a focus on user experience and a
                            commitment to clean, scalable code, I work closely with
                            my clients to bring their vision to life. Browse my
                            projects below to see how I've helped other businesses
                            and individuals achieve their web development goals, and
                            let's work together to make your next project a success!
                        </p>
                        <TabContainer id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
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
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second" >Coming soon...</Tab.Pane>
                                <Tab.Pane eventKey="third" >Coming soon...</Tab.Pane>
                            </Tab.Content>
                        </TabContainer>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="img" />
        </section>
    )
}
