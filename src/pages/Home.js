import "./style.css";

//Grid Components
import Container from "../components/Grid/Container";
import Row from "../components/Grid/Row";
import Col from "../components/Grid/Col";

//Components
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContentBox from "../components/ContentBox";

const Home = (props) => {
    return (
        <div>
            <Header current={props.current}/>
            <ContentBox id={"about-box"}>
                <Container>
                    <h1 className="section-heading">A<span className="smaller-text">BOUT</span></h1>
                    <hr className="orange-hr mb-5"/>
                    <Row>
                        <Col size="col-lg-6">
                            IMAGE PLACHOLDER
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
            </ContentBox>
            <Footer/>
        </div>
    );
}

export default Home;