import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Tabs from "./Tabs"; // Assuming the file containing the Tabs component is in the same directory
import Job1 from "./Job1";
import Job2 from "./Job2";
import Job3 from "./Job3";
import Job4 from "./Job4";
import "../../App.css";

const theme = {
  primaryColor: "rgb(119, 135, 249)", // Replace 'blue' with your desired primary color
};

const TabContainer = styled.div`
  /* width: 100%; */
`;

const WorkTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (tabIndex) => {
    setActiveTab(tabIndex);
    // Add any additional logic you need when the tab changes
  };

  const tabs = [
    { label: "Ripple Learning LLC" },
    { label: "Job App Tracker" },
    { label: "ChatBot Tutor" },
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
        {activeTab === 2 && <Job4 />}
        {activeTab === 3 && <Job3 />}
        {/* Add more content for additional tabs */}
      </TabContainer>
    </ThemeProvider>
  );
};

export default WorkTabs;
