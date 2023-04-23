const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text" id="begin">
                <div className="overlay">
                  <h1>
                    {props.data ? props.data.title : "Loading"}
                    <span></span>
                  </h1>
                  <p>{props.data ? props.data.paragraph : "Loading"}</p>
                  <a
                    href="https://invelondev.s3.eu-west-3.amazonaws.com/%5BTour360%5DRoutaSantIgnasi_p2vr/output/index.html"
                    className="btn btn-custom btn-lg page-scroll"
                    style={{margin: '8px'}}
                  >
                    Començar el tour <i className="fa fa-arrow-right"></i>
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};


export default Header;