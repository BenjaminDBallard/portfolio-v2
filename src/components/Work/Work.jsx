import { forwardRef } from "react";
import styled from "styled-components";
import WorkCard from "./WorkCard.jsx";
import resume from "../../data/resume.json";

import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Work = forwardRef((props, workRef) => {
    const {theme} = props;

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 8000,
        slidesToShow: 3,
        slidesToScroll: 1,
        draggable: true,
        centerMode: true,
        centerPadding: '40px',
        swipeToSlide: true,
        arrows: false,
        accessibility: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: "15px",
                },
            },
        ],
    };

    return (
        <Section ref={workRef}>
            <Content>
                <Title>Work</Title>

                <Slider {...settings}>
                    {resume.work.map((item, index) => (
                        <div key={index}>
                            <WorkCard data={item} theme={theme}/>
                        </div>
                    ))}
                </Slider>
            </Content>
        </Section>
    );
});

Work.displayName = "Work";
export default Work;



const Section = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

const Content = styled.div`
    padding-top: 100px;
    width: 100%;
    color: #ccd0d9;

    @media screen and (max-width: 768px) {
        width: 95%;
    }
`;

const Title = styled.h1`
    text-align: center;
    font-weight: 800;
    font-size: calc(100% + 7px + 0.9vw * 0.42);
    color: ${(props) => props.theme.colors.text.subtitle};
`;


