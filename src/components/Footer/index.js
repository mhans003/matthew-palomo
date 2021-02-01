import FooterItem from "../FooterItem";

function Footer() {
    return (
        <footer className="footer bg-dark">
            <nav className="container-fluid">
                <div className="row justify-content-around mx-2 text-light">
                    <FooterItem url={`/contact`} icon={`fas fa-mobile-alt`} text={`(951) 795-8966`} alt={`Matthew Palomo's Phone Number`}/>
                    <FooterItem url={`/contact`} icon={`fas fa-envelope-open-text`} text={`matthewpalomo235@gmail.com`} alt={`Matthew Palomo's Email Address`}/>
                </div>
            </nav>
        </footer>
    );
}

export default Footer;