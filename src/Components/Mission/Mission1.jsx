import { Link } from "react-router-dom";

const Mission1 = () => {
  return (
    <div className="solution sp bg1">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="heading1">
              <span className="span">
                {/*<img src="/assets/img/icons/span1.png" alt="" /> */} Our
                Mission
              </span>
              <h2>Empowering Digital Transformation</h2>
              <div className="space16"></div>
              <p>
                Our mission is to drive innovation and enable businesses to
                thrive in the digital age. By delivering customized,
                high-quality solutions, we aim to empower organizations to
                achieve their goals and surpass their potential.
              </p>
              <div className="space16"></div>
              <p>
                We are dedicated to building lasting partnerships with our
                clients through integrity, creativity, and excellence. Our goal
                is to simplify technology, making it accessible and impactful
                for businesses of all sizes across the globe.
              </p>

              <div className="space30"></div>
              <div className="">
                <Link className="theme-btn1" to="/contact">
                  Get A Quote{" "}
                  <span>
                    <i className="bi bi-arrow-right"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="solution-images">
              <div className="image1">
                <img src="/assets/img/about/about2-img1.webp" alt="" />
              </div>
              <div className="image2">
                <img src="/assets/img/about/about2-img2.webp" alt="" />
              </div>
              <div className="image3">
                <img src="/assets/img/about/about2-img3.webp" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission1;
