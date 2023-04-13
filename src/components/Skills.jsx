import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import html from '../assets/img/html-icon.svg';
import css from '../assets/img/css-icon.svg';
import js from '../assets/img/javascript-icon.svg';
import typescript from '../assets/img/typescript-icon.svg';
import react from '../assets/img/react-icon.svg';
import angular from '../assets/img/angular-icon.svg';
import java from '../assets/img/java-icon.svg';
import python from '../assets/img/python-icon.svg';
import nodeJS from '../assets/img/nodejs-icon.svg';
import github from '../assets/img/github-icon.svg';
import linux from '../assets/img/linux-icon.svg';
import colorSharp from '../assets/img/color-sharp.png';


export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Skills</h2>
                            <p>Below you'll find a selection of icons representing my core skillset.
                                Each icon corresponds to a skill that I've honed through experience and practice.
                                From programming languages to front-end frameworks and back-end tools, these are
                                the technologies I use to create dynamic, user-friendly web applications.
                            </p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <img src={html} alt="html" />
                                </div>
                                <div className="item">
                                    <img src={css} alt="css" />
                                </div>
                                <div className="item">
                                    <img src={js} alt="js" />
                                </div>
                                <div className="item">
                                    <img src={typescript} alt="typescript" />
                                </div>
                                <div className="item">
                                    <img src={react} alt="react" />
                                </div>
                                <div className="item">
                                    <img src={angular} alt="angular" />
                                </div>
                                <div className="item">
                                    <img src={java} alt="java" />
                                </div>
                                <div className="item">
                                    <img src={python} alt="python" />
                                </div>
                                <div className="item">
                                    <img src={nodeJS} alt="nodeJS" />
                                </div>
                                <div className="item">
                                    <img src={github} alt="git" />
                                </div>
                                <div className="item">
                                    <img src={linux} alt="linux" />
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="Image" />
        </section>
    )
}
