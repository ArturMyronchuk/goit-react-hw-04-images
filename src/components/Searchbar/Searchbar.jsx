import { Header, Form, Button, Label, Input } from './Searchbar.styled';
import { Component } from 'react';
import { ImSearch } from 'react-icons/im';
import PropTypes from 'prop-types';
import Notiflix from 'notiflix';

export class Searchbar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    searchQuery: '',
    lastQuery: '',
  };
  handleChangeInput = e => {
    const searchQuery = e.target.value;
    this.setState({ searchQuery });
  };

  onHandleSubmit = event => {
    event.preventDefault();
    const { searchQuery, lastQuery } = this.state;

    if (searchQuery.trim() === '') {
      Notiflix.Report.info('Please!', 'Enter your search query!', 'Ok');
      return;
    }

    if (searchQuery === lastQuery) {
      Notiflix.Report.info(
        'Same query!',
        'Please enter a different search query!',
        'Ok'
      );
      return;
    }

    this.props.onSubmit(searchQuery);
    this.setState({ searchQuery, lastQuery: searchQuery });
  };

  render() {
    return (
      <Header>
        <Form onSubmit={this.onHandleSubmit}>
          <Button type="submit">
            <ImSearch
              style={{ marginRight: 2, marginTop: 4, width: 25, height: 25 }}
            />
            <Label>Search</Label>
          </Button>
          <Input
            type="text"
            value={this.state.query}
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="queryInput"
            onChange={this.handleChangeInput}
          />
        </Form>
      </Header>
    );
  }
}
