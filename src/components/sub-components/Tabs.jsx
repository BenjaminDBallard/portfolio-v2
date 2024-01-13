import { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const TabWrap = styled.div`
  display: flex;
  justify-content: center;
  /* overflow-x: auto; */
  width: 100%;
  /* white-space: nowrap; */
  /* margin-bottom: 20px; */
`;

const TabsContainer = styled.div`
  display: flex;
  /* justify-content: center; */
  overflow-x: auto;
  width: fit-content;
  /* white-space: nowrap; */
  margin-bottom: 20px;
  @media screen and (max-width: 500px) {
    display: block;
  }
`;

const TabItem = styled.div`
  padding: 12px 24px;
  margin-bottom: 10px;
  flex: 0 0 auto;
  width: fit-content;
  cursor: pointer;
  font-size: 20px;
  text-align: center;
  color: ${({ active, theme }) => (active ? theme.primaryColor : "#a3a6ad")};
  border-bottom: ${({ active, theme }) =>
    active ? `2px solid ${theme.primaryColor}` : "none"};

  &:hover {
    color: ${({ theme }) => theme.primaryColor};
  }

  /* @media screen and (min-width: 1921px) {
    font-size: 30px;
    padding: 18px 36px;
  }
  @media screen and (min-width: 2900px) {
    font-size: 40px;
    padding: 24px 48px;
  } */
`;

const Tabs = ({ tabs, defaultTab, onTabChange }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
    if (onTabChange) {
      onTabChange(tabIndex);
    }
  };

  return (
    <TabWrap>
      <TabsContainer>
        {tabs.map((tab, index) => (
          <TabItem
            key={index}
            active={activeTab === index}
            onClick={() => handleTabClick(index)}
          >
            {tab.label}
          </TabItem>
        ))}
      </TabsContainer>
    </TabWrap>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  defaultTab: PropTypes.number,
  onTabChange: PropTypes.func,
};

export default Tabs;
