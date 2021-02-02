import "./style.css";

//Grid Components
import Container from "../components/Grid/Container";
import Row from "../components/Grid/Row";
import Col from "../components/Grid/Col";

//Components
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContentBox from "../components/ContentBox";
import ContentBoxTop from "../components/ContentBoxTop";

const Home = (props) => {
    return (
        <div>
            <Header current={props.current}/>
            <ContentBoxTop id={"about-box"}>
                <Container>
                    <h1 className="section-heading">A<span className="smaller-text">BOUT</span></h1>
                    <hr className="orange-hr mb-5"/>
                    <Row>
                        <Col size="col-lg-6">
                            <div className="text-center">
                                <img id="bio-pic" src="assets/images/person-placeholder.jpg"/>
                            </div>
                        </Col>
                        <Col size="col-lg-6">
                            <p className="biobody mt-3 mt-lg-0">
                                My name is Matthew Palomo, and I can help your business
                                during this pandemic. 
                            </p>
                            <p className="biobody mt-3 mt-lg-0">
                                I am offering <span className="orange">free</span> consultation in   
                                these difficult times for companies looking to open/stay
                                open while keeping employees and customers safe, following 
                                Federal/State guidelines.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </ContentBoxTop>
            <ContentBox id={"credentials-box"}>
                <Container>
                    <h1 className="section-heading">
                        C<span className="smaller-text">REDENTIALS </span>
                        A<span className="smaller-text">ND </span>
                        O<span className="smaller-text">CCUPATIONS</span>
                    </h1>
                    <hr className="orange-hr mb-5"/>
                    <Row>
                        <Col className="col-12">
                            <ul className="bullet-list ml-md-5">
                                <li>
                                    <i class="far fa-check-square mr-1 mr-sm-2 mr-md-3 mr-lg-4 mr-xl-5"></i> Current Environmental Health and Safety Coordinator 
                                </li>
                                <li>
                                    <i class="far fa-check-square mr-1 mr-sm-2 mr-md-3 mr-lg-4 mr-xl-5"></i> Licensed Construction Health and Safety Technician (CHST)
                                </li>
                                <li>
                                    <i class="far fa-check-square mr-1 mr-sm-2 mr-md-3 mr-lg-4 mr-xl-5"></i> Former Wind Turbine Technician
                                </li>
                                <li>
                                    <i class="far fa-check-square mr-1 mr-sm-2 mr-md-3 mr-lg-4 mr-xl-5"></i> First Aid/CPR/AED Certified
                                </li>
                                <li>
                                    <i class="far fa-check-square mr-1 mr-sm-2 mr-md-3 mr-lg-4 mr-xl-5"></i> Bloodborne Pathogen Certified
                                </li>
                                <li>
                                    <i class="far fa-check-square mr-1 mr-sm-2 mr-md-3 mr-lg-4 mr-xl-5"></i> NFPA 70E Certification
                                </li>
                                <li>
                                    <i class="far fa-check-square mr-1 mr-sm-2 mr-md-3 mr-lg-4 mr-xl-5"></i> OSHA 10 &amp; 30 Certification
                                </li>
                                <li>
                                    <i class="far fa-check-square mr-1 mr-sm-2 mr-md-3 mr-lg-4 mr-xl-5"></i> <strong>HELPING PEOPLE</strong>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </ContentBox>
            <Footer/>
        </div>
    );
}

export default Home;