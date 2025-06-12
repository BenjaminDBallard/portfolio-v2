import { useState, useRef, useLayoutEffect, useEffect } from "react";
import styled from "styled-components";
import {CommonButton} from "../Common/common.js";

export default function WorkCard({ data, $isDark }) {
    const { company, jobTitle, icons, dark, short, description, skills } = data;
    const [showAll, setShowAll] = useState(false);
    const listRef = useRef(null);
    const [height, setHeight] = useState("0px");

    // Set height when showAll toggles
    useLayoutEffect(() => {
        if (listRef.current) {
            if (showAll) {
                setHeight(`${listRef.current.scrollHeight}px`);
            } else {
                setHeight("0px");
            }
        }
    }, [showAll]);

    // Handle window resize only when expanded
    useEffect(() => {
        if (!showAll) return; // only run when expanded

        function handleResize() {
            if (listRef.current) {
                setHeight(`${listRef.current.scrollHeight}px`);
            }
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [showAll]);

    return (
        <Section>
            <Content>
                <DisplayBox>
                    <TopWrap>
                        <TitleWrap>
                            <Title>{company.toUpperCase()}</Title>
                            <SubTitle>{jobTitle.toUpperCase()}</SubTitle>
                        </TitleWrap>

                        <IconList>
                            {($isDark ? dark : icons).map((icon, i) => (
                                <Icon key={i} src={`icons/${icon}`} alt={icon} />
                            ))}
                        </IconList>

                        <Short>{short}</Short>
                    </TopWrap>
                    <List ref={listRef} $showAll={showAll}>
                        {description.map((desc, i) => (
                            <ListItem key={i} $isVisible={showAll}>
                                {desc}
                            </ListItem>
                        ))}
                        <ListItemClean $isVisible={showAll}>
                        <ChipList $isVisible={showAll}>
                            {skills.map((skill, i) => (
                                <FlatChip key={i}>{skill}</FlatChip>
                            ))}
                        </ChipList>
                        </ListItemClean>
                    </List>
                <ButtonWrap>
                    <CommonButton onClick={() => setShowAll(!showAll)}>
                        {showAll ? "SHOW LESS" : "SHOW MORE"}
                    </CommonButton>
                </ButtonWrap>
                </DisplayBox>
            </Content>
        </Section>
    );
}

const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
margin: 10px;
`;
const Content = styled.div`
  color: ${(props) => props.theme.colors.text.body};
  display: flex;
  flex-direction: row;
  gap: 40px;
`;
const DisplayBox = styled.div`
    width: 100%;
  display: flex;
    min-height: 430px;
  flex-direction: column;
    justify-content: space-between;
    padding: 0;
    border-radius: 10px;
    background-color: ${(props) => props.theme.colors.secondbg};
    box-shadow: ${(props) => props.theme.boxShadows.main};
    @media (max-width: 1247px) {
        min-height: fit-content;
    }
`;

const TitleWrap = styled.div`
    background-image: ${(props) => props.theme.accent.accentBackground};
    border-radius: 10px 10px 0 0;
    padding: 20px 40px;
    box-shadow: ${(props) => props.theme.boxShadows.main};
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
`
const ChipList = styled.div`
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
    padding: 0;
    flex-wrap: wrap;

    opacity: ${props => (props.$isVisible ? 1 : 0)};
    transform: translateY(${props => (props.$isVisible ? '0' : '-10px')});
    transition: opacity 0.3s ease, transform 0.3s ease;
    pointer-events: ${props => (props.$isVisible ? 'auto' : 'none')};
`;

const FlatChip = styled.button`
  padding: 8px 12px;
  border-radius: 999px;
  border: none;
  background-image: ${(props) => props.theme.accent.accentButton};
  font-size: 16px;
  color: ${(props) => props.theme.colors.white};
    box-shadow: ${(props) => props.theme.boxShadows.main};
    ;
`;
const IconList = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
    padding: 0 40px;
  flex-wrap: wrap;
    @media screen and (max-width: 768px) {
        gap: 15px;
        justify-content: center;
    }
`;
const Icon = styled.img`
  height: 40px;
    @media screen and (max-width: 768px) {
        height: 30px;
    }
`
const List = styled.ul`
    padding: 0 40px 0 58px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    overflow: hidden;
    transition: max-height 0.3s ease-in-out;
    max-height: ${props => props.$showAll ? '1000px' : '0'};
`;

const ListItem = styled.li`
    font-size: 16px;
    opacity: ${props => props.$isVisible ? 1 : 0};
    transform: ${props => props.$isVisible ? 'translateY(0)' : 'translateY(-10px)'};
    transition:
            opacity 0.3s ease-in-out,
            transform 0.3s ease-in-out;
`;
const ListItemClean = styled.li`
    font-size: 16px;
    list-style: none;
    opacity: ${props => props.$isVisible ? 1 : 0};
    transform: ${props => props.$isVisible ? 'translateY(0)' : 'translateY(-10px)'};
    transition:
            opacity 0.3s ease-in-out,
            transform 0.3s ease-in-out;
`;

const Short = styled.div`
    padding: 0 40px;
    font-size: 16px;
    margin-top: 15px;
`;

const TopWrap = styled.div`
display: flex;
flex-direction: column;
`
const ButtonWrap = styled.div`
    display: flex;
    //width: 100%;
    justify-content: flex-end;
    padding: 0 40px 30px;
`
