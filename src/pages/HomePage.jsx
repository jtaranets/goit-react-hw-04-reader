import React, { Component } from 'react';
import queryString from 'query-string';
import PropTypes from 'prop-types';
import Controls from '../components/controls/controls';
import Counter from '../components/counter/Counter';
import Publication from '../components/publication/Publication';
import publications from '../publications.json';

const getCurrentItem = location =>
  parseInt(queryString.parse(location.search).item, 10);

class HomePage extends Component {
  state = {};

  static propTypes = {
    match: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
  };

  componentDidMount() {
    const { match, location, history } = this.props;
    const item = getCurrentItem(location);
    if (!item) {
      history.push({
        path: `${match.path}`,
        search: 'item=1',
      });
    }
  }

  handleClick = ({ target }) => {
    const { history, location, match } = this.props;
    const currentItem = getCurrentItem(location);
    if (target.name === 'Previous') {
      history.push({
        path: `${match.path}`,
        search: `item=${currentItem - 1}`,
      });
    } else {
      history.push({
        path: `${match.path}`,
        search: `item=${currentItem + 1}`,
      });
    }
  };

  render() {
    const { location } = this.props;
    const activePage = getCurrentItem(location);
    const { length } = publications;
    return (
      <>
        <Controls
          onClick={this.handleClick}
          currentPage={activePage}
          length={length}
        />
        <Counter currentValue={activePage} total={length} />
        <Publication article={publications[activePage - 1]} />
      </>
    );
  }
}

export default HomePage;
