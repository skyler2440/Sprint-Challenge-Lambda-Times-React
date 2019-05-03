import React from 'react';

import Tabs from './Tabs';
import Cards from './Cards';

import { tabData, cardData } from '../../data';

export default class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'all',
      tabs: [],
      cards: []
    };
  }

  componentDidMount() {
    const tabs = tabData;
    const cards = cardData;

    setTimeout(() => {
      this.setState({
        tabs, 
        cards
      });
    }, 800);
  }

  changeSelected = tab => {
    this.setState({ selected: tab });
  };

  filterCards = () => {
   if (this.state.selected === 'all')
   return this.state.cards;
    const cards = [...this.state.cards];
    return cards.filter(card => card.tab === this.state.selected);
  };

  render() {
    return (
      <div className="content-container">
       
        <Tabs tabs={this.state.tabs}
        selectedTab={this.state.selected}
        selectTabHandler={this.changeSelected}
        />
        <Cards cards={this.filterCards()}
        />
      </div>
    );
  }
}
