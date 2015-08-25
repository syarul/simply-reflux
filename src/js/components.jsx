/** @jsx React.DOM */

(function(React, ReactRouter, Reflux, TodoActions, todoListStore, global) {
    var DoCount = React.createClass({
        render: function() {
            return (
                <div className="button">
                  <button onClick={TodoActions.pressBtn}>Count Add</button><br />
                </div>
            );
        }
    });
    var ShowCount = React.createClass({
        // assign store data to props
        propTypes: {
            count: React.PropTypes.object.isRequired,
        },
        render: function() {
            var counter = this.props.count.pressCounter;
            return (
                <div className="counter-data">
                   Counter : {counter}
                </div>
            );
        }
    });
    
    var App = React.createClass({
        // this will cause setState({count:updateCount}) whenever the store does trigger(updateCount)
        mixins: [Reflux.connect(todoListStore,"count")],
        render: function() {
            return (
                <div className="App">
                    <DoCount />
                    <ShowCount count={this.state.count} />
                </div>
            );
        }
    });

    //Declare routing on app init
    var routes = (
        <ReactRouter.Route name="App" path="/" handler={App}>
            <ReactRouter.Route handler={DoCount} />
        </ReactRouter.Route>
    );

    ReactRouter.run(routes, function(Handler) {
        React.render(<Handler/>, document.getElementById('content'));
    });

})(window.React, window.ReactRouter, window.Reflux, window.TodoActions, window.todoListStore, window);
