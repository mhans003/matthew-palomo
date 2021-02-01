const ContactButton = (props) => {
    return (
        <div className="form-group">
            <button type="button" className="btn btn-primary btn-block btn-lg page-button" onClick={() => props.handleContactShow(props.heading, props.body)}>
                <span className="contact-item">
                    {props.text} <i className={props.icon}></i>
                </span>
            </button>
        </div>
    );
}

export default ContactButton;