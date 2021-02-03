import FooterItem from "../FooterItem";

function Footer() {
    return (
        <footer className="footer bg-dark">
            <nav className="container-fluid">
                <div className="row justify-content-around mx-2 text-light">
                    <FooterItem url={`/contact`} icon={`fas fa-mobile-alt`} text={`(555) 555-5555`} alt={`Phone Number`}/>
                    <FooterItem url={`/contact`} icon={`fas fa-envelope-open-text`} text={`safetyconsulting@sample.com`} alt={`Email Address`}/>
                </div>
            </nav>
        </footer>
    );
}

export default Footer;