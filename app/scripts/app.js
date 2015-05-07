
var React = window.React = require('react'),
    mountNode = document.getElementById("app");

var MovieApp = React.createClass({
  getInitialState: function () {
    return { search: '' };
  },
  handleUserInput: function (searchText) {
    this.setState({search: searchText});
    console.log(searchText)
  },
  render: function () {
    return (
      <div>
        <MovieSearch 
          onUserInput={this.handleUserInput} />
        <MovieList />
      </div>
      );
  }
});

var MovieList = React.createClass({
  render: function () {
    var items = ['Hello World', 'hi', 'foo', 'bar'];
    return (
      <ul> 

      </ul>
      );
  }
});

var MovieRow = React.createClass({
  render: function () {
    return (
      <li> foo  </li>
      );
  }
});

var MovieSearch = React.createClass({
  onChange: function () {
    this.props.onUserInput(this.refs.search.getDOMNode().value);
  },
  render: function () {
    return <input type="text" onChange={this.onChange} ref="search"/>;
  }
})


React.render(<MovieApp />, mountNode);

