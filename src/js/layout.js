var Router = require('react-router'),
    Reflux = require('reflux'),
    React = require('react'),
    todoListStore = require('./store/store');

module.exports = React.createClass({
    displayName: 'Layout',
    // this will cause setState({count:updateCount}) whenever the store does trigger(updateCount)
    mixins: [Reflux.connect(todoListStore,'count')],
    render: function() {
        return (
            <div className="Layout">
                <ul>
                    <li><Router.Link to="docount">Do Count</Router.Link></li>
                    <li><Router.Link to="firebase">Firebase Test</Router.Link></li>
                    <li><Router.Link to="about">About</Router.Link></li>
                </ul>
                <Router.RouteHandler count={this.state.count}/>
            </div>
        );
    }
});