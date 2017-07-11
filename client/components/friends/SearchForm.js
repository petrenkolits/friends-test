import React from 'react';
import { connect } from 'react-redux';
import { listFriends } from '../../actions/friendActions';
import TextFieldGroup from '../common/TextFieldGroup';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: '',
      errors: {},
      isLoading: false
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.listFriends(this.state);
  }

  render() {
    const { searchString, errors, isLoading } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <h1>Search</h1>

        <TextFieldGroup
          field="searchString"
          label="Event Title"
          name="title"
          value={searchString}
          onChange={this.onChange}
          error={errors.searchString}
        />

        <button type="submit" className="btn btn-primary">Search</button>
      </form>
    );
  }
}

SearchForm.propTypes = {
  listFriends: React.PropTypes.func.isRequired
}

export default connect(null, { listFriends })(SearchForm);
