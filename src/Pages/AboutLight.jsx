import About6 from "../Components/About/About6";
import BreadCumb from "../Components/Common/BreadCumb";
import Cta1 from "../Components/Cta/Cta1";
import MarqueeText from "../Components/MarqueeText/MarqueeText";
import Mission1 from "../Components/Mission/Mission1";
import Vission1 from "../Components/Mission/Vission1";
import Team2 from "../Components/Team/Team2";
import Testimonial1 from "../Components/Testimonial/Testimonial1";

const AboutLight = () => {
    return (
        <div>
            <BreadCumb Title="About Us"></BreadCumb>
            {/* <MarqueeText></MarqueeText> */}
            <About6
                image1="/assets/img/about/about2-img1.webp"
                image2="/assets/img/about/about2-img2.webp"
                image3="/assets/img/about/about2-img3.webp"
                experienceNum="25"
                experienceTitle="Years Of <br> Experience"
                subTitle="Our Service"
                title="Turning Ideas into Digital Excellence"
                content="At Ozone Software and Solutions, we specialize in transforming visions into reality. With a passion for innovation and a commitment to quality, we deliver cutting-edge digital solutions tailored to your business needs. Whether it’s web development, software creation, or branding, our expert team combines creativity and technology to empower your growth. Partner with us to unlock the potential of your ideas and create a lasting impact in the digital world"
                counName1="IT Consulting"
                CounNum1="100%"
                counName2="UI/UX Development"
                CounNum2="98%"
            ></About6>
            <Mission1></Mission1>
            <Vission1></Vission1>
            <Testimonial1></Testimonial1>
            <Team2></Team2>
            <Cta1></Cta1>
        </div>
    );
};

export default AboutLight;