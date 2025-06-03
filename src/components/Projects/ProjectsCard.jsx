import styled, { css } from "styled-components";
import {slideOutKeyframe} from "../css-animations.js";
import {useEffect, useRef, useState} from "react";
import {CommonButton} from "../Common/common.js";

export default function ProjectsCard({data, $isDark}) {

    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const isMobile = window.matchMedia("(max-width: 1400px)").matches;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Only run once
                }
            },
            {
                threshold: 0.1,
                rootMargin: isMobile ? '0px 0px 25% 0px' : '0px 0px 0px 0px',
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    return(
        <Section>
            <Content>
                <DisplayBox ref={ref} $animate={isVisible}>
                    <TitleWrap>
                        <Title>{data.title.toUpperCase()}</Title>
                        <SubTitle>{data.category.toUpperCase()}</SubTitle>
                    </TitleWrap>
                    <Wrap>
                        <TopWrap>
                            <IconList>
                                {($isDark ? data.dark : data.icons).map((icon, i) => (
                                    <Icon key={i} src={`icons/${icon}`} alt={icon} />
                                ))}
                            </IconList>
                            <Short>{data.short}</Short>
                        </TopWrap>
                    <ButtonWrap>
                        <a href={data.github} target="_blank" rel="noopener noreferrer">
                            <CommonButton>GITHUB</CommonButton>
                        </a>
                    </ButtonWrap>
                    </Wrap>
                </DisplayBox>
                <ShowcaseBox>
                        <ImgBox src={`images/${data.image}`} alt={data.image}/>
                </ShowcaseBox>
            </Content>
        </Section>
    )
}

const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
    width: 100%;
`;
const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 170px 1fr;
    grid-template-rows: 1fr;
    align-items: center;
    @media screen and (max-width: 768px) {
        overflow: hidden;
        padding: 0 5px 14px;
    }
`;
const DisplayBox = styled.div`
    padding: 20px;
    background-image: ${(props) => props.theme.accent.accentBackground};
    color: ${(props) => props.theme.colors.text.body};
    border-radius: 10px;
    min-height: 350px;
    display: flex;
    flex-direction: column;
    grid-column: 1 / 3;
    grid-row: 1;
    box-shadow: ${(props) => props.theme.boxShadows.main};
    opacity: 0;
    transform: translateX(75%);

    ${({ $animate }) =>
            $animate &&
            css`
      animation: ${slideOutKeyframe} 0.6s ease forwards;
    `};

    @media screen and (max-width: 1400px) {
        min-height: unset;
        grid-column: 1 / 4;
        grid-row: unset;
        border-radius: 10px;

        opacity: 1;
        transform: none;
        animation: none;
    }
`;
const TitleWrap = styled.div`
    border-radius: 10px 10px 0 0;
    padding: 20px 40px;
`
const Title = styled.h1`
  font-size: 24px;
  font-weight: 800;
  line-height: 1.1;
  margin: 0;
    color: ${(props) => props.theme.colors.white};
    @media screen and (max-width: 768px) {
        font-size: 20px;
    }
`;
const SubTitle = styled.p`
    font-size: 16px;
    line-height: 1.1;
    margin: 5px 0;
    color: ${(props) => props.theme.colors.white};
    @media screen and (max-width: 768px) {
        font-size: 16px;
    }
`;

const ShowcaseBox = styled.div`
    grid-column: 2 / 4;
    grid-row: 1;
    position: relative;

    @media screen and (max-width: 1400px)  {
        right: 0;
        grid-column: 1 / 4;
        margin-bottom: 10px;
    }
`

const ImgBox = styled.img`
    width: 100%;
    border-radius: 10px;
    display: block;
    margin: 0;
    box-shadow: ${(props) => props.theme.boxShadows.main};
    @media screen and (max-width: 1400px) {
        width: 100%;
        border-radius: 10px;
    }
  `
const IconList = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 0;
    padding: 0;
  flex-wrap: wrap;
`;
const Icon = styled.img`
  height: 40px;
    @media screen and (max-width: 768px) {
        height: 30px;
    }
`

const Wrap = styled.div`
display: flex;
    box-shadow: ${(props) => props.theme.boxShadows.main};
flex-direction: column;
    background-color: ${(props) => props.theme.colors.secondbg};
    border-radius: 10px;
    padding: 20px 30px;
    min-height: 250px;
`
const TopWrap = styled.div`
display: flex;
flex-direction: column;
    min-height: 250px;
`

const ButtonWrap = styled.div`
    display: flex;
    gap: 10px;
    width: 75%;
    justify-content: flex-start;
`

const Short = styled.div`
    width: 75%;
    padding: 20px 0;
    font-size: 16px;
    @media screen and (max-width: 1400px)  {
        width: 100%;
    }
`;
