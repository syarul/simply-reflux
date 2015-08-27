/** @jsx React.DOM */

(function(React, ReactRouter, Reflux, TodoActions, todoListStore, Firebase, ReactFireMixin, global) {
    var DoCount = React.createClass({

        // assign store data to props
        propTypes: {
            count: React.PropTypes.object.isRequired,
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
    var FirebaseApp = React.createClass({
        //testing firebase+react
        mixins: [ReactFireMixin],
        getInitialState: function() {
            var temp = "retriving firebase data..";
            return {
              singleObject: {
                '.key': temp,
                '.value': temp,
              },
              array: {
                '.key': temp,
                'name': temp,
                'age': temp
              }
            };
          },
        componentWillMount() {
            this.bindAsObject(new Firebase("https://scorching-inferno-2673.firebaseio.com/data"), "singleObject");
            this.bindAsObject(new Firebase("https://scorching-inferno-2673.firebaseio.com/items"), "array");
        },
        render: function() {
            var datafromfirebase = this.state.singleObject;
            var arrayfromfirebase = this.state.array;
            //console.log(this.state.array)
            return (
                <div>
                    <h1 className="header">
                       Firebase Test
       
                    </h1>
                    <p>Object</p>
                    <ul>
                    <li>key: {datafromfirebase['.key']}</li>
                    <li>value: {datafromfirebase['.value']}</li>
                    </ul>
                    <p>Array</p>
                    <ul>
                    <li>key: {arrayfromfirebase['.key']}</li>
                    <li>name: {arrayfromfirebase['name']}</li>
                    <li>age: {arrayfromfirebase['age']}</li>
                    </ul>
                </div>
         
            );
        }
    });
    var About = React.createClass({

        render: function() {
            return (
                <h1 className="header">
                   About
                </h1>
            );
        }
    });
    //Only works with HTML5 PushState or remove ReactRouter.HistoryLocation at line 81
    var NotFoundRoute = React.createClass({

        render: function() {
            return (
                <h1 className="header">
                   404 Not Found.
                </h1>
            );
        }
    });
    
    var App = React.createClass({
        // this will cause setState({count:updateCount}) whenever the store does trigger(updateCount)
        mixins: [Reflux.connect(todoListStore,"count")],
        render: function() {
            return (
                <div className="App">
                    <ul>
                        <li><ReactRouter.Link to="docount">Do Count</ReactRouter.Link></li>
                        <li><ReactRouter.Link to="firebase">Firebase Test</ReactRouter.Link></li>
                        <li><ReactRouter.Link to="about">About</ReactRouter.Link></li>
                    </ul>
                    <ReactRouter.RouteHandler count={this.state.count}/>
                </div>
            );
        }
    });

    //Declare routing on app init
    var routes = (
        
            <ReactRouter.Route path="/" handler={App}>
                <ReactRouter.Route name="firebase" handler={FirebaseApp} />
                <ReactRouter.Route name="about" handler={About} />
                <ReactRouter.DefaultRoute name="docount" handler={DoCount} />
                <ReactRouter.NotFoundRoute handler={NotFoundRoute} />
            </ReactRouter.Route>
        
    );

    ReactRouter.run(routes, ReactRouter.HistoryLocation, function(Handler) {
        React.render(<Handler/>, document.getElementById('content'));
    });

})(window.React, window.ReactRouter, window.Reflux, window.TodoActions, window.todoListStore, window.Firebase, window.ReactFireMixin, window);
