import React from 'react';
import PropTypes from 'prop-types';

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

Tab.propTypes = {
  selectedTab: PropTypes.string.isRequired,
  selectTabHandler: PropTypes.func.isRequired,
  tab: PropTypes.string.isRequired,
};


export default Tab;