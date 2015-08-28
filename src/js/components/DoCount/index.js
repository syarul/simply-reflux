var React = require('react'),
    TodoActions = require('../../actions/actions');

module.exports = React.createClass({
    displayName: 'DoCount',
    // assign store data to props
    propTypes: {
        count: React.PropTypes.object.isRequired
    },
    render: function() {
        var counter = this.props.count.pressCounter;
        return (
            <div className="button">
              <button onClick={TodoActions.pressBtn}>Count Add</button><br />
              Counter : {counter}
            </div>
            );
    }
});