import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "../styles/TabBar/TabBar.css";
import Analytics from "./Analytics";
import Stats from "./Stats";

const TabBar = () => {
  const [activeTab, setActiveTab] = useState("yesterday");

  return (
    <Tabs
      id='controlled-tab-example'
      activeKey={activeTab}
      onSelect={(tab) => setActiveTab(tab)}
      className='mb-3'
    >
      <Tab eventKey='lastHour' title='Last Hour' />

      <Tab eventKey='today' title='Today' />

      <Tab eventKey='yesterday' title='Yesterday'>
        <Stats />
        <div>
          <Analytics />
        </div>
      </Tab>
      <Tab eventKey='lastThreeDays' title='Last 3 days' />
    </Tabs>
  );
};

export default TabBar;
