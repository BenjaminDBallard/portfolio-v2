import { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const TabItem = styled.div`
  padding: 12px 24px;
  cursor: pointer;
  font-size: 16px;
  color: ${({ active, theme }) => (active ? theme.primaryColor : "#333")};
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
