const header = () => {
    return (
        <nav className="navbar navbar-inverse">
            <div className="container">
                <div className="navvar-header">
                    <a href="/" className="navbar-brand">Hello Next</a>
                </div>
                <div id="navbar">
                    <ul className="nav navbar-nav">
                        <li><a href="/department/list">학과관리</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default header;