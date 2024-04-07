import { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const TabWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const TabsContainer = styled.div`
  display: flex;
  overflow-x: auto;
  width: fit-content;
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
  color: ${({ active }) =>
    active
      ? (props) => props.theme.colors.text.subtle
      : (props) => props.theme.colors.text.body};
  border-bottom: ${({ active, theme }) =>
    active ? `2px solid ${theme.primaryColor}` : "none"};

  &:hover {
    color: ${({ theme }) => theme.primaryColor};
  }
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
