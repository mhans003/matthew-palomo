const ContentBox = ({ id, children }) => {
    return (
        <div id={`${id ? id : ''}`} className="content-overlay">
            <div className="content-box">
                {children}
            </div>
        </div>
    );
}

export default ContentBox;