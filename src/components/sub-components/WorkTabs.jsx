import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Tabs from "./Tabs"; // Assuming the file containing the Tabs component is in the same directory
import Job1 from "./Job1";
import Job2 from "./Job2";
import Job3 from "./Job3";

const theme = {
  primaryColor: "#cbe4de", // Replace 'blue' with your desired primary color
};

const TabContainer = styled.div`
  /* padding: 20px; */
`;

const WorkTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (tabIndex) => {
    setActiveTab(tabIndex);
    // Add any additional logic you need when the tab changes
  };

  const tabs = [
    { label: "ECPro" },
    { label: "Hacker Clone" },
    { label: "Austin Coding Academy" },
    // Add more tabs as needed
  ];

  return (
    <ThemeProvider theme={theme}>
      <TabContainer>
        <Tabs
          tabs={tabs}
          defaultTab={activeTab}
          onTabChange={handleTabChange}
        />
        {/* Your content for each tab goes here */}
        {activeTab === 0 && <Job1 />}
        {activeTab === 1 && <Job2 />}
        {activeTab === 2 && <Job3 />}
        {/* Add more content for additional tabs */}
      </TabContainer>
    </ThemeProvider>
  );
};

export default WorkTabs;
