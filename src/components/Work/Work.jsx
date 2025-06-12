import {forwardRef, useRef, useState} from "react";
import styled from "styled-components";
import WorkCard from "./WorkCard.jsx";
import resume from "../../data/resume.json";

import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {CommonTitle} from "../Common/common.js";

const Work = forwardRef((props, workRef) => {
    const {$isDark} = props;

    let sliderRef = useRef();
    const [currentSlide, setCurrentSlide] = useState(1);

    const settings = {
        className: "center",
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
        afterChange: (index) => setCurrentSlide(index + 1),
        responsive: [
            {
                breakpoint: 1247,
                settings: {
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: "15px",
                },
            },
        ],
    };

    function handleOnClick(index) {
        if(index !== currentSlide){
            sliderRef.slickGoTo(index - 1)
        }
    }

    return (
        <Section ref={workRef}>
            <Content>
                <CommonTitle>EXPERIENCE</CommonTitle>

                <Slider ref={slider => {
                    sliderRef = slider;
                }}
                        {...settings}>
                    {resume.work.map((item, index) => (
                        <div key={index} onClick={() => handleOnClick(index)}>
                            <WorkCard data={item} $isDark={$isDark}/>
                        </div>
                    ))}
                </Slider>
            </Content>
        </Section>
    );
});

Work.displayName = "Experience";
export default Work;



const Section = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: ${(props) => props.theme.colors.mainbg};
    z-index: 1;
`;

const Content = styled.div`
    padding: 100px 0 50px;
    width: 100%;
    color: #ccd0d9;
    box-shadow: ${(props) => props.theme.boxShadows.bottom};
`;


