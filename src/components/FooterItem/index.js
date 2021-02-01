function FooterItem(props) {
    return (
        <span>
            <a href={props.url} target="_blank" rel="noreferrer">
                <i className={props.icon}></i>
            </a>
            <span className="d-none d-md-inline">
                {props.text}
                <span className="sr-only">
                    {props.alt}
                </span>
            </span>
        </span>
    );
}

export default FooterItem;