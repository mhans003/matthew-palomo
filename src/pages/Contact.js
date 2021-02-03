import "./style.css";
import { useState } from "react";

//Components
import Header from "../components/Header";
import Footer from "../components/Footer";
import Container from "../components/Grid/Container";
import ContactButton from "../components/ContactButton";
import ContactModal from "../components/ContactModal";
import ContentBox from "../components/ContentBox";

const Contact = (props) => {
    //Set up state for modals
    const [contactShow, setContactShow] = useState(false);
    const [heading, setHeading] = useState("");
    const [body, setBody] = useState("");

    //Handle opening and closing of modals.
    const handleContactClose = () => setContactShow(false);
    const handleContactShow = (heading, body) => {
        setHeading(heading);
        setBody(body);
        setContactShow(true);
    };

    return (
        <div>
            <Header current={props.current}/>
            <ContentBox id={"contact-box"}>
                <Container>
                    <h1 className="section-heading">C<span className="smaller-text">ONTACT</span></h1>
                    <hr className="orange-hr mb-5"/>
                    <ContactButton 
                        text={"Email "} 
                        icon={"fas fa-envelope-open-text"} 
                        handleContactShow={handleContactShow}
                        heading={`Email`}
                        body={"palomosafetyconsulting@gmail.com"}
                    />
                    <ContactButton 
                        text={"Phone "} 
                        icon={"fas fa-mobile-alt"}
                        handleContactShow={handleContactShow}
                        heading={"Call or Text"}
                        body={"(951) 795-8966"}
                    />
                </Container>
            </ContentBox>
            <Footer/>
            <ContactModal
                contactShow={contactShow}
                handleContactClose={handleContactClose}
                heading={heading}
                body={body}
            />
        </div>
    );
}

export default Contact;