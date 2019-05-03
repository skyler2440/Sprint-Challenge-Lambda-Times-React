import React from 'react';

const Tab = props => {
  const isActive = props.tab === props.selectedTab;
  return (
    <div
      className={`tab ${isActive ? 'active-tab' : ''}`}
      onClick={() => { props.selectTabHandler(props.tab) }
      }
    >
  { props.tab.toUpperCase() }
    </div >
  );
};

// Make sure you include PropTypes on your props.

export default Tab;
