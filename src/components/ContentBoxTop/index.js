const ContentBox = ({ id, children }) => {
    return (
        <div id={`${id ? id : ''}`} className="content-overlay">
            <div className="content-box-top">
                {children}
            </div>
        </div>
    );
}

export default ContentBox;