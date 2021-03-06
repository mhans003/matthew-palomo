import "./style.css";
import { Link } from "react-router-dom";

//Grid Components
import Container from "../components/Grid/Container";
import Row from "../components/Grid/Row";
import Col from "../components/Grid/Col";

//Components
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContentBox from "../components/ContentBox";

const Covid19 = (props) => {
    return (
        <div>
            <Header current={props.current}/>
            <ContentBox id={"covid19-box"}>
                <Container>
                    <h1 className="section-heading">COVID-19</h1>
                    <hr className="orange-hr mb-5"/>
                    <Row>
                        <Col size="col-lg-12">
                            <div className="text-center">
                                <h3 className="orange mb-4 mt-4 mt-lg-0">Not Sure What To Do?</h3>
                            </div>
                            <p className="biobody mt-3 mt-lg-0">
                                <strong><i>It's OK</i></strong>. These are uncharted waters for everyone. I can 
                                help ease the pressure by explaining complicated guidelines
                                in terms employers and employees can easily follow.
                            </p>
                            <p className="biobody mt-3 mt-lg-0">
                                All advice and suggestions are <span className="orange">100% free</span>!
                                I am hoping to serve my community with my current skillsets, and I am more 
                                than happy to lend a helping hand with confusing procedures for staying open
                                and thriving in a pandemic state.
                            </p>
                            <div className="text-center">
                                <h3 className="orange mb-4 mt-4 mt-lg-0">
                                    S<span className="smaller-text">ERVICES</span>
                                </h3>
                            </div>
                            <ul className="bullet-list ml-md-5">
                                <li>
                                    <i class="far fa-check-square mr-1 mr-sm-2 mr-md-3 mr-lg-4 mr-xl-5"></i> Pandemic Response Plan Implementation
                                </li>
                                <li>
                                    <i class="far fa-check-square mr-1 mr-sm-2 mr-md-3 mr-lg-4 mr-xl-5"></i> Hazard Risk Assessment(s)
                                </li>
                                <li>
                                    <i class="far fa-check-square mr-1 mr-sm-2 mr-md-3 mr-lg-4 mr-xl-5"></i> Site Walkthrough
                                </li>
                                <li>
                                    <i class="far fa-check-square mr-1 mr-sm-2 mr-md-3 mr-lg-4 mr-xl-5"></i> Mitigation Strategies
                                </li>
                                <li>
                                    <i class="far fa-check-square mr-1 mr-sm-2 mr-md-3 mr-lg-4 mr-xl-5"></i> Training
                                </li>
                                <li>
                                    <i class="far fa-check-square mr-1 mr-sm-2 mr-md-3 mr-lg-4 mr-xl-5"></i> PPE Supply Recommendations
                                </li>
                            </ul>
                        </Col>
                    </Row>
                    <hr className="orange-hr"/>
                    <Link to="/contact">
                        <h5 className="contact-me orange mt-4 text-center">
                            Contact Me Today!
                        </h5>
                    </Link>
                </Container>
            </ContentBox>
            <Footer/>
        </div>
    );
}

export default Covid19;