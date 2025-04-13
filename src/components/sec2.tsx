

const Sec2 = () => {
    let logos = ["assets/sec2-1/Logo/acme 1.png","assets/sec2-2/Logo/acme 1.png",
        "assets/sec2-3/Logo/acme 1.png","assets/sec2-4/Logo/acme 1.png",
        "assets/sec2-21/Logo/acme 1.png","assets/sec2-22/Logo/acme 1.png",
        "assets/sec2-23/Logo/acme 1.png","assets/sec2-24/Logo/acme 1.png"];
    return (
        <div className="sec2">
            <h4 className="sec2Text">Trusted by the world’s most innovative teams</h4>
            <div className="sec2-grid">
                {logos.map((logo, index) => (
                    <div className="sec2-logo" key={index}>
                        <img src={logo} alt="" />
            </div>))}
        </div>
        </div>
    );
    }
    export default Sec2;