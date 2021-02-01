import "./style.css";

//Grid Components
import Container from "../components/Grid/Container";
import Row from "../components/Grid/Row";
import Col from "../components/Grid/Col";

//Components
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = (props) => {
    return (
        <div>
            <Header current={props.current}/>
            <Footer/>
        </div>
    );
}

export default Home;