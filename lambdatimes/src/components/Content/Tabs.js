import React from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';
import * as styles from '../styleComponents.js';

const Tabs = props => {
  return (
    <styles.Tabs>
      <styles.Topics>
        <styles.Title>TRENDING TOPICS:</styles.Title>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
        {
          props.tabs.map(tabData => (
            <Tab
              key={tabData}
              selectTabHandler={props.selectTabHandler}
              selectedTab={props.selectedTab}
              tab={tabData}
            />
          ))
        }
      </styles.Topics>
    </styles.Tabs>
  );
};

// Make sure to use PropTypes to validate your types!
Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Tabs;
