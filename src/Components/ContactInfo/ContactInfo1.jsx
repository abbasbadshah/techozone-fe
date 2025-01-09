
const ContactInfo1 = () => {
    return (
        <div>
            <div className="space100"></div>
        <div className="contact-page">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="contact-boxs">
                            <div className="heading1">
                                <h2>Contact Information</h2>
                                <div className="space16"></div>
                                <p>We Have grown up with the internet revolution, and we <br/> know how to deliver on its</p>
                            </div>
                            <div className="contact-box">
                                <div className="icon">
                                    <img src="/assets/img/icons/contact-page-icon1.png" alt="" />
                                </div>
                                <div className="heading">
                                    <h5>Contact Us</h5>
                                    <a href="tel:917400786736" className="text">+91 74007 86736</a>
                                </div>
                            </div>

                            <div className="contact-box">
                                <div className="icon">
                                    <img src="/assets/img/icons/contact-page-icon2.png" alt="" />
                                </div>
                                <div className="heading">
                                    <h5>Send Us a Mail</h5>
                                    <a href="mailto:info@techozonepro.com" className="text">info@techozonepro.com </a>
                                </div>
                            </div>

                            <div className="contact-box">
                                <div className="icon">
                                    <img src="/assets/img/icons/contact-page-icon3.png" alt="" />
                                </div>
                                <div className="heading">
                                    <h5>Office Location</h5>
                                    <a href="#" className="text">Jasmin Park, Bijalpur Indore M.P India</a>
                                </div>
                            </div>


                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="contact-form-details">
                            <form action="#">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="single-input">
                                            <input type="text" placeholder="First Name" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="single-input">
                                            <input type="text" placeholder="Last Name" />
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="single-input">
                                            <input type="email" placeholder="Email" />
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="single-input">
                                            <input type="number" placeholder="Phone" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="single-input">
                                            <input type="text" placeholder="Subject" />
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="single-input">
                                            <textarea cols="30" rows="5" placeholder="Message"></textarea>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <button className="theme-btn1">Submit <span><i className="bi bi-arrow-right"></i></span></button>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="space100"></div>

        <div className="contact-map-page">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.743602099695!2d75.84379907600075!3d22.663346329636926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd5375fb1f61%3A0x8765c02702a62c25!2sJasmine%20Park!5e0!3m2!1sen!2sin!4v1736403955834!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy"></iframe>
          </div>

    </div>

    );
};

export default ContactInfo1;