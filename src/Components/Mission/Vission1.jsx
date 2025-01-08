import { Link } from "react-router-dom";

const Vission1 = () => {
    return (
        <div className="solution about-solution sp">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="images">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="image">
                      <img src="/assets/img/about/visiton-img1.webp" alt="" />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="space30"></div>
                    <div className="image">
                      <img src="/assets/img/about/visiton-img2.webp" alt="" />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="space30"></div>
                    <div className="image">
                      <img src="/assets/img/about/visiton-img3.webp" alt="" />
                    </div>
                  </div>

                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="heading1">
                <span className="span">{/*<img src="/assets/img/icons/span1.png" alt="" /> */} Our Vision</span>
                <h2>Shaping the Future of Digital Excellence</h2>
                <div className="space16"></div>
                <p>Our vision is to be a global leader in delivering innovative and impactful digital solutions. We strive to inspire businesses to embrace technology, unlock new possibilities, and achieve sustainable growth</p>

                <div className="item-box">
                  <div className="icon">
                    <div className="">
                      <img src="/assets/img/icons/about-solution-iocn1.png" alt="" />
                    </div>
                  </div>
                  <div className="">
                    <h3><a href="#">Innovation at the Core</a></h3>
                    <div className="space10"></div>
                    <p>We envision a future where cutting-edge technology drives creativity and transforms industries</p>
                  </div>
                </div>

                <div className="item-box">
                  <div className="icon">
                    <div className="">
                      <img src="/assets/img/icons/about-solution-iocn2.png" alt="" />
                    </div>
                  </div>
                  <div className="">
                    <h3><a href="#">Empowering Businesses Globally</a></h3>
                    <div className="space10"></div>
                    <p>Our goal is to empower businesses worldwide by providing accessible, scalable, and future-ready solutions</p>
                  </div>
                </div>

                <div className="space30"></div>
                <div className="">
                  <Link className="theme-btn1" to="/contact">Get A Quote <span><i className="bi bi-arrow-right"></i></span></Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
};

export default Vission1;