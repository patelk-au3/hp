import React from "react";
import { NavHashLink } from 'react-router-hash-link';
import backillustration from "../Image/backillustration.svg";
import Img1 from "../Image/demo/thumbnail-01.png";
import Img2 from "../Image/demo/thumbnail-02.png";
import Img3 from "../Image/demo/thumbnail-03.png";
import Img4 from "../Image/demo/thumbnail-04.png";
import Img5 from "../Image/demo/thumbnail-05.png";
import Img6 from "../Image/demo/thumbnail-06.png";
import Img7 from "../Image/demo/thumbnail-07.png";
import Img8 from "../Image/demo/thumbnail-08.png";
import Img9 from "../Image/demo/thumbnail-09.png";

const PortfolioPage = () =>{
    return(
        <>
            <img src={backillustration} alt="backillustration" className="img-fluid backillustration" />
            <section className="container-fluid" id="portfolio-page">
                <div className="row">
                    <div className="col-md-8 mx-auto">
                        <h2 className="text-center">Portfolio</h2>
                        <p className="text-center">With our team of dedicated professionals, we have successfully delivered all the projects within the time frame. We make sure our clients are fully convinced of our work and are content with our services. We thrive on converting customers into our regular clients. We bring out the best of everything and are nothing but proud to show you our work.</p>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        {
                            Cardata.map((val,index)=>{
                                return(
                                    <Card
                                        key = {index}
                                        imgsrc = {val.imgsrc}
                                        link = {val.link}
                                    />
                                );
                            })
                        }
                    </div>
                </div>
                <div className="row">
                    <div className="col my-5 d-flex justify-content-center">
                        <NavHashLink to="/contact-us#" className="contact-us-btn">Contact us</NavHashLink>
                    </div>
                </div>
            </section>
        </>
    );
}


const Card = (props) =>{
    return(
        <>
            <div className="col-lg-4 my-5">
                <div className="card">
                <img src={props.imgsrc} className="img-fluid" alt="demo template" />
                    <div className="card-body">
                        <NavHashLink to={props.link} className="card-btn mb-4" target="_blank">Live Demo</NavHashLink>
                    </div>
                </div>
            </div>
        </>
    );
}

const Carouselcard = (props) =>{
    return(
        <>
            <div className="card">
                <NavHashLink to="/portfolio#" className="card-btn mb-4">
                    <img src={props.imgsrc} className="img-fluid" alt="demo template" />
                </NavHashLink>
            </div>
        </>
    );
}

const Cardata = [
    {imgsrc:Img1, link:"/template1"},
    {imgsrc:Img2, link:"/template1"},
    {imgsrc:Img3, link:"/template1"},
    {imgsrc:Img4, link:"/template1"},
    {imgsrc:Img5, link:"/template1"},
    {imgsrc:Img6, link:"/template1"},
    {imgsrc:Img7, link:"/template1"},
    {imgsrc:Img8, link:"/template1"},
    {imgsrc:Img9, link:"/template1"},
];

export default PortfolioPage;
export {Carouselcard, Cardata};