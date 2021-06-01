import React from "react";
import { NavHashLink } from 'react-router-hash-link';
import S1 from "../Image/service1.png";
import S2 from "../Image/service2.png";
import S3 from "../Image/service3.png";
import S4 from "../Image/service4.png";
import S5 from "../Image/service5.png";
import S6 from "../Image/service6.png";
import S7 from "../Image/service7.png";
import S8 from "../Image/service8.png";

const ServicesSectionComponent = (props) =>{
    return(
        <>
            <div className="col-md-6 my-4">
                <div className="row">
                    <div className="col-md-4 col-3">
                        <img src={props.imgsrc} alt={props.alt} className="img-fluid" />
                    </div>
                    <div className="col-md-8 col-9">
                        <h4>{props.heading}</h4>
                        <p>{props.text}</p>
                        <div className="d-flex justify-content-end">
                            <NavHashLink to={props.link} className="read-more">read more</NavHashLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

const ServicesSectionComponentData = [
    {
        imgsrc : S1,
        heading : "web development",
        text : "A good website doesn't end at style, rather, it must be expertly customized so that it         functions appropriately and include all the elements ......",
        link :"/services#web-development",
        alt : "web development",
    },
    {
        imgsrc : S2,
        heading : "brand marketing",
        text : "We at Hardciphers intend to boost your business and place it at the top of your industry. We start from scratch to step by step develop an identity ...... ",
        link :"/services#brand-marketing",
        alt : "brand marketing",
    },
    {
        imgsrc : S3,
        heading : "graphic designing",
        text : "We have a unique set of people who excel in creativity as well as experience to implement compelling and inﬂuential visual eﬀects on users and viewers ......",
        link :"/services#graphic-designing",
        alt : "graphic designing",
    },
    {
        imgsrc : S4,
        heading : "app development",
        text : "HardCipher has an illustrious team of app developers and coders who create some mind blowing UI/UX and exceptionally impressive accessibility ......",
        link :"/services#app-development",
        alt : "app development",
    },
    {
        imgsrc : S5,
        heading : "software development",
        text : "At HardCipher, we have a team of executives who specialise in software development. We oﬀer individual attention to each project and deliver the ......",
        link :"/services#software-development",
        alt : "software development",
    },
    {   
        imgsrc : S6,
        heading : "print media",
        text : "Nothing gets you a greater number of clients than exceptionally enlightening, directed and precise content. Working with us could end up being the most ......",
        link :"/services#print-media",
        alt : "print media",
    },
    {   
        imgsrc : S7,
        heading : "search engine optimization",
        text : "Hardcipher is India's top SEO optimization company. SEO assists your site with positioning higher in Search Engines and let individuals click your posting ......",
        link :"/services#search-engine-optimization",
        alt : "search engine optimization",
    },
    {   
        imgsrc : S8,
        heading : "social media marketing",
        text : "Construct your brand image across the internet and make significant relations with your clients and adherents through social media marketing......",
        link :"/services#social-media-marketing",
        alt : "social media marketing",
    }
];


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const ServicesPageComponent = (props) =>{
    return(
        <>
            <div className="row my-5" id={props.id}>
                <div className="col-md-4">
                    <img src={props.imgsrc} alt={props.alt} className="img-fluid" />
                </div>
                <div className="col-md-8">
                    <h4>{props.heading}</h4>
                    <p>{props.text}</p>
                </div>
            </div>
        </>
    );
}

const ServicesPageComponentData = [
    {
        id : "web-development",
        imgsrc : S1,
        heading : "web development",
        text : "A good website doesn't end at style, rather, it must be expertly customized so that it functions appropriately and include all the elements in the best manner.We have a dedicated team of professionals employed to develop powerful and engaging websites that leave a long lasting impact on a visitor’s mind. A strong website marks the level of your online presence and for it to be outstanding, we enforce an extensive research of your product / service to finalise the best and most fitting layout for you. We put in all our creativity and efforts to deliver a user friendly, adaptive and attractive website to match your ideas and preferences. Our services are top notch, using efficient, relevant and updated technology and our sole aim is to provide our customers with a fully optimised package of ultimate amenities at the best prices. If you are looking to create a face online, we are the website development company of your choice. ",
        alt : "website development, Best Digital Marketing Services In Delhi, Hardcipher, Free Audit",
    },
    {
        id : "brand-marketing",
        imgsrc : S2,
        heading : "brand marketing",
        text : "We at Hardciphers intend to boost your business and place it at the top of your industry. We start from scratch to step by step develop an identity, theme, colour scheme, product range and other related factors by conducting a deep-rooted study of customer psychology, market trends and target audience. the list of elements that make up your identity is endless. Our team of effective personnel helps you design your branding strategy endlessly till the extent of satisfactory results. We systematically build your online presence which shall be interactive and captivating for the audience. Considering today’s internet era, online marketing is doing wonders in the industry and we plan to make the most of this advantage to outmatch competitors and stand distinguished in your field. With our in-depth knowledge of advertising, trend, marketing dynamics we help you strategize better for your brand. Our team will always be beneficial for your organization. ",
        alt : "brand marketing, Best Digital Marketing Services In Delhi, Hardcipher, Free Audit",
    },
    {
        id : "graphic-designing",
        imgsrc : S3,
        heading : "graphic designing",
        text : "We have a unique set of people who excel in creativity as well as experience to implement compelling and influential visual effects on users and viewers of your brand. Regardless of whether it is designing singular or independent design pieces such as a logo, a marketing brochure or a complete promotional strategy contract, our design rangers leave no stone unturned in creating the most excruciating and eye catchy templates. Infographics are in and here to stay, infographics are likely to be more interesting and readable. We have an endless library of resources and stock materials to provide authentic and eccentric designs to each and every client or customer. Our plan is clear and focused on imaginative thinking, pulling out trendy and fun ideas and leaving a powerful imprint with our visual content. Visuals should speak for your website as they are the first impression of your brand. HardCiphers have perfected the art of designing unforgettable logos and other elements",
        alt : "graphic designing, Best Digital Marketing Services In Delhi, Hardcipher, Free Audit",
    },
    {
        id : "app-development",
        imgsrc : S4,
        heading : "app development",
        text : "HardCipher has an illustrious team of app developers and coders who create some mind blowing UI/UX and exceptionally impressive accessibility. We have gained a lot of practice and experience to curate designs that beat existing trends and push industry standards. We are the finest and provide cost effective solutions when it comes to app development. We work to provide utmost reliability and customer satisfaction. We are backed with years of knowledge in this field and with our engaging approach tries to bring the best for you. Our goal is to transform and allow users to feel a next level app surfing endeavor. We preach originality and try to deliver quality services. Our work is attractive and informative. Consulting our clients at every step to keep them involved and informed is how we work. Hence, one thing that we can definitely assure you is smooth and comfortable prospect and a revamped output. ",
        alt : "app development, Best Digital Marketing Services In Delhi, Hardcipher, Free Audit",
    },
    {
        id : "software-development",
        imgsrc : S5,
        heading : "software development",
        text : "At HardCipher, we have a team of executives who specialise in software development. We offer individual attention to each project and deliver the best we can. Our team is equipped with in-depth knowledge and all the latest automation. We customise software according to our client’s preferences and work until our clients are fully satisfied.we enforce an extensive research of your product / service to finalise the best and most fitting layout for you. We put in all our efforts to make your software user friendly and flexible. We have a lot of experience that shows in our work.Consulting our clients at every step to keep them involved and informed is how we work.Our goal is to transform and allow users to feel a next level software surfing endeavour. We provide the best of services in the most affordable costs. You can expect nothing but authentic work and quality services. ",
        alt : "software development, Best Digital Marketing Services In Delhi, Hardcipher, Free Audit",
    },
    {   
        id : "print-media",
        imgsrc : S6,
        heading : "print media",
        text : "Nothing gets you a greater number of clients than exceptionally enlightening, directed and precise content. Working with us could end up being the most beneficial choice in this zone. Our team is fully equipped with in depth knowledge in various disciplines, marketing strategies. Advertisement, brochures, magazines- we provide everything. Delivering the best of work is how we expand our customer base. Our work will always be attractive and informative. Prints should be eye catchy to attract people’s attention. Our team uses the best of fonts, sizes, theme, colour scheme. We work according to our client’s requirements and work till they are fully satisfied. We keep them involved and informed throughout the process to create a masterpiece. Our work screams authenticity and creativity. We provide fine art at very minimal cost. We can assure you a wonderful experience and an astonishing outcome",
        alt : "print media, Best Digital Marketing Services In Delhi, Hardcipher, Free Audit",
    },
    {   
        id : "search-engine-optimization",
        imgsrc : S7,
        heading : "search engine optimization",
        text : "Hardcipher is India's top SEO optimization company. SEO assists your site with positioning higher in Search Engines and let individuals click your posting all the more often when placed high. From conceptualization to final-stage execution, we carry out the whole technique. Our mastery lies in SEO techniques – from Company SEO to local SEO, from App SEO to Video SEO and everything in the middle. We are determined to achieve the best results in the field. We'll help you meet your targets and assist your business with accomplishing the development you've always wanted. We continue to update our SEO systems as Google changes its calculations and SEO promoting methods. Our SEO experts have many years of experience and valuable information on the most recent SEO patterns. Our specialists present your website with all the principle web search tools to improve the online presence of your website.",
        alt : "search engine optimization, Best Digital Marketing Services In Delhi, Hardcipher, Free Audit",
    },
    {   
        id : "social-media-marketing",
        imgsrc : S8,
        heading : "social media marketing",
        text : "Construct your brand image across the internet and make significant relations with your clients and adherents through social media marketing(SMM). We at hardcipher do social media marketing to private ventures, companies and various big organizations. even if you own a startup or an already flourishing organization, our team of experts can help you with your mission. Join us and let our social team help you build your brand image and increase your visibility. With the proper marketing plan and mission monitoring framework, online content promoting can expand visitors traffic, better SEO, better client commitment and better brand loyalty. Social media advertising packages are custom-made to your particular necessities and monetary limit. This implies you have complete control over your marketing, financial plan and social media content advertising strategy.",
        alt : "social media marketing, Best Digital Marketing Services In Delhi, Hardcipher, Free Audit",
    }
];

export default ServicesSectionComponent;
export {ServicesSectionComponentData, ServicesPageComponent, ServicesPageComponentData};