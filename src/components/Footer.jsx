import { Col, Container, Row } from "react-bootstrap";
import logo2 from '../assets/img/logo2.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';


export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="aling-item-center">
                    <Col sm={6}>
                        <img src={logo2} alt="logo" className="logoFCU" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/federico-castro-ubeda-51388a15b/?locale=en_US" target="_blank" rel="noreferrer"><img src={navIcon1} alt="img" /></a>
                            <a href="https://github.com/FedericoCU" target="_blank" rel="noreferrer"><img src={navIcon2} alt="img" /></a>
                        </div>
                        <p>Copyright 2023. All rights reserverd by FCU.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
