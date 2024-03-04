const header = () => {
    return (
        <nav className="navbar navbar-inverse">
            <div className="container">
                <div className="navvar-header">
                    <a href="/" className="navbar-brand">Hello Next</a>
                </div>
                <div id="navbar">
                    <ul className="nav navbar-nav">
                        <li><a href="/about">about(404)</a></li>
                        <li><a href="/about/hello">hello</a></li>
                        <li><a href="/about/world">world</a></li>
                        
                        <li><a href="/intro/hello/2534">hello</a></li>
                        <li><a href="/intro/world/6321">world</a></li>

                        <li><a href="/prods/lists/mains/outer/summer/12345">propds</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default header;