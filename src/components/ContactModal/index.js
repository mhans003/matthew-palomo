import { useState, useRef } from "react";
import { Modal } from 'react-bootstrap';

function ContactModal(props) {

    const [copied, setCopied] = useState("Copy");
    const contactRef = useRef("");

    const copyText = (event) => {
        navigator.clipboard.writeText(`${props.body}`);
        setCopied("Copied!");
    };

    return (
        <>
            <Modal show={props.contactShow} onHide={() => {
                props.handleContactClose();
                setCopied("Copy");
            }}>
                <Modal.Header closeButton>
                    <Modal.Title>
                    <h3>{props.heading} {props.heading === "Call or Text" ? <i className="fas fa-mobile-alt"></i> : <i className="fas fa-envelope-open-text"></i>}</h3>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {props.heading === "Call or Text" ? <h2 className="text-center" ref={contactRef}>{props.body}</h2> : <h5 className="text-center">{props.body}</h5>}
                    <div className="text-center">
                        <button onClick={copyText} className="btn btn-primary btn-lg copy-button mt-3">
                            {copied}
                        </button>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ContactModal;